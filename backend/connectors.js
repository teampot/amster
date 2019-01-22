import { Promise, connect, Schema, model } from 'mongoose';

Promise = global.Promise;

const mongodb_cs = process.env.MONGODB

const mongo = connect(mongodb_cs, {
  useNewUrlParser: true
});

const kittySchema = new Schema({
    name: String
});

const Kitten = model('Kitten', kittySchema);

const _Kitten = Kitten;
export { _Kitten as Kitten };