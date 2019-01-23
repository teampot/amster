import { Schema, model } from "mongoose";

const UserSchema = new Schema({
  
});

const User = model('User', UserSchema);

export default User