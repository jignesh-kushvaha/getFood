import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
    user_Id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    order_data: [
        {
          items: { type: Array, required: true }, // Holds all items in the order
          total_amount: { type: Number, required: true },
          date: { type: Date, required: true }
        }
      ]
});

const Order = mongoose.model("Order", OrderSchema);

export default Order;