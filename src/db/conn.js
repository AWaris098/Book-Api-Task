const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/Books-Task-api', {
    useNewUrlParser : true,
    useUnifiedTopology : true
})
.then(() => {
    console.log("Connect with db")
})
.catch((err) => {
    console.log(err)
})