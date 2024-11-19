import foodCategory from '../models/FoodCategory.models.js'
import express from "express";

const foodCategoryRouter = express.Router();

foodCategoryRouter.post("/foodCategories", async (req, res) => {
    try {
        const foodCategoryItems = await foodCategory.find({});
        return res.status(200).json(foodCategoryItems);
    } catch (error) {
        return res.status(404).json({ error: error });
    }
});

export default foodCategoryRouter;
