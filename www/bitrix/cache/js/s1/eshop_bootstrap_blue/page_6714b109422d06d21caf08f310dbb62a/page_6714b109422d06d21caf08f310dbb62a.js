
; /* Start:"a:4:{s:4:"full";s:82:"/bitrix/components/my/top/templates/catalog_vertical1/script.min.js?15001094711693";s:6:"source";s:63:"/bitrix/components/my/top/templates/catalog_vertical1/script.js";s:3:"min";s:67:"/bitrix/components/my/top/templates/catalog_vertical1/script.min.js";s:3:"map";s:67:"/bitrix/components/my/top/templates/catalog_vertical1/script.map.js";}"*/
(function(t){if(!t.BX||BX.CatalogVertMenu)return;BX.CatalogVertMenu={items:{},idCnt:1,currentItem:null,overItem:null,outItem:null,timeoutOver:null,timeoutOut:null,getItem:function(t){if(!BX.type.isDomNode(t))return null;var i=!t.id||!BX.type.isNotEmptyString(t.id)?t.id="menu-item-vert-"+this.idCnt++:t.id;if(!this.items[i])this.items[i]=new e(t);return this.items[i]},itemOver:function(t){var e=this.getItem(t);if(!e)return;if(this.outItem==e){clearTimeout(e.timeoutOut)}this.overItem=e;if(e.timeoutOver){clearTimeout(e.timeoutOver)}e.timeoutOver=setTimeout(function(){if(BX.CatalogVertMenu.overItem==e){e.itemOver()}},100)},itemOut:function(t){var e=this.getItem(t);if(!e)return;this.outItem=e;if(e.timeoutOut){clearTimeout(e.timeoutOut)}e.timeoutOut=setTimeout(function(){if(e!=BX.CatalogVertMenu.overItem){e.itemOut()}if(e==BX.CatalogVertMenu.outItem){e.itemOut()}},100)},changeSectionPicture:function(t){var e=BX.nextSibling(t);var i=e.innerHTML||"";if(e){var n=BX.nextSibling(e);var r=BX.clone(BX.firstChild(n))}var u=BX.hasClass(t,"bx_hma_one_lvl")?t:BX.findParent(t,{className:"bx_hma_one_lvl"});var o=BX.findChild(u,{className:"bx_section_picture"},true,false);o.innerHTML="";if(r){o.appendChild(r)}var m=BX.findChild(u,{className:"bx_section_description"},true,false);m.innerHTML=i;BX.previousSibling(m).innerHTML=t.innerHTML;o.parentNode.href=t.href}};var e=function(t){this.element=t;this.popup=BX.findChild(t,{className:"bx_children_container"},false,false)};e.prototype.itemOver=function(){if(!BX.hasClass(this.element,"hover")){BX.addClass(this.element,"hover")}};e.prototype.itemOut=function(){BX.removeClass(this.element,"hover")}})(window);
/* End */
;; /* /bitrix/components/my/top/templates/catalog_vertical1/script.min.js?15001094711693*/

//# sourceMappingURL=page_6714b109422d06d21caf08f310dbb62a.map.js