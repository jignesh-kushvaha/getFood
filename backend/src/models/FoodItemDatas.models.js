import mongoose from "mongoose";

const FoodItemSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: true 
      },
      img: { 
        type: String, 
        required: true 
      },
      description: { 
        type: String 
      },
      options: {
        type: Array 
      },
      CategoryId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'foodCategory', 
        required: true 
      }
}, { collection: 'fooditems' },{timestamps:true});

const foodItems = new mongoose.model("fooditems",FoodItemSchema);

export default foodItems;