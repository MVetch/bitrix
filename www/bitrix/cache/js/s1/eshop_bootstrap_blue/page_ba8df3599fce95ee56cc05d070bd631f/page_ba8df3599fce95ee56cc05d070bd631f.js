
; /* Start:"a:4:{s:4:"full";s:105:"/bitrix/components/bitrix/catalog.product.subscribe.list/templates/.default/script.min.js?149976388524179";s:6:"source";s:85:"/bitrix/components/bitrix/catalog.product.subscribe.list/templates/.default/script.js";s:3:"min";s:89:"/bitrix/components/bitrix/catalog.product.subscribe.list/templates/.default/script.min.js";s:3:"map";s:89:"/bitrix/components/bitrix/catalog.product.subscribe.list/templates/.default/script.map.js";}"*/
(function(t){if(!!t.JCCatalogProductSubscribeList){return}var s=function(t){s.superclass.constructor.apply(this,arguments);this.nameNode=BX.create("span",{props:{className:"bx_medium bx_bt_button",id:this.id},text:t.text});this.buttonNode=BX.create("span",{attrs:{className:t.ownerClass},style:{marginBottom:"0",borderBottom:"0 none transparent"},children:[this.nameNode],events:this.contextEvents});if(BX.browser.IsIE()){this.buttonNode.setAttribute("hideFocus","hidefocus")}};BX.extend(s,BX.PopupWindowButton);var e=function(t){e.superclass.constructor.apply(this,arguments);this.nameNode=BX.create("span",{props:{id:this.id},style:typeof t.style==="object"?t.style:{},text:t.text});this.buttonNode=BX.create("span",{attrs:{className:t.className},style:{marginBottom:"0",borderBottom:"0 none transparent"},children:[this.nameNode],events:this.contextEvents});if(BX.browser.IsIE()){this.buttonNode.setAttribute("hideFocus","hidefocus")}};BX.extend(e,BX.PopupWindowButton);t.JCCatalogProductSubscribeList=function(t){this.productType=0;this.showQuantity=true;this.showAbsent=true;this.secondPict=false;this.showOldPrice=false;this.showPercent=false;this.showSkuProps=false;this.visual={ID:"",PICT_ID:"",SECOND_PICT_ID:"",QUANTITY_ID:"",QUANTITY_UP_ID:"",QUANTITY_DOWN_ID:"",PRICE_ID:"",DSC_PERC:"",SECOND_DSC_PERC:"",DISPLAY_PROP_DIV:"",BASKET_PROP_DIV:""};this.product={checkQuantity:false,maxQuantity:0,stepQuantity:1,isDblQuantity:false,canBuy:true,canSubscription:true,name:"",pict:{},id:0,addUrl:"",buyUrl:"",listSubscribeId:{}};this.basketData={useProps:false,emptyProps:false,quantity:"quantity",props:"prop",basketUrl:""};this.defaultPict={pict:null,secondPict:null};this.checkQuantity=false;this.maxQuantity=0;this.stepQuantity=1;this.isDblQuantity=false;this.canBuy=true;this.canSubscription=true;this.precision=6;this.precisionFactor=Math.pow(10,this.precision);this.offers=[];this.offerNum=0;this.treeProps=[];this.obTreeRows=[];this.showCount=[];this.showStart=[];this.selectedValues={};this.obProduct=null;this.obQuantity=null;this.obQuantityUp=null;this.obQuantityDown=null;this.obPict=null;this.obSecondPict=null;this.obPrice=null;this.obTree=null;this.obBuyBtn=null;this.deleteSubscribeBtn=null;this.obDscPerc=null;this.obSecondDscPerc=null;this.obSkuProps=null;this.obMeasure=null;this.obPopupWin=null;this.basketUrl="";this.basketParams={};this.treeRowShowSize=5;this.treeEnableArrow={display:"",cursor:"pointer",opacity:1};this.treeDisableArrow={display:"",cursor:"default",opacity:.2};this.lastElement=false;this.containerHeight=0;this.errorCode=0;this.ajaxUrl="/bitrix/components/bitrix/catalog.product.subscribe.list/ajax.php";if("object"===typeof t){this.productType=parseInt(t.PRODUCT_TYPE,10);this.showQuantity=t.SHOW_QUANTITY;this.showAbsent=t.SHOW_ABSENT;this.secondPict=!!t.SECOND_PICT;this.showOldPrice=!!t.SHOW_OLD_PRICE;this.showPercent=!!t.SHOW_DISCOUNT_PERCENT;this.showSkuProps=!!t.SHOW_SKU_PROPS;this.notifyUser=Boolean(t.NOTIFY_USER);this.notifyPopupTitle=t.NOTIFY_POPUP_TITLE;this.notifySuccess=Boolean(t.NOTIFY_SUCCESS);this.notifyMessage=t.NOTIFY_MESSAGE;if(this.notifyUser){BX.ready(BX.delegate(this.showPopupNotifyingUser,this));return}this.visual=t.VISUAL;if(!!this.visual.DELETE_SUBSCRIBE_ID){this.deleteSubscribeBtn=BX(this.visual.DELETE_SUBSCRIBE_ID);if(!!this.deleteSubscribeBtn){BX.bind(this.deleteSubscribeBtn,"click",BX.delegate(this.deleteSubscribe,this))}this.product.listSubscribeId=t.PRODUCT.LIST_SUBSCRIBE_ID}switch(this.productType){case 1:case 2:if(!!t.PRODUCT&&"object"===typeof t.PRODUCT){if(this.showQuantity){this.product.checkQuantity=t.PRODUCT.CHECK_QUANTITY;this.product.isDblQuantity=t.PRODUCT.QUANTITY_FLOAT;if(this.product.checkQuantity){this.product.maxQuantity=this.product.isDblQuantity?parseFloat(t.PRODUCT.MAX_QUANTITY):parseInt(t.PRODUCT.MAX_QUANTITY,10)}this.product.stepQuantity=this.product.isDblQuantity?parseFloat(t.PRODUCT.STEP_QUANTITY):parseInt(t.PRODUCT.STEP_QUANTITY,10);this.checkQuantity=this.product.checkQuantity;this.isDblQuantity=this.product.isDblQuantity;this.maxQuantity=this.product.maxQuantity;this.stepQuantity=this.product.stepQuantity;if(this.isDblQuantity){this.stepQuantity=Math.round(this.stepQuantity*this.precisionFactor)/this.precisionFactor}}this.product.canBuy=t.PRODUCT.CAN_BUY;this.product.canSubscription=t.PRODUCT.SUBSCRIPTION;this.canBuy=this.product.canBuy;this.canSubscription=this.product.canSubscription;this.product.name=t.PRODUCT.NAME;this.product.pict=t.PRODUCT.PICT;this.product.id=t.PRODUCT.ID;if(!!t.PRODUCT.ADD_URL){this.product.addUrl=t.PRODUCT.ADD_URL}if(!!t.PRODUCT.BUY_URL){this.product.buyUrl=t.PRODUCT.BUY_URL}if(!!t.BASKET&&"object"===typeof t.BASKET){this.basketData.useProps=!!t.BASKET.ADD_PROPS;this.basketData.emptyProps=!!t.BASKET.EMPTY_PROPS}}else{this.errorCode=-1}break;case 3:if(!!t.PRODUCT&&"object"===typeof t.PRODUCT){this.product.name=t.PRODUCT.NAME;this.product.id=t.PRODUCT.ID}if(!!t.OFFERS&&BX.type.isArray(t.OFFERS)){this.offers=t.OFFERS;this.offerNum=0;if(!!t.OFFER_SELECTED){this.offerNum=parseInt(t.OFFER_SELECTED,10)}if(isNaN(this.offerNum)){this.offerNum=0}if(!!t.TREE_PROPS){this.treeProps=t.TREE_PROPS}if(!!t.DEFAULT_PICTURE){this.defaultPict.pict=t.DEFAULT_PICTURE.PICTURE;this.defaultPict.secondPict=t.DEFAULT_PICTURE.PICTURE_SECOND}}else{this.errorCode=-1}break;default:this.errorCode=-1}if(!!t.BASKET&&"object"===typeof t.BASKET){if(!!t.BASKET.QUANTITY){this.basketData.quantity=t.BASKET.QUANTITY}if(!!t.BASKET.PROPS){this.basketData.props=t.BASKET.PROPS}if(!!t.BASKET.BASKET_URL){this.basketData.basketUrl=t.BASKET.BASKET_URL}}this.lastElement=!!t.LAST_ELEMENT&&"Y"===t.LAST_ELEMENT}if(0===this.errorCode){BX.ready(BX.delegate(this.Init,this))}};t.JCCatalogProductSubscribeList.prototype.Init=function(){var s=0,e="",i=null;this.obProduct=BX(this.visual.ID);if(!this.obProduct){this.errorCode=-1}this.obPict=BX(this.visual.PICT_ID);if(!this.obPict){this.errorCode=-2}if(this.secondPict&&!!this.visual.SECOND_PICT_ID){this.obSecondPict=BX(this.visual.SECOND_PICT_ID)}this.obPrice=BX(this.visual.PRICE_ID);if(!this.obPrice){this.errorCode=-16}if(this.showQuantity&&!!this.visual.QUANTITY_ID){this.obQuantity=BX(this.visual.QUANTITY_ID);if(!!this.visual.QUANTITY_UP_ID){this.obQuantityUp=BX(this.visual.QUANTITY_UP_ID)}if(!!this.visual.QUANTITY_DOWN_ID){this.obQuantityDown=BX(this.visual.QUANTITY_DOWN_ID)}}if(3===this.productType){if(!!this.visual.TREE_ID){this.obTree=BX(this.visual.TREE_ID);if(!this.obTree){this.errorCode=-256}e=this.visual.TREE_ITEM_ID;for(s=0;s<this.treeProps.length;s++){this.obTreeRows[s]={LEFT:BX(e+this.treeProps[s].ID+"_left"),RIGHT:BX(e+this.treeProps[s].ID+"_right"),LIST:BX(e+this.treeProps[s].ID+"_list"),CONT:BX(e+this.treeProps[s].ID+"_cont")};if(!this.obTreeRows[s].LEFT||!this.obTreeRows[s].RIGHT||!this.obTreeRows[s].LIST||!this.obTreeRows[s].CONT){this.errorCode=-512;break}}}if(!!this.visual.QUANTITY_MEASURE){this.obMeasure=BX(this.visual.QUANTITY_MEASURE)}}if(!!this.visual.BUY_ID){this.obBuyBtn=BX(this.visual.BUY_ID)}if(this.showPercent){if(!!this.visual.DSC_PERC){this.obDscPerc=BX(this.visual.DSC_PERC)}if(this.secondPict&&!!this.visual.SECOND_DSC_PERC){this.obSecondDscPerc=BX(this.visual.SECOND_DSC_PERC)}}if(this.showSkuProps){if(!!this.visual.DISPLAY_PROP_DIV){this.obSkuProps=BX(this.visual.DISPLAY_PROP_DIV)}}if(0===this.errorCode){if(this.showQuantity){if(!!this.obQuantityUp){BX.bind(this.obQuantityUp,"click",BX.delegate(this.QuantityUp,this))}if(!!this.obQuantityDown){BX.bind(this.obQuantityDown,"click",BX.delegate(this.QuantityDown,this))}if(!!this.obQuantity){BX.bind(this.obQuantity,"change",BX.delegate(this.QuantityChange,this))}}switch(this.productType){case 1:break;case 3:i=BX.findChildren(this.obTree,{tagName:"li"},true);if(!!i&&0<i.length){for(s=0;s<i.length;s++){BX.bind(i[s],"click",BX.delegate(this.SelectOfferProp,this))}}for(s=0;s<this.obTreeRows.length;s++){BX.bind(this.obTreeRows[s].LEFT,"click",BX.delegate(this.RowLeft,this));BX.bind(this.obTreeRows[s].RIGHT,"click",BX.delegate(this.RowRight,this))}this.SetCurrent();break}if(!!this.obBuyBtn){BX.bind(this.obBuyBtn,"click",BX.delegate(this.Basket,this))}if(this.lastElement){this.containerHeight=parseInt(this.obProduct.parentNode.offsetHeight,10);if(isNaN(this.containerHeight)){this.containerHeight=0}this.setHeight();BX.bind(t,"resize",BX.delegate(this.checkHeight,this));BX.bind(this.obProduct.parentNode,"mouseover",BX.delegate(this.setHeight,this));BX.bind(this.obProduct.parentNode,"mouseout",BX.delegate(this.clearHeight,this))}}};t.JCCatalogProductSubscribeList.prototype.showPopupNotifyingUser=function(){this.InitPopupWindow();this.obPopupWin.setTitleBar(this.notifyPopupTitle);var t;if(this.notifySuccess)t="bx-cpsl-notify-content-success";else t="bx-cpsl-notify-content-error";var s=BX.create("div",{props:{className:"bx-cpsl-popup-content"},children:[BX.create("p",{props:{className:t},text:this.notifyMessage})]});this.obPopupWin.setContent(s);this.obPopupWin.setButtons([new e({text:BX.message("CPSL_BTN_MESSAGE_CLOSE"),className:"btn btn-primary",events:{click:BX.delegate(function(){this.obPopupWin.close()},this)}})]);this.obPopupWin.show()};t.JCCatalogProductSubscribeList.prototype.checkHeight=function(){this.containerHeight=parseInt(this.obProduct.parentNode.offsetHeight,10);if(isNaN(this.containerHeight)){this.containerHeight=0}};t.JCCatalogProductSubscribeList.prototype.setHeight=function(){if(0<this.containerHeight){BX.adjust(this.obProduct.parentNode,{style:{height:this.containerHeight+"px"}})}};t.JCCatalogProductSubscribeList.prototype.clearHeight=function(){BX.adjust(this.obProduct.parentNode,{style:{height:"auto"}})};t.JCCatalogProductSubscribeList.prototype.QuantityUp=function(){var t=0,s=true;if(0===this.errorCode&&this.showQuantity&&this.canBuy){t=this.isDblQuantity?parseFloat(this.obQuantity.value):parseInt(this.obQuantity.value,10);if(!isNaN(t)){t+=this.stepQuantity;if(this.checkQuantity){if(t>this.maxQuantity){s=false}}if(s){if(this.isDblQuantity){t=Math.round(t*this.precisionFactor)/this.precisionFactor}this.obQuantity.value=t}}}};t.JCCatalogProductSubscribeList.prototype.QuantityDown=function(){var t=0,s=true;if(0===this.errorCode&&this.showQuantity&&this.canBuy){t=this.isDblQuantity?parseFloat(this.obQuantity.value):parseInt(this.obQuantity.value,10);if(!isNaN(t)){t-=this.stepQuantity;if(t<this.stepQuantity){s=false}if(s){if(this.isDblQuantity){t=Math.round(t*this.precisionFactor)/this.precisionFactor}this.obQuantity.value=t}}}};t.JCCatalogProductSubscribeList.prototype.QuantityChange=function(){var t=0,s=true;if(0===this.errorCode&&this.showQuantity){if(this.canBuy){t=this.isDblQuantity?parseFloat(this.obQuantity.value):parseInt(this.obQuantity.value,10);if(!isNaN(t)){if(this.checkQuantity){if(t>this.maxQuantity){s=false;t=this.maxQuantity}else if(t<this.stepQuantity){s=false;t=this.stepQuantity}}if(!s){this.obQuantity.value=t}}else{this.obQuantity.value=this.stepQuantity}}else{this.obQuantity.value=this.stepQuantity}}};t.JCCatalogProductSubscribeList.prototype.QuantitySet=function(t){if(0===this.errorCode){if(this.showQuantity){this.isDblQuantity=this.offers[t].QUANTITY_FLOAT;this.checkQuantity=this.offers[t].CHECK_QUANTITY;if(this.isDblQuantity){this.maxQuantity=parseFloat(this.offers[t].MAX_QUANTITY);this.stepQuantity=Math.round(parseFloat(this.offers[t].STEP_QUANTITY)*this.precisionFactor)/this.precisionFactor}else{this.maxQuantity=parseInt(this.offers[t].MAX_QUANTITY,10);this.stepQuantity=parseInt(this.offers[t].STEP_QUANTITY,10)}this.obQuantity.value=this.stepQuantity;this.obQuantity.disabled=!this.canBuy;if(!!this.obMeasure){if(!!this.offers[t].MEASURE){BX.adjust(this.obMeasure,{html:this.offers[t].MEASURE})}else{BX.adjust(this.obMeasure,{html:""})}}}}};t.JCCatalogProductSubscribeList.prototype.SelectOfferProp=function(){var t=0,s="",e="",i=[],o=null,a=BX.proxy_context;if(!!a&&a.hasAttribute("data-treevalue")){e=a.getAttribute("data-treevalue");i=e.split("_");if(this.SearchOfferPropIndex(i[0],i[1])){o=BX.findChildren(a.parentNode,{tagName:"li"},false);if(!!o&&0<o.length){for(t=0;t<o.length;t++){s=o[t].getAttribute("data-onevalue");if(s===i[1]){BX.addClass(o[t],"bx_active")}else{BX.removeClass(o[t],"bx_active")}}}}}};t.JCCatalogProductSubscribeList.prototype.SearchOfferPropIndex=function(t,s){var e="",i=false,o,a,r=[],h=[],n=-1,u={},l=[];for(o=0;o<this.treeProps.length;o++){if(this.treeProps[o].ID===t){n=o;break}}if(-1<n){for(o=0;o<n;o++){e="PROP_"+this.treeProps[o].ID;u[e]=this.selectedValues[e]}e="PROP_"+this.treeProps[n].ID;i=this.GetRowValues(u,e);if(!i){return false}if(!BX.util.in_array(s,i)){return false}u[e]=s;for(o=n+1;o<this.treeProps.length;o++){e="PROP_"+this.treeProps[o].ID;i=this.GetRowValues(u,e);if(!i){return false}h=[];if(this.showAbsent){r=[];l=[];l=BX.clone(u,true);for(a=0;a<i.length;a++){l[e]=i[a];h[h.length]=i[a];if(this.GetCanBuy(l))r[r.length]=i[a]}}else{r=i}if(!!this.selectedValues[e]&&BX.util.in_array(this.selectedValues[e],r)){u[e]=this.selectedValues[e]}else{if(this.showAbsent)u[e]=r.length>0?r[0]:h[0];else u[e]=r[0]}this.UpdateRow(o,u[e],i,r)}this.selectedValues=u;this.ChangeInfo()}return true};t.JCCatalogProductSubscribeList.prototype.RowLeft=function(){var t=0,s="",e=-1,i=BX.proxy_context;if(!!i&&i.hasAttribute("data-treevalue")){s=i.getAttribute("data-treevalue");for(t=0;t<this.treeProps.length;t++){if(this.treeProps[t].ID===s){e=t;break}}if(-1<e&&this.treeRowShowSize<this.showCount[e]){if(0>this.showStart[e]){this.showStart[e]++;BX.adjust(this.obTreeRows[e].LIST,{style:{marginLeft:this.showStart[e]*20+"%"}});BX.adjust(this.obTreeRows[e].RIGHT,{style:this.treeEnableArrow})}if(0<=this.showStart[e]){BX.adjust(this.obTreeRows[e].LEFT,{style:this.treeDisableArrow})}}}};t.JCCatalogProductSubscribeList.prototype.RowRight=function(){var t=0,s="",e=-1,i=BX.proxy_context;if(!!i&&i.hasAttribute("data-treevalue")){s=i.getAttribute("data-treevalue");for(t=0;t<this.treeProps.length;t++){if(this.treeProps[t].ID===s){e=t;break}}if(-1<e&&this.treeRowShowSize<this.showCount[e]){if(this.treeRowShowSize-this.showStart[e]<this.showCount[e]){this.showStart[e]--;BX.adjust(this.obTreeRows[e].LIST,{style:{marginLeft:this.showStart[e]*20+"%"}});BX.adjust(this.obTreeRows[e].LEFT,{style:this.treeEnableArrow})}if(this.treeRowShowSize-this.showStart[e]>=this.showCount[e]){BX.adjust(this.obTreeRows[e].RIGHT,{style:this.treeDisableArrow})}}}};t.JCCatalogProductSubscribeList.prototype.UpdateRow=function(t,s,e,i){var o=0,a=0,r="",h=0,n="",u={},l=false,c=false,f=false,p=0,b=this.treeEnableArrow,d=this.treeEnableArrow,P=0,T=null;if(-1<t&&t<this.obTreeRows.length){T=BX.findChildren(this.obTreeRows[t].LIST,{tagName:"li"},false);if(!!T&&0<T.length){l="PICT"===this.treeProps[t].SHOW_MODE;h=e.length;c=this.treeRowShowSize<h;n=c?100/h+"%":"20%";u={props:{className:""},style:{width:n}};if(l){u.style.paddingTop=n}for(o=0;o<T.length;o++){r=T[o].getAttribute("data-onevalue");f=r===s;u.props.className=f?"bx_active":"";u.style.display="none";if(BX.util.in_array(r,e)){u.style.display="";if(f){p=a}a++}BX.adjust(T[o],u)}u={style:{width:(c?20*h:100)+"%",marginLeft:"0%"}};if(l){BX.adjust(this.obTreeRows[t].CONT,{props:{className:c?"bx_item_detail_scu full":"bx_item_detail_scu"}})}else{BX.adjust(this.obTreeRows[t].CONT,{props:{className:c?"bx_item_detail_size full":"bx_item_detail_size"}})}if(c){if(p+1===h){d=this.treeDisableArrow}if(this.treeRowShowSize<=p){P=this.treeRowShowSize-p-1;u.style.marginLeft=P*20+"%"}if(0===P){b=this.treeDisableArrow}BX.adjust(this.obTreeRows[t].LEFT,{style:b});BX.adjust(this.obTreeRows[t].RIGHT,{style:d})}else{BX.adjust(this.obTreeRows[t].LEFT,{style:{display:"none"}});BX.adjust(this.obTreeRows[t].RIGHT,{style:{display:"none"}})}BX.adjust(this.obTreeRows[t].LIST,u);this.showCount[t]=h;this.showStart[t]=P}}};t.JCCatalogProductSubscribeList.prototype.GetRowValues=function(t,s){var e=0,i,o=[],a=false,r=true;if(0===t.length){for(e=0;e<this.offers.length;e++){if(!BX.util.in_array(this.offers[e].TREE[s],o)){o[o.length]=this.offers[e].TREE[s]}}a=true}else{for(e=0;e<this.offers.length;e++){r=true;for(i in t){if(t[i]!==this.offers[e].TREE[i]){r=false;break}}if(r){if(!BX.util.in_array(this.offers[e].TREE[s],o)){o[o.length]=this.offers[e].TREE[s]}a=true}}}return a?o:false};t.JCCatalogProductSubscribeList.prototype.GetCanBuy=function(t){var s=0,e,i=false,o=true;for(s=0;s<this.offers.length;s++){o=true;for(e in t){if(t[e]!==this.offers[s].TREE[e]){o=false;break}}if(o){if(this.offers[s].CAN_BUY){i=true;break}}}return i};t.JCCatalogProductSubscribeList.prototype.SetCurrent=function(){var t=0,s=0,e=[],i="",o=false,a={},r=[],h=this.offers[this.offerNum].TREE;for(t=0;t<this.treeProps.length;t++){i="PROP_"+this.treeProps[t].ID;o=this.GetRowValues(a,i);if(!o){break}if(BX.util.in_array(h[i],o)){a[i]=h[i]}else{a[i]=o[0];this.offerNum=0}if(this.showAbsent){e=[];r=[];r=BX.clone(a,true);for(s=0;s<o.length;s++){r[i]=o[s];if(this.GetCanBuy(r)){e[e.length]=o[s]}}}else{e=o}this.UpdateRow(t,a[i],o,e)}this.selectedValues=a;this.ChangeInfo()};t.JCCatalogProductSubscribeList.prototype.ChangeInfo=function(){var t=0,s,e=-1,i={},o=true,a="";for(t=0;t<this.offers.length;t++){o=true;for(s in this.selectedValues){if(this.selectedValues[s]!==this.offers[t].TREE[s]){o=false;break}}if(o){e=t;break}}if(-1<e){if(!!this.obPict){if(!!this.offers[e].PREVIEW_PICTURE){BX.adjust(this.obPict,{style:{backgroundImage:"url("+this.offers[e].PREVIEW_PICTURE.SRC+")"}})}else{BX.adjust(this.obPict,{style:{backgroundImage:"url("+this.defaultPict.pict.SRC+")"}})}}if(this.secondPict&&!!this.obSecondPict){if(!!this.offers[e].PREVIEW_PICTURE_SECOND){BX.adjust(this.obSecondPict,{style:{backgroundImage:"url("+this.offers[e].PREVIEW_PICTURE_SECOND.SRC+")"}})}else if(!!this.offers[e].PREVIEW_PICTURE.SRC){BX.adjust(this.obSecondPict,{style:{backgroundImage:"url("+this.offers[e].PREVIEW_PICTURE.SRC+")"}})}else if(!!this.defaultPict.secondPict){BX.adjust(this.obSecondPict,{style:{backgroundImage:"url("+this.defaultPict.secondPict.SRC+")"}})}else{BX.adjust(this.obSecondPict,{style:{backgroundImage:"url("+this.defaultPict.pict.SRC+")"}})}}if(this.showSkuProps&&!!this.obSkuProps){BX.adjust(this.obSkuProps,{style:{display:"none"},html:""})}this.offerNum=e;this.QuantitySet(this.offerNum)}};t.JCCatalogProductSubscribeList.prototype.InitBasketUrl=function(){switch(this.productType){case 1:case 2:this.basketUrl=this.product.addUrl;break;case 3:this.basketUrl=this.offers[this.offerNum].ADD_URL;break}this.basketParams={ajax_basket:"Y"};if(this.showQuantity){this.basketParams[this.basketData.quantity]=this.obQuantity.value}};t.JCCatalogProductSubscribeList.prototype.FillBasketProps=function(){if(!this.visual.BASKET_PROP_DIV){return}var t=0,s=null,e=false,i=null;if(this.basketData.useProps&&!this.basketData.emptyProps){if(!!this.obPopupWin&&!!this.obPopupWin.contentContainer){i=this.obPopupWin.contentContainer}}else{i=BX(this.visual.BASKET_PROP_DIV)}if(!i){return}s=i.getElementsByTagName("select");if(!!s&&!!s.length){for(t=0;t<s.length;t++){if(!s[t].disabled){switch(s[t].type.toLowerCase()){case"select-one":this.basketParams[s[t].name]=s[t].value;e=true;break;default:break}}}}s=i.getElementsByTagName("input");if(!!s&&!!s.length){for(t=0;t<s.length;t++){if(!s[t].disabled){switch(s[t].type.toLowerCase()){case"hidden":this.basketParams[s[t].name]=s[t].value;e=true;break;case"radio":if(s[t].checked){this.basketParams[s[t].name]=s[t].value;e=true}break;default:break}}}}if(!e){this.basketParams[this.basketData.props]=[];this.basketParams[this.basketData.props][0]=0}};t.JCCatalogProductSubscribeList.prototype.SendToBasket=function(){if(!this.canBuy){return}this.InitBasketUrl();this.FillBasketProps();BX.ajax.loadJSON(this.basketUrl,this.basketParams,BX.delegate(this.BasketResult,this))};t.JCCatalogProductSubscribeList.prototype.Basket=function(){var t="";if(!this.canBuy){return}switch(this.productType){case 1:case 2:if(this.basketData.useProps&&!this.basketData.emptyProps){this.InitPopupWindow();this.obPopupWin.setTitleBar(BX.message("CPSL_TITLE_BASKET_PROPS"));if(BX(this.visual.BASKET_PROP_DIV)){t=BX(this.visual.BASKET_PROP_DIV).innerHTML}this.obPopupWin.setContent(t);this.obPopupWin.setButtons([new s({ownerClass:this.obProduct.parentNode.parentNode.parentNode.className,text:BX.message("CPSL_BTN_MESSAGE_SEND_PROPS"),events:{click:BX.delegate(this.SendToBasket,this)}})]);this.obPopupWin.show()}else{this.SendToBasket()}break;case 3:this.SendToBasket();break}};t.JCCatalogProductSubscribeList.prototype.BasketResult=function(t){var e="",i="",o="",a,r=[];if(!!this.obPopupWin)this.obPopupWin.close();if(!BX.type.isPlainObject(t))return;a="OK"===t.STATUS;if(a){BX.onCustomEvent("OnBasketChange");i=this.product.name;switch(this.productType){case 1:case 2:o=this.product.pict.SRC;break;case 3:o=!!this.offers[this.offerNum].PREVIEW_PICTURE?this.offers[this.offerNum].PREVIEW_PICTURE.SRC:this.defaultPict.pict.SRC;break}e='<div style="width: 100%; margin: 0; text-align: center;"><img src="'+o+'" height="130" style="max-height:130px"><p>'+i+"</p></div>";r=[new s({ownerClass:this.obProduct.parentNode.parentNode.parentNode.className,text:BX.message("CPSL_BTN_MESSAGE_BASKET_REDIRECT"),events:{click:BX.delegate(function(){location.href=!!this.basketData.basketUrl?this.basketData.basketUrl:BX.message("CPSL_BASKET_URL")},this)}})]}else{e=!!t.MESSAGE?t.MESSAGE:BX.message("CPSL_BASKET_UNKNOWN_ERROR");r=[new s({ownerClass:this.obProduct.parentNode.parentNode.parentNode.className,text:BX.message("CPSL_BTN_MESSAGE_CLOSE"),events:{click:BX.delegate(this.obPopupWin.close,this.obPopupWin)}})]}this.InitPopupWindow();this.obPopupWin.setTitleBar(BX.message("CPSL_TITLE_ERROR"));this.obPopupWin.setContent(e);this.obPopupWin.setButtons(r);this.obPopupWin.show()};t.JCCatalogProductSubscribeList.prototype.InitPopupWindow=function(){if(!!this.obPopupWin)return;this.obPopupWin=BX.PopupWindowManager.create("CatalogSectionBasket_"+this.visual.ID,null,{autoHide:false,offsetLeft:0,offsetTop:0,overlay:true,closeByEsc:true,titleBar:true,closeIcon:true,contentColor:"white"})};t.JCCatalogProductSubscribeList.prototype.deleteSubscribe=function(){var t,s;switch(this.productType){case 1:case 2:t=this.product.id;break;case 3:var e,i,o;if(!this.offers.length){t=this.product.id;break}for(e=0;e<this.offers.length;e++){o=true;for(i in this.selectedValues){if(this.selectedValues[i]!==this.offers[e].TREE[i]){o=false;break}}if(o){s=e;t=this.offers[e].ID;break}}break}if(!t||!this.product.listSubscribeId.hasOwnProperty(t))return;BX.ajax({method:"POST",dataType:"json",url:this.ajaxUrl,data:{sessid:BX.bitrix_sessid(),deleteSubscribe:"Y",itemId:t,listSubscribeId:this.product.listSubscribeId[t]},onsuccess:BX.delegate(function(t){if(t.success){this.showWindowWithAnswer({status:"success"});location.reload()}else{this.showWindowWithAnswer({status:"error",message:t.message})}},this)})};t.JCCatalogProductSubscribeList.prototype.showWindowWithAnswer=function(t){t=t||{};if(!t.message){if(t.status=="success"){t.message=BX.message("CPSL_STATUS_SUCCESS")}else{t.message=BX.message("CPSL_STATUS_ERROR")}}var s=BX.create("div",{props:{className:"bx-catalog-subscribe-alert"},children:[BX.create("span",{props:{className:"bx-catalog-subscribe-aligner"}}),BX.create("span",{props:{className:"bx-catalog-subscribe-alert-text"},text:t.message}),BX.create("div",{props:{className:"bx-catalog-subscribe-alert-footer"}})]});var e=BX.PopupWindowManager.getCurrentPopup();if(e){e.destroy()}var i=setTimeout(function(){var t=BX.PopupWindowManager.getCurrentPopup();if(!t||t.uniquePopupId!="bx-catalog-subscribe-status-action"){return}t.close();t.destroy()},3500);var o=BX.PopupWindowManager.create("bx-catalog-subscribe-status-action",null,{content:s,onPopupClose:function(){this.destroy();clearTimeout(i)},autoHide:true,zIndex:2e3,className:"bx-catalog-subscribe-alert-popup"});o.show();BX("bx-catalog-subscribe-status-action").onmouseover=function(t){clearTimeout(i)};BX("bx-catalog-subscribe-status-action").onmouseout=function(t){i=setTimeout(function(){var t=BX.PopupWindowManager.getCurrentPopup();if(!t||t.uniquePopupId!="bx-catalog-subscribe-status-action"){return}t.close();t.destroy()},3500)}}})(window);
/* End */
;; /* /bitrix/components/bitrix/catalog.product.subscribe.list/templates/.default/script.min.js?149976388524179*/

//# sourceMappingURL=page_ba8df3599fce95ee56cc05d070bd631f.map.js