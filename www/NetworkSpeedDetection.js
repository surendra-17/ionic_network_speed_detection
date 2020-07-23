var exec = require('cordova/exec');

module.exports.coolMethod = function (arg0, success, error) {
    exec(success, error, 'NetworkSpeedDetection', 'coolMethod', [arg0]);
};

module.exports.getNetworkSpeed() = function (success,error){
    exec(success, error, 'NetworkSpeedDetection', 'getNetworkSpeed', []);
}
