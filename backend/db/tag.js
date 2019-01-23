import { Schema, model } from "mongoose";

const TagSchema = new Schema({
  
});

const Tag = model('Tag', TagSchema);

export default Tag