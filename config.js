"use strict";
exports.__esModule = true;
exports.activate = function (oni) {
    console.log("config activated");
    // Input
    //
    // Add input bindings here:
    //
    // oni.input.bind("<c-enter>", () => console.log("Control+Enter was pressed"))
    oni.input.bind("<M-b>", "sidebar.toggle");
    //
    // Or remove the default bindings here by uncommenting the below line:
    //
    // oni.input.unbind("<c-p>")
};
exports.deactivate = function (oni) {
    console.log("config deactivated");
};
exports.configuration = {
    // Add custom config here, such as
    "autoUpdate.enabled": true,
    "browser.defaultUrl": "https://google.com",
    "ui.colorscheme": "nord",
    "oni.loadInitVim": true,
    "oni.useDefaultConfig": false,
    "editor.fontSize": "14px",
    "editor.fontFamily": "Source Code Pro",
    "editor.fullScreenOnStart": true,
    "editor.renderer": "webgl",
    // UI customizations
    "ui.animations.enabled": true,
    "ui.fontSmoothing": "auto",
    "sidebar.default.open": false
};
