const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const mongodb_cs = process.env.MONGODB

const mongo = mongoose.connect(mongodb_cs, {
  useNewUrlParser: true
});

const kittySchema = new mongoose.Schema({
    name: String
});

const Kitten = mongoose.model('Kitten', kittySchema);

exports.Kitten = Kitten;