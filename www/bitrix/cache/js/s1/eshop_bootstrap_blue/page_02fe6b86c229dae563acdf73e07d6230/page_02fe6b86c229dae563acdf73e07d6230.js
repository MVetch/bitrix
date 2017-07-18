
; /* Start:"a:4:{s:4:"full";s:77:"/bitrix/components/my/top/templates/catalog_vertical1/script.js?1500332291368";s:6:"source";s:63:"/bitrix/components/my/top/templates/catalog_vertical1/script.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
var activeId=0;
function showDivNeeded(id){
	if(document.getElementById(id)){
		document.getElementById(activeId).style.display = "none";
		document.getElementById(id).style.display = "inline-block";
		activeId = id;
	}
	else{
		document.getElementById(activeId).style.display = "none";
		document.getElementById(0).style.display = "inline-block";
		activeId = 0;
	}
}
/* End */
;; /* /bitrix/components/my/top/templates/catalog_vertical1/script.js?1500332291368*/
