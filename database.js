var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var Report = new Schema({
    user_comment : String,
    stack_trace : String,
    phone_model : String,
    device_id : String,
    product : String,
    installation_id : String,
    logcat : String,
    app_version_name : String,
    user_app_start_date : String,
    shared_preferences : String,
    brand : String,
    android_version : String,
    package_name : String,
    app_version_code : String,
    report_id : String,
});

mongoose.model('reports', Report);

mongoose.connect('mongodb://localhost/acra');