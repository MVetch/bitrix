<?if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();?>
<div style="position: inherit;">
	<div class="navigation">
		<ul class="mainmenu">
		<?foreach($arResult['SECTIONS'] as $section):?>
			<li onclick="showDivNeeded(<?=$section['ID']?>)">
				<a><?=$section['NAME']?> <?=!isset($section['CHILDS'])?'('.(isset($section['CNT_ORDER'])? $section['CNT_ORDER']: 0).')':''?></a>
				<?if(isset($section['CHILDS'])):?>
					<ul class="submenu">
						<?foreach($section['CHILDS'] as $child):?>
							<li class="<?if(isset($child['CHILDS'])):?>thirdMenuMain<?endif;?>" onclick="showDivNeeded(<?=$section['ID']?>)">
								<a><?=$child['NAME']?> <?=!isset($child['CHILDS'])?'('.(isset($child['CNT_ORDER'])? $child['CNT_ORDER']: 0).')':''?></a>
								<?if(isset($child['CHILDS'])):?>
									<ul class="thirdmenu">
										<?foreach($child['CHILDS'] as $child3):?>
											<li onclick="showDivNeeded(<?=$section['ID']?>)">
												<a><?=$child3['NAME']?> <?=!isset($child3['CHILDS'])?'('.(isset($child3['CNT_ORDER'])? $child3['CNT_ORDER']: 0).')':''?></a>
											</li>
										<?endforeach;?>
									</ul>
								<?endif;?>
							</li>
						<?endforeach;?>
					</ul>
				<?endif;?>
			</li>
		<?endforeach;?>
		</ul>
	</div>

	<?$curIB = 0;?>
	<div id="0">
	<?foreach($arResult['PRODUCTS'] as $product):?>
		<?if($product['IBLOCK_SECTION_ID'] != $curIB):?>
			</div>
			<div id="<?=$product['IBLOCK_SECTION_ID']?>" style="display: none" class="divToShow">
			<?$curIB = $product['IBLOCK_SECTION_ID']?>
		<?endif?>
		<div class="product">
			<?$image=$product['DETAIL_PICTURE'];?>
			<img src="<?='/upload/'.$image['SUBDIR'].'/'.$image['FILE_NAME']?>">
			<a href="<?=$product['DETAIL_PAGE_URL']?>"><?=$product['NAME']?></a>
			<p><?=$product['DETAIL_TEXT']?></p>
		</div>
	<?endforeach;?>
	</div>
</div>