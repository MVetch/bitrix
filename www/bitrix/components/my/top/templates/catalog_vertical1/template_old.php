<?if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();

if (empty($arResult["ALL_ITEMS"]))
	return;

if (file_exists($_SERVER["DOCUMENT_ROOT"].$this->GetFolder().'/themes/'.$arParams["MENU_THEME"].'/colors.css'))
	$APPLICATION->SetAdditionalCSS($this->GetFolder().'/themes/'.$arParams["MENU_THEME"].'/colors.css');

$menuBlockId = "catalog_menu_".$this->randString();
?>
<nav class="navigation">
	<ul id="ul_<?=$menuBlockId?>" class="mainmenu">
	<?foreach($arResult["MENU_STRUCTURE"] as $itemID => $arColumns):?>     <!-- first level-->
		
		<li class="<?if($arResult["ALL_ITEMS"][$itemID]["SELECTED"]):?>current<?endif?>">
			<a href="<?=$arResult["ALL_ITEMS"][$itemID]["LINK"]?>">
				<?=$arResult["ALL_ITEMS"][$itemID]["TEXT"]?>
			</a>
		<?if (is_array($arColumns) && count($arColumns) > 0):?>
			<?foreach($arColumns as $key=>$arRow):?>
				<ul class="submenu">
				<?foreach($arRow as $itemIdLevel_2=>$arLevel_3):?>  <!-- second level-->
					<li class="<?if (is_array($arLevel_3) && count($arLevel_3) > 0):?>thirdMenuMain<?endif?>">
						<a href="<?=$arResult["ALL_ITEMS"][$itemIdLevel_2]["LINK"]?>">
							<?=$arResult["ALL_ITEMS"][$itemIdLevel_2]["TEXT"]?>
						</a>
					<?if (is_array($arLevel_3) && count($arLevel_3) > 0):?>
						<ul class="thirdmenu">
							<?foreach($arLevel_3 as $itemIdLevel_3):?>	<!-- third level-->
								<li>
									<a href="<?=$arResult["ALL_ITEMS"][$itemIdLevel_3]["LINK"]?>">
										<?=$arResult["ALL_ITEMS"][$itemIdLevel_3]["TEXT"]?>
									</a>
								</li>
							<?endforeach;?>
						</ul>
					<?endif?>
					</li>
				<?endforeach;?>
				</ul>
			<?endforeach;?>
			<div style="clear: both;"></div>
		<?endif?>
		</li>
	<?endforeach;?>
	</ul>
	<div style="clear: both;"></div>
</nav>