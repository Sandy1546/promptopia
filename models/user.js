import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
  email: {
    type: String,
    unique: [true, "Email already exists!"], //this message will be displayed if this fails
    required: [true, "Email is required!"],
  },
  userName: {
    type: String,
    required: [true, "User Name is required!"],
    match: [
      /^(?=.{2,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/,
      "Username invalid, it should contain 8-20 alphanumeric letters and be unique!",
    ], //it must match the regular expression
  },
  image: {
    type: String,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
});

const Users = models.Users || model("Users", UserSchema);
// const Users = model("Users", UserSchema);

export default Users;
