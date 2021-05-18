sap.ui.controller("advanced-catalog-buying.Home", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf advanced-catalog-buying.Home
*/
	onInit: function() {
		var sUrlString = window.location.href;
		var oOrl = new URL(sUrlString);
		var sCallbackUrl = url.searchParams.get("callbackUrl");
		var sUser = url.searchParams.get("username");
		var sCallbackBuyerCookie = url.searchParams.get("buyerCookie");
		
		var oConfigData = {
			callbackUrl : sCallbackUrl,
			username : sUser,
			sCallbackBuyerCookie
		};
		this.oConfigModel = new sap.ui.model.json.JSONModel(oConfigData);
		this.getView().setModel(this.oConfigModel,"Config");		
	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf advanced-catalog-buying.Home
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf advanced-catalog-buying.Home
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf advanced-catalog-buying.Home
*/
//	onExit: function() {
//
//	}

});