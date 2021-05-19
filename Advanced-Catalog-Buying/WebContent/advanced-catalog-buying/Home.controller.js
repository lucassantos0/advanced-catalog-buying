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
 	 //test
	   oEvent.preventDefault();
	    var newForm = jQuery('<form>', {
	    	'id' : 'cxml_form',
	    	'enctype': 'application/x-www-form-urlencoded',
	        'action': this.oConfigData.callbackUrl,
	        'method': 'POST',
	        'target': '_top'
	    }).append(jQuery('<input>', {
	        'name': 'cxml-urlencoded',
	        'value': this.getcXML(),
	        'type': 'hidden'
	    }));
	    $(document.body).append(newForm);
	    newForm.submit();
	},
	
	getcXML : function() {
		var sGUID = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        	var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
	        return v.toString(16);
    	});
		var sXML = 
			'<?xml version="1.0"?>'
			+ '<!DOCTYPE cXML SYSTEM "http://xml.cxml.org/schemas/cXML/1.2.044/cXML.dtd">'
			+ '<cXML version="1.2" xml:lang="en-US" payloadID="' + sGUID + '" timestamp="2021-05-13T08:03:21-07:00">'
			+ '  <Header>'
			+ '      <From>'
			            + '<Credential domain="networkid">'
			                + '<Identity>an01637331180-t</Identity>'
			            + '</Credential>'
			        + '</From>'
			        + '<To>'
			            + '<Credential domain="NetworkId">'
			                + '<Identity>AN01591885353-T</Identity>'
			            + '</Credential>'
			        + '</To>'
			        + '<Sender>'
			            + '<Credential domain="txrxwi.deta.dev">'
			                + '<Identity>PunchoutResponse</Identity>'
							+ '<SharedSecret>ariba123</SharedSecret>'
			            + '</Credential>'
			            + '<UserAgent>Southend cXML Application</UserAgent>'
			        + '</Sender>'
			    + '</Header>'
			    + '<Message>'
			        + '<PunchOutOrderMessage>'
			            + '<BuyerCookie>' + this.oConfigData.buyerCookie + '</BuyerCookie>'
			       + '     <PunchOutOrderMessageHeader operationAllowed="edit">'
			                + '<Total>'
			                    + '<Money currency="BRL">763.20</Money>'
			                + '</Total>'
			            + '</PunchOutOrderMessageHeader>'
			            + '<ItemIn quantity="3">'
			                + '<ItemID>'
			                    + '<SupplierPartID>460000010|5555</SupplierPartID>'
			                    + '<SupplierPartAuxiliaryID>E000028901</SupplierPartAuxiliaryID>'
			                + '</ItemID>'
			                + '<ItemDetail>'
			                    + '<UnitPrice>'
			                        + '<Money currency="BRL">763.20</Money>'
			                    + '</UnitPrice>'
			                    + '<Description xml:lang="pt_BR">Cadeira reclinavel de couro com braços acolchoados&nbsp;IVA Selecionado: C0&lt;br gt;Cor selecionada: Amarelo| Depósito: C1900 - Endereço : ABC 90 Porto Alegre-RS</Description>'
			                    + '<UnitOfMeasure>EA</UnitOfMeasure>'
			                    + '<Classification domain="UNSPSC">44</Classification>'
			                    + '<LeadTime>12</LeadTime>'
			                + '</ItemDetail>'
			            + '</ItemIn>'
			        + '</PunchOutOrderMessage>'
			    + '</Message>'
			+ '</cXML>';
		return sXML;
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