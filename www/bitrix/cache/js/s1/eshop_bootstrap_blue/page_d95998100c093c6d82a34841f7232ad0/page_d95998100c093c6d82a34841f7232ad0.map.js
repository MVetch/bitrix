{"version":3, "file":"page_d95998100c093c6d82a34841f7232ad0.js", "sections": [{"offset": { "line": 2, "column": 0 }, "map": {"version":3,"file":"/bitrix/components/bitrix/catalog.section/templates/.default/script.min.js","sources":["/bitrix/components/bitrix/catalog.section/templates/.default/script.js"],"names":["window","JCCatalogSection","BasketButton","params","superclass","constructor","apply","this","arguments","nameNode","BX","create","props","className","id","style","text","buttonNode","attrs","ownerClass","marginBottom","borderBottom","children","events","contextEvents","browser","IsIE","setAttribute","extend","PopupWindowButton","arParams","productType","showQuantity","showAbsent","secondPict","showOldPrice","showPercent","showSkuProps","basketAction","showClosePopup","useCompare","visual","ID","PICT_ID","SECOND_PICT_ID","QUANTITY_ID","QUANTITY_UP_ID","QUANTITY_DOWN_ID","PRICE_ID","DSC_PERC","SECOND_DSC_PERC","DISPLAY_PROP_DIV","BASKET_PROP_DIV","SUBSCRIBE_ID","product","checkQuantity","maxQuantity","stepQuantity","isDblQuantity","canBuy","canSubscription","name","pict","addUrl","buyUrl","basketMode","basketData","useProps","emptyProps","quantity","basketUrl","sku_props","sku_props_var","add_url","buy_url","compareData","compareUrl","comparePath","defaultPict","currentBasisPrice","precision","precisionFactor","Math","pow","offers","offerNum","treeProps","obTreeRows","showCount","showStart","selectedValues","obProduct","obQuantity","obQuantityUp","obQuantityDown","obPict","obSecondPict","obPrice","obTree","obBuyBtn","obBasketActions","obNotAvail","obSubscribe","obDscPerc","obSecondDscPerc","obSkuProps","obMeasure","obCompare","obPopupWin","basketParams","treeRowShowSize","treeEnableArrow","display","cursor","opacity","treeDisableArrow","lastElement","containerHeight","errorCode","parseInt","PRODUCT_TYPE","SHOW_QUANTITY","SHOW_ABSENT","SECOND_PICT","SHOW_OLD_PRICE","SHOW_DISCOUNT_PERCENT","SHOW_SKU_PROPS","ADD_TO_BASKET_ACTION","SHOW_CLOSE_POPUP","DISPLAY_COMPARE","VISUAL","PRODUCT","CHECK_QUANTITY","QUANTITY_FLOAT","parseFloat","MAX_QUANTITY","STEP_QUANTITY","round","CAN_BUY","SUBSCRIPTION","BASIS_PRICE","NAME","PICT","ADD_URL","BUY_URL","BASKET","ADD_PROPS","EMPTY_PROPS","OFFERS","type","isArray","OFFER_SELECTED","isNaN","TREE_PROPS","DEFAULT_PICTURE","PICTURE","PICTURE_SECOND","QUANTITY","PROPS","BASKET_URL","SKU_PROPS","ADD_URL_TEMPLATE","BUY_URL_TEMPLATE","COMPARE","COMPARE_PATH","COMPARE_URL_TEMPLATE","LAST_ELEMENT","ready","delegate","Init","prototype","i","strPrefix","TreeItems","length","TREE_ID","TREE_ITEM_ID","LEFT","RIGHT","LIST","CONT","QUANTITY_MEASURE","BASKET_ACTIONS_ID","BUY_ID","NOT_AVAILABLE_MESS","bind","QuantityUp","QuantityDown","QuantityChange","findChildren","tagName","SelectOfferProp","RowLeft","RowRight","SetCurrent","Add2Basket","BuyBasket","checkHeight","setHeight","parentNode","COMPARE_LINK_ID","proxy","Compare","adjust","height","offsetHeight","curValue","boolSet","calcPrice","value","DISCOUNT_VALUE","VALUE","DISCOUNT_DIFF","DISCOUNT_DIFF_PERCENT","CURRENCY","setPrice","intCount","count","QuantitySet","index","proxy_context","click","disabled","MEASURE","html","strTreeValue","arTreeItem","RowItems","target","hasAttribute","getAttribute","split","SearchOfferPropIndex","addClass","removeClass","strPropID","strPropValue","strName","arShowValues","j","arCanBuyValues","allValues","arFilter","tmpFilter","GetRowValues","util","in_array","clone","GetCanBuy","UpdateRow","ChangeInfo","marginLeft","intNumber","activeID","showID","canBuyID","showI","countShow","strNewLen","obData","pictMode","extShowMode","isCurrent","selectIndex","obLeft","obRight","currentShowStart","SHOW_MODE","width","paddingTop","arValues","boolSearch","boolOneSearch","TREE","current","PREVIEW_PICTURE","backgroundImage","SRC","PREVIEW_PICTURE_SECOND","DISPLAY_PROPERTIES","PRICE","price","strPrice","Currency","currencyFormat","compareParams","compareLink","replace","toString","ajax_action","ajax","loadJSON","CompareResult","result","popupContent","popupButtons","close","isPlainObject","InitPopupWindow","STATUS","onCustomEvent","message","CompareRedirect","marginRight","MESSAGE","setTitleBar","setContent","setButtons","show","location","href","InitBasketUrl","ajax_basket","FillBasketProps","propCollection","foundValues","obBasketProps","contentContainer","getElementsByTagName","toLowerCase","checked","Basket","SendToBasket","BasketResult","contentBasketProps","innerHTML","arResult","strContent","strPict","successful","buttons","BasketRedirect","findParent","PopupWindowManager","autoHide","offsetLeft","offsetTop","overlay","closeByEsc","titleBar","closeIcon","contentColor"],"mappings":"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"}}]}