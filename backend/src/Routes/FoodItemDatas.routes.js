import foodItems from "../models/FoodItemDatas.models.js";
import express from "express";

const foodItemDataRouter = express.Router();

foodItemDataRouter.post("/foodItemDatas", async (req,res)=>{
    try {
        const _foodItems = await foodItems.find({});
        return res.status(200).json(_foodItems)
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
})

export default foodItemDataRouter;