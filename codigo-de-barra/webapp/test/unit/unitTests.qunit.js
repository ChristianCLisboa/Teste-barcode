/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"cdb/codigo-de-barra/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
