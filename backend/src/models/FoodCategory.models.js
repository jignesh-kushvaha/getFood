import mongoose from "mongoose";

const foodCategorySchema = new mongoose.Schema({
    CategoryName:{
        type: String,
        required: true,
        unique: true
    }

},{collection:'foodCategory'},{timestamps:true});

const foodCategory = mongoose.model('foodCategory',foodCategorySchema);
export default foodCategory;