sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("cdb.codigodebarra.controller.View1", {
            onInit: function () {

            },



            onAfterRendering: function() {
                JsBarcode(".barcode", "281889509137",{
                  displayValue : "false" ,
                  format: "ITF"     
                    });
              },



              onPrint : function(oEvent) {
                var oTarget = this.getView(),
                    sTargetId = "qrcode";
                    
                if (sTargetId) {
                    oTarget = oTarget.byId(sTargetId);
                }
                
                if (oTarget) {
                    var $domTarget = oTarget.$()[0],
                        sTargetContent = $domTarget.innerHTML,
                        sOriginalContent = document.body.innerHTML;
                        
                    document.body.innerHTML = sTargetContent;
                    window.print();
                    document.body.innerHTML = sOriginalContent;
                } else {
                    jQuery.sap.log.error("onPrint needs a valid target container [view|data:targetId=\"SID\"]");
                }
            }

        });
    });
