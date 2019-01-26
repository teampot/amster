import { connect } from "mongoose";

import Tag from "./tag";
import Team from "./team";
import User from "./user";


const mongodb_cs = process.env.MONGODB

const mongo = connect(mongodb_cs, {
  useNewUrlParser: true
});

export {
  Tag,
  Team,
  User
}