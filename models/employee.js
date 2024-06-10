const mongoose = require("mongoose")
const schema = mongoose.Schema(
    {
        "empname":"",
        "empcode":"",
        "dept":"",
        "salary":""
    }
)

let studentmodel = mongoose.models("employees",Schema);
module.exports = {studentmodel}

