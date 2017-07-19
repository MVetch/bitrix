<?
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
$APPLICATION->SetTitle("ТОП моих покупок");
?><?$APPLICATION->IncludeComponent(
    "my:top",
    "catalog_vertical1",
    array(
        "MAX_LEVEL" => "3",
        "CACHE_TIME" => "30",
        "IBLOCK_ID" => "2"
    )
);
?><br><?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>