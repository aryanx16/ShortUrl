const { text } = require("express")
const mongoose = require("mongoose")
const urlschema = new mongoose.Schema({
  link:{
    type:String,
    required:true
  },
  token:{
    type:String,
    required:true
  }
})

module.exports = mongoose.model("URL",urlschema)