const mongoose = require('mongoose');

const UserDetailsSchema = new mongoose.Schema({
    uname:String,
    email:{type: String, unique: true},
    password:String},
    {collection:'userDetails'});

mongoose.model('UserInfo',UserDetailsSchema);