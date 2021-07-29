import mainModel from "../models/model.js";

export const postData = async(req,res) => {

    const newData = req.body;

    const newDoc = new mainModel(newData);

    try {

        await newDoc.save()

        res.status(200).json(newDoc);
    } catch (error) {
        console.log(error)
    }
}

export const hitAPI = async (req, res) => {
    try {
      //run .find() on our model
      const dataPayload = await mainModel.find();
      // return status and send our payload in the response
      res.status(200).json(dataPayload);
    } catch (error) {
      console.log(error);
    }
  };