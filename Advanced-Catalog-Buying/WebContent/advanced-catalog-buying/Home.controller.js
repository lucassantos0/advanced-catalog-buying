sap.ui.controller("advanced-catalog-buying.Home", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf advanced-catalog-buying.Home
*/
	
	onInit: function() {
		var sUrlString = window.location.href;
		var oUrl = new URL(sUrlString);
		var oConfigData = oUrl.searchParams.get("config");
		this.oConfigData = JSON.parse(oConfigData);
		this.oConfigModel = new sap.ui.model.json.JSONModel(this.oConfigData);
		this.getView().setModel(this.oConfigModel,"Config");		
	},

	/**
 * sends a request to the specified url from a form. this will change the window location.
 * @param {string} path the path to send the post request to
 * @param {object} params the parameters to add to the url
 * @param {string} [method=post] the method to use on the form
 */

 	onPostCallback: function(oEvent) {
	   oEvent.preventDefault();
	    var newForm = jQuery('<form>', {
	        'action': this.oConfigData.callbackUrl,
	        'target': '_top'
	    }).append(jQuery('<input>', {
	        'name': 'cxml-urlencoded',
	        'value': '<cXML />',
	        'type': 'hidden'
	    }));
	    $(document.body).append(newForm);
	    newForm.submit();
	}

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