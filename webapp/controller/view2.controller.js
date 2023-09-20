sap.ui.define([
    "sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"sap/ui/model/SimpleType",
	"sap/ui/model/ValidateException",
	"sap/ui/core/Core",
	"sap/m/MessageBox",
	"sap/m/MessageToast"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel, SimpleType, ValidateException, Core, MessageBox, MessageToast) {
        "use strict";

        return Controller.extend("learnui5.controller.view2", {
            onInit: function () {
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.getRoute("view2").attachPatternMatched(this._onObjectMatched, this);                
            },
            
            onGoToView1: function() {
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.navTo("view1");
            }
        });
});