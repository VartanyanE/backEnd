import mongoose  from "mongoose";

const mainSchema = mongoose.Schema({
    website: "String",
    username: "String",
    password: "String"
});

const mainModel = mongoose.model("Main", mainSchema);

export default mainModel;