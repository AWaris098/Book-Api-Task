const express = require('express');
const app = express()
require('./db/conn.js')
const Book = require('./models/books.js');
const Author = require('./models/authors.js')
const bookRouter = require('./routers/book.js')
const authorRouter = require('./routers/author.js')
const port = process.env.PORT || 3000
app.use(express.json())

app.use(bookRouter)
app.use(authorRouter)

app.listen(port, () => {
    console.log(`Port listning up on port ${port}`)
});