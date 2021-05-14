const mongoose = require('mongoose');

const MongoURI = "mongodb+srv://user0:root@cluster0.g3v4t.mongodb.net/sxcrema?retryWrites=true&w=majority";

mongoose.connect(MongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(db => console.log('db connected'))
  .catch(err => console.log(err));