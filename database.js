var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var Report = new Schema({
    USER_COMMENT : String,
    STACK_TRACE : String,
    PHONE_MODEL : String,
    DEVICE_ID : String,
    PRODUCT : String,
    INSTALLATION_ID : String,
    LOGCAT : String,
    APP_VERSION_NAME : String,
    USER_APP_START_DATE : String,
    SHARED_PREFERENCES : String,
    BRAND : String,
    ANDROID_VERSION : String,
    PACKAGE_NAME : String,
    APP_VERSION_CODE : String,
    REPORT_ID : String,
});

mongoose.model('reports', Report);

mongoose.connect('mongodb://localhost/acra');