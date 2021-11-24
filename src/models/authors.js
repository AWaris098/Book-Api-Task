const mongoose  = require('mongoose');
const validator = require('validator')
const Schema = mongoose.Schema

const authorSchema = new Schema({

    name : {
        type : String,
        required : true,
        unique : true,
        min : 4,
    },
    email : {
        type : String,
        required : true,
        unique : true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('Invalid email')
            }
        }
    },
    age : {
      type : Number,
      required : true,
      min : 18,
      trim : true,
      validate(value){
          if(!validator == value){
              throw new Error('Age should be greater than 18')
          }
      }
    },

    MobileNumber: {
        type : Number,
        required : true,
        min :10,
        validate(value){
            if(!validator == value){
                throw new Error('Invalid mobile Phone')
            }
        }
    },


    address : {
        type : String,
        required : true,
        trim : true,
        unique : true,
        validate(value){
            if(!validator == value){
                throw new Error('Address should be unique')
            }
        }
    },
});

const Author = new mongoose.model("Author", authorSchema)

module.exports = Author