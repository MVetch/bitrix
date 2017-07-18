<?if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();

class CBitrixTopComponent extends CBitrixComponent
{

	public function getSectionProps($arSelect, $IBlock = 2)
	{
		$result = CIBlockSection::GetList(
			array(),
			array("IBLOCK_ID"=>$IBlock),
			true,
			$arSelect,
			Array("nPageSize"=>30)
		);
		return $result->arResult;
	}

	public function sortSectionRecursive($depth_level, $sections)
	{
		if($depth_level == 1){
			return $sections;
		}
		foreach ($sections as $section) {
			if($section['DEPTH_LEVEL'] == $depth_level){
				$result[$section['IBLOCK_SECTION_ID']-1]['CHILDS'][] = $section;
			}
			elseif($section['DEPTH_LEVEL'] < $depth_level)
				$result[$section['ID']-1] = $section;
		}
		if(!isset($result) or empty($result))
			$result = $sections;
		return $this->sortSectionRecursive($depth_level - 1, $result);
	}
}