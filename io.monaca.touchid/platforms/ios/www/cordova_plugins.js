cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/io.monaca.touchid/www/touchid.js",
        "id": "io.monaca.touchid.TouchIdPlugin",
        "clobbers": [
            "monaca.touchid"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "io.monaca.touchid": "1.0.0"
}
// BOTTOM OF METADATA
});