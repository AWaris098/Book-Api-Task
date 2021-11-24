const mongoose = require('mongoose')
const validator = require('validator')
const Schema = mongoose.Schema

const bookSchema = new Schema({

   name : {
       type : String,
       required : true,
       trim : true,
    
   },

   author : {
     type : String,
     required : true,
     
   },

   numberOfPages : {
     type : Number,
     required : true,
     min : 50,
     trim : true,
     validate(value){
       if(!validator == value){
         throw new Error ("Minimun pages contain greater than 50")
       }
     }

   },
   publish : {
       type : Date,
       required : true,
       
       
   }

});

const Book = new mongoose.model("Book", bookSchema);

module.exports  = Book