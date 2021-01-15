cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "cordova-plugin-bluetoothle.BluetoothLe",
      "file": "plugins/cordova-plugin-bluetoothle/www/bluetoothle.js",
      "pluginId": "cordova-plugin-bluetoothle",
      "clobbers": [
        "window.bluetoothle"
      ]
    },
    {
      "id": "cordova-plugin-bluetoothle.BluetoothLEPlugin",
      "file": "plugins/cordova-plugin-bluetoothle/src/windows/BluetoothLEPlugin.js",
      "pluginId": "cordova-plugin-bluetoothle",
      "runs": true
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-bluetoothle": "6.2.0",
    "cordova-plugin-whitelist": "1.3.4"
  };
});