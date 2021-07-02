const mongoose = require('mongoose')
const connection = 'mongodb+srv://quantumCat:Ksnew123@cluster0.bh1tm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
mongoose.connect(connection, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
  .then(() => console.log("Database Connected Successfully"))
  .catch(err => console.log(err))
