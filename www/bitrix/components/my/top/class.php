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
            array("nPageSize"=>30)
        );
        $ret = array();
        while ($list = $result->Fetch()) {
            $ret[] = $list;
        }
        return $ret;
    }

    public function sortSectionRecursive($depthLevel, $sections)
    {
        if($depthLevel == 1){
            return $sections;
        }
        foreach ($sections as $section) {
            if($section['DEPTH_LEVEL'] == $depthLevel){
                $result[$section['IBLOCK_SECTION_ID']-1]['CHILDS'][] = $section;
            } elseif($section['DEPTH_LEVEL'] < $depthLevel){
                $result[$section['ID']-1] = $section;
            }
        }
        if(!isset($result) or empty($result)){
            $result = $sections;
        }
        return $this->sortSectionRecursive($depthLevel - 1, $result);
    }
}