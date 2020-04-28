cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "com.outsystems.documentpreview.DocumentPreview",
      "file": "plugins/com.outsystems.documentpreview/www/DocumentPreview.js",
      "pluginId": "com.outsystems.documentpreview",
      "clobbers": [
        "window.plugins.DocumentPreview"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-whitelist": "1.3.4",
    "com.outsystems.documentpreview": "1.1.2"
  };
});