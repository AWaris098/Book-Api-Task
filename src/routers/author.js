const express = require("express");
const router = express.Router();

const Author = require("../models/authors.js");

router.post("/authors", async (req, res) => {
  const author = {
    name: req.body.name,
    email: req.body.email,
    bookName: req.body.bookName,
    age: req.body.age,
    mobileNumber: req.body.mobileNumber,
    address: req.body.address,
  };
  const authorDB = new Author(author);
  try {
    const createdAuthor = await authorDB.save();
    res.json(createdAuthor);
  } catch (err) {
    console.log(err);
    res.json(err);
  }
});

router.get('/authors', async (req, res) => {
  try{
    const getAuthor = await Author.find()
    res.json(getAuthor)
  }catch(err){
    res.json(err)
  }
});

router.get('/authors/:id', async (req, res) => {
  const _id = req.params.id
  try{
   const getAuthorById = await Author.findById({_id})

   if(!getAuthorById){
    return res.status(404).json()
   }
    res.json(getAuthorById)
  }catch(err){
      res.json(err)
  }
});

router.patch('/authors/:id', async(req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdate = ['name', 'address', 'bookName' ]
  isValidationOpertion = updates.every((update) => allowedUpdate.includes(update))

  if(!isValidationOpertion){
    return res.status(404).json("Invalid update")
  }

  try{
     const updatesAuthor = await Author.findByIdAndUpdate(req.params.id, req.body,{
       new : true,
       isValidate : true
     })
     if(!updatesAuthor){
       return res.status(404).json()
     }
     res.json(updatesAuthor)
  }catch(err){
       res.json(err)
  }
});


router.delete('/authors/:id', async(req, res) => {
    try{
      const deleteAuthor = await Author.findByIdAndDelete(req.params.id)
         if(!deleteAuthor){
            return res.status(404).json('Not found')
          
         }
         res.json(deleteAuthor)
    }catch(err){
      res.json(err)
    }
})

module.exports = router;
