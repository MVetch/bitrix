
; /* Start:"a:4:{s:4:"full";s:77:"/bitrix/components/my/top/templates/catalog_vertical1/script.js?1500330917214";s:6:"source";s:63:"/bitrix/components/my/top/templates/catalog_vertical1/script.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
var activeId=0;
function showDivNeeded(id){
	if(document.getElementById(id)){
		document.getElementById(activeId).style.display = "none";
		document.getElementById(id).style.display = "block";
		activeId = id;
	}
}
/* End */
;; /* /bitrix/components/my/top/templates/catalog_vertical1/script.js?1500330917214*/