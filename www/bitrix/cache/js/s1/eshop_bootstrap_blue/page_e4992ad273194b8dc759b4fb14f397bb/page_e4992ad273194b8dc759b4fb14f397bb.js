
; /* Start:"a:4:{s:4:"full";s:98:"/bitrix/components/bitrix/sale.personal.order.list/templates/.default/script.min.js?14997639952032";s:6:"source";s:79:"/bitrix/components/bitrix/sale.personal.order.list/templates/.default/script.js";s:3:"min";s:83:"/bitrix/components/bitrix/sale.personal.order.list/templates/.default/script.min.js";s:3:"map";s:83:"/bitrix/components/bitrix/sale.personal.order.list/templates/.default/script.map.js";}"*/
BX.namespace("BX.Sale.PersonalOrderComponent");(function(){BX.Sale.PersonalOrderComponent.PersonalOrderList={init:function(e){var t=document.getElementsByClassName("sale-order-list-inner-row");e.paymentList=e.paymentList||{};e.url=e.url||"";Array.prototype.forEach.call(t,function(t){var s=t.getElementsByClassName("sale-order-list-shipment-id");if(s[0]){Array.prototype.forEach.call(s,function(e){var t=e.parentNode.getElementsByClassName("sale-order-list-shipment-id-icon")[0];if(t){BX.clipboard.bindCopyClick(t,{text:e.innerHTML})}})}BX.bindDelegate(t,"click",{"class":"ajax_reload"},BX.proxy(function(e){var s=t.getElementsByClassName("sale-order-list-inner-row-body")[0];var a=t.getElementsByClassName("sale-order-list-inner-row-template")[0];var r=a.getElementsByClassName("sale-order-list-cancel-payment")[0];BX.ajax({method:"POST",dataType:"html",url:e.target.href,data:{sessid:BX.bitrix_sessid()},onsuccess:BX.proxy(function(e){var t=document.createElement("div");t.innerHTML=e;a.insertBefore(t,r);s.style.display="none";a.style.display="block";BX.bind(r,"click",function(){s.style.display="block";a.style.display="none";t.remove()},this)},this),onfailure:BX.proxy(function(){return this},this)},this);e.preventDefault()},this));BX.bindDelegate(t,"click",{"class":"sale-order-list-change-payment"},BX.proxy(function(s){s.preventDefault();var a=t.getElementsByClassName("sale-order-list-inner-row-body")[0];var r=t.getElementsByClassName("sale-order-list-inner-row-template")[0];var n=r.getElementsByClassName("sale-order-list-cancel-payment")[0];BX.ajax({method:"POST",dataType:"html",url:e.url,data:{sessid:BX.bitrix_sessid(),orderData:e.paymentList[s.target.id]},onsuccess:BX.proxy(function(e){var t=document.createElement("div");t.innerHTML=e;r.insertBefore(t,n);s.target.style.display="none";a.parentNode.removeChild(a);r.style.display="block";BX.bind(n,"click",function(){window.location.reload()},this)},this),onfailure:BX.proxy(function(){return this},this)},this)},this))})}}})();
/* End */
;
; /* Start:"a:4:{s:4:"full";s:99:"/bitrix/components/bitrix/sale.order.payment.change/templates/.default/script.min.js?14997639951640";s:6:"source";s:80:"/bitrix/components/bitrix/sale.order.payment.change/templates/.default/script.js";s:3:"min";s:84:"/bitrix/components/bitrix/sale.order.payment.change/templates/.default/script.min.js";s:3:"map";s:84:"/bitrix/components/bitrix/sale.order.payment.change/templates/.default/script.map.js";}"*/
BX.Sale.OrderPaymentChange=function(){var e=function(e){this.ajaxUrl=e.url;this.accountNumber=e.accountNumber||{};this.paymentNumber=e.paymentNumber||{};this.wrapperId=e.wrapperId||"";this.templateFolder=e.templateFolder;this.wrapper=document.getElementById("bx-sopc"+this.wrapperId);this.paySystemsContainer=this.wrapper.getElementsByClassName("sale-order-payment-change-pp")[0];BX.ready(BX.proxy(this.init,this))};e.prototype.init=function(){var e=this.wrapper.getElementsByClassName("sale-order-payment-change-pp-list")[0];new BX.easing({duration:500,start:{opacity:0,height:50},finish:{opacity:100,height:"auto"},transition:BX.easing.makeEaseOut(BX.easing.transitions.quad),step:function(t){e.style.opacity=t.opacity/100;e.style.height=e.height/450+"px"},complete:function(){e.style.height="auto"}}).animate();BX.bindDelegate(this.paySystemsContainer,"click",{className:"sale-order-payment-change-pp-company"},BX.proxy(function(e){var t=e.target.parentNode;var a=t.getElementsByClassName("sale-order-payment-change-pp-company-hidden")[0];BX.ajax({method:"POST",dataType:"html",url:this.ajaxUrl,data:{sessid:BX.bitrix_sessid(),paySystemId:a.value,accountNumber:this.accountNumber,paymentNumber:this.paymentNumber},onsuccess:BX.proxy(function(t){this.paySystemsContainer.innerHTML=t;var a=this.wrapper.parentNode.previousElementSibling.getElementsByClassName("sale-order-detail-payment-options-methods-image-element")[0];if(a!==undefined){a.style.backgroundImage=e.target.style.backgroundImage}},this),onfailure:BX.proxy(function(){return this},this)},this);return this},this));return this};return e}();
/* End */
;; /* /bitrix/components/bitrix/sale.personal.order.list/templates/.default/script.min.js?14997639952032*/
; /* /bitrix/components/bitrix/sale.order.payment.change/templates/.default/script.min.js?14997639951640*/

//# sourceMappingURL=page_e4992ad273194b8dc759b4fb14f397bb.map.js