import express from "express";
import { addFood,listFood,removeFood } from "../controllers/foodController.js";
import multer from "multer";

const foodRoute = express.Router();

// --- image storage engine ---
const storage = multer.diskStorage({
  destination: "uploads", // make sure "uploads" folder exists
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});

const upload = multer({ storage: storage });

// --- single correct route ---
foodRoute.post("/add", upload.single("image"), addFood);
foodRoute.get("/list",listFood)
foodRoute.post("/remove",removeFood);

export default foodRoute;
