const mongoose = require("mongoose");

const registerDetailSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    fullname:{
        type:String,
        required: true
    },
    age:{
        type:Number,
        required: true
    },
    education:{
        type: String,
        required: true
    },
    institution:{
        type: String,
        required: true
    },
    study:{
        type: String,
        required: true
    },
    experience:{
        type: String,
        required: true
    },
    admit:{
        type: String,
        required: true
    },
    program:{
        type: String,
        required: true
    },
    country:{
        type: String,
        required: true
    },
    goals:{
        type: String,
        required: true
    },
    listening:{
        type: Number,
        required: true
    },
    reading:{
        type: Number,
        required: true
    },
    speaking:{
        type: Number,
        required: true
    },
    writing:{
        type: Number,
        required: true
    },
    payform:{
        type: String,
        required: true
    },
    feesform:{
        type: String,
        required: true
    },
    gicform:{
        type: String,
        required: true
    },
    gicpayform:{
        type: String,
        required: true
    },
},{ timestamps: true} )

const registerDetail = mongoose.model("registerDetail", registerDetailSchema)

module.exports = { registerDetail }