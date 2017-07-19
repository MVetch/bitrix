<?if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();
$arItems = count($arResult['PRODUCTS']);
for($i = 0; $i<$arItems; $i++){
    $arResult['PRODUCTS'][$i]['DETAIL_PICTURE'] = CFile::GetFilearray($arResult['PRODUCTS'][$i]['DETAIL_PICTURE']);
}
?>