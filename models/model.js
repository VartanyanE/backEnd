import mongoose  from "mongoose";

const mainSchema = mongoose.Schema({
    name: "String",
    // username: "String",
    // password: "String"
});

const mainModel = mongoose.model("Main", mainSchema);

export default mainModel;