cordova.define("com.outsystems.documentpreview.DocumentPreview", function(require, exports, module) {
var exec = require('cordova/exec');

exports.openDocument = function(filePath, fileMIMEType, previewDoc, success, error) {
    exec(success, error, "DocumentPreview", "openDocument", [filePath, fileMIMEType, previewDoc]);
};

});
