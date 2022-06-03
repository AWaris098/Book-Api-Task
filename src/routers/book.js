const express = require("express");
const router = express.Router();

const Book = require("../models/books.js");

router.post("/books", async (req, res) => {
  const book = new Book({
    name: req.body.name,
    author: req.body.author,
    numberOfPages: req.body.numberOfPages,
    publish: req.body.publish,
  });

  try {
    const creatBook = await book.save();
    res.json(creatBook);
  } catch (err) {
    res.json(err);
  }
});

router.get("/books", async (req, res) => {
  try {
    const getBooks = await Book.find();
    res.json(getBooks);
  } catch (err) {
    res.json(err);
  }
});

router.get("/books/:id", async (req, res) => {
  const _id = req.params.id;
  try {
    const getBooksById = await Book.findById(_id);
    if (!getBooksById) {
      return res.status(404).json({ message: "Invalid Id please try again" });
    }
    res.json(getBooksById);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.patch("/books/:id", async (req, res) => {
  const updates = Object.keys(req.body);
  allowedUpdated = ["name", "numberOfPages"];
  isValidateOperation = updates.every((update) =>
    allowedUpdated.includes(update)
  );

  if (!isValidateOperation) {
    res.status(404).json({ err: "Invalid updates please try another one" });
    return;
  }
  try {
    const updatesBooks = await Book.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      isValidate: true,
    });
    if (!updatesBooks) {
      res.status(404).json();
      return;
    }
    res.status(200).json(updatesBooks);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete("/books/:id", async (req, res) => {
  try {
    const delBook = await Book.findByIdAndDelete(req.params.id);
    res.json(delBook);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
