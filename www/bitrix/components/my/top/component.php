<?
if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true) die();

/**
* Bitrix vars
*
* @var array $arResult
* @var array $arParams
* @var CMain $APPLICATION
* @var CUser $USER
* @var CBitrixTopComponent $this
*/


$obCache = new CPHPCache();
$lifeTime = intval($arParams['CACHE_TIME']);
$cacheId = md5(CUser::GetId());
$cachePath = '/'.$cacheId;

if($obCache->InitCache($lifeTime, $cacheId, $cachePath))
{
   $vars = $obCache->GetVars();
   extract($vars);
}
elseif($obCache->StartDataCache())
{
	// depth level
	if (isset($arParams["MAX_LEVEL"]) && 1 < intval($arParams["MAX_LEVEL"]) && intval($arParams["MAX_LEVEL"]) < 5)
		$arParams["MAX_LEVEL"] = intval($arParams["MAX_LEVEL"]);
	else
		$arParams["MAX_LEVEL"] = 1;

	$sections = $this->getSectionProps(
		array(
			"ID", 
			"NAME", 
			"DEPTH_LEVEL", 
			"IBLOCK_SECTION_ID"
		),
		$arParams["IBLOCK_ID"]
	);


	$products = CSaleBasket::GetList(
		array(),
		array("FUSER_ID" => CUser::GetId()),
		false,
		false,
		array("NAME", "DETAIL_PAGE_URL")
	);

	$names = array();
	while ($list = $products->fetch()) {
		$names[$list['DETAIL_PAGE_URL']] = $list['NAME'];
	}
	$arFilter = Array("IBLOCK_ID"=>$arParams["IBLOCK_ID"], "ACTIVE_DATE"=>"Y", "ACTIVE"=>"Y", "NAME" => $names);
	$arSelect = Array(
		"IBLOCK_SECTION_ID", 
		"NAME", 
		"DETAIL_TEXT",
		"DETAIL_PICTURE"
	);
	$productsProps = CIBlockElement::GetList(Array("IBLOCK_SECTION_ID"=>"ASC"), $arFilter, false, Array(), $arSelect);

	$arResult['PRODUCTS'] = $productsProps->arResult;

	foreach ($names as $url => $name)
		for($i=0; $i<count($arResult['PRODUCTS']); $i++)
			if($arResult['PRODUCTS'][$i]['NAME'] == $name)
				$arResult['PRODUCTS'][$i]['DETAIL_PAGE_URL'] = $url;

	while ($list = $productsProps->fetch()) {
		if(!isset($sections[$list['IBLOCK_SECTION_ID']-1]['CNT_ORDER']))
			$sections[$list['IBLOCK_SECTION_ID']-1]['CNT_ORDER'] = 1;
		else $sections[$list['IBLOCK_SECTION_ID']-1]['CNT_ORDER']++;
	}
	$arResult['SECTIONS'] = $this->sortSectionRecursive($arParams['MAX_LEVEL'], $sections);
	$obCache->EndDataCache(array('arResult' => $arResult));
}
$this->IncludeComponentTemplate();
?>