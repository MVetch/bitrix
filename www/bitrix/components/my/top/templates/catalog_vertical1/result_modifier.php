<?if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();
for($i = 0; $i<count($arResult['PRODUCTS']); $i++){
	$arResult['PRODUCTS'][$i]['DETAIL_PICTURE'] = CFile::GetFileArray($arResult['PRODUCTS'][$i]['DETAIL_PICTURE']);
}
?>