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
$cacheId = "topComponent/".$_SERVER['PHP_SELF'];
foreach ($arParams as $key => $value) {
    $cacheId .= ', '.$key.' = '.$value;
}
$cacheId .= \Bitrix\Sale\FUser::GetId();
$cacheId = md5($cacheId);
$cachePath = '/'.$cacheId;

if($obCache->InitCache($lifeTime, $cacheId, $cachePath))
{
    $vars = $obCache->GetVars();
    extract($vars);
}
elseif($obCache->StartDataCache())
{
    // depth level
    if (isset($arParams["MAX_LEVEL"]) && 1 < intval($arParams["MAX_LEVEL"]) && intval($arParams["MAX_LEVEL"]) < 5){
        $arParams["MAX_LEVEL"] = intval($arParams["MAX_LEVEL"]);
    } else{
        $arParams["MAX_LEVEL"] = 1;
    }

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
        array("NAME" => "ASC"),
        array("FUSER_ID" => \Bitrix\Sale\FUser::GetId(), "!ORDER_ID" => null),
        false,
        false,
        array("NAME", "DETAIL_PAGE_URL", "QUANTITY")
    );

    $names = array();
    while ($list = $products->fetch()) {
        $prodInfo[] = array(
            "NAME" => $list['NAME'], 
            "DETAIL_PAGE_URL" => $list['DETAIL_PAGE_URL'], 
            "QUANTITY" => $list['QUANTITY']
        );
        $names[] = $list['NAME'];
    }
    $arFilter = array("IBLOCK_ID"=>$arParams["IBLOCK_ID"], "NAME" => $names);
    $arSelect = array(
        "IBLOCK_SECTION_ID", 
        "NAME", 
        "DETAIL_TEXT",
        "DETAIL_PICTURE"
    );
    $productsProps = CIBlockElement::GetList(array("IBLOCK_SECTION_ID"=>"ASC"), $arFilter, false, array("nPageSize"=>30), $arSelect);

    while ($productsPropsList = $productsProps->fetch()) {
        $arResult['PRODUCTS'][] = $productsPropsList;
    }
    
    $productsPropsCount = count($arResult['PRODUCTS']);

    for($j=0; $j<$productsPropsCount; $j++) {
        foreach($prodInfo as $prodInfoItem) {
            if($prodInfoItem['NAME'] == $arResult['PRODUCTS'][$j]['NAME']){
                if(!isset($arResult['PRODUCTS'][$j]['QUANTITY'])){
                    $arResult['PRODUCTS'][$j]['QUANTITY'] = $prodInfoItem['QUANTITY'];
                } else {
                    $arResult['PRODUCTS'][$j]['QUANTITY'] += $prodInfoItem['QUANTITY'];
                }
            }
        }
        if(!isset($sections[$arResult['PRODUCTS'][$j]['IBLOCK_SECTION_ID']-1]['CNT_ORDER'])){
            $sections[$arResult['PRODUCTS'][$j]['IBLOCK_SECTION_ID']-1]['CNT_ORDER'] = $arResult['PRODUCTS'][$j]['QUANTITY'];
        } else {
            $sections[$arResult['PRODUCTS'][$j]['IBLOCK_SECTION_ID']-1]['CNT_ORDER'] += $arResult['PRODUCTS'][$j]['QUANTITY'];
        }
    }
    $arResult['SECTIONS'] = $this->sortSectionRecursive($arParams['MAX_LEVEL'], $sections);
    $obCache->EndDataCache(array('arResult' => $arResult));
}
$this->IncludeComponentTemplate();