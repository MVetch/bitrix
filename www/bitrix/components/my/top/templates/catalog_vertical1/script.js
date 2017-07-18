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