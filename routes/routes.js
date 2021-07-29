import express from "express";
import {postData, hitAPI} from "../controllers/controller.js"
const router = express.Router();

router.get('/', hitAPI);

router.post("/", postData);

  


  export default router;