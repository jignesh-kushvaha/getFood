import express from "express";
import Order from "../models/Orders.models.js";

const orderRouter = express.Router();

orderRouter.post("/order", async (req, res) => {
  try {
    let cart_data = req.body;

    let existingOrder = await Order.findOne({ user_Id: cart_data.user_Id });
    console.log(existingOrder);

    if (existingOrder === null) {
      await Order.create({
        user_Id: cart_data.user_Id,
        order_data: [
          {
            items: cart_data.order_data,
            total_amount: cart_data.total_amount,
            date: cart_data.date
          }
        ]
      });
      res.json({ status: 200, message: "Order placed successfully new!" });
    } else {
      await Order.findOneAndUpdate(
        { user_Id: cart_data.user_Id },
        {
            $push: {
              order_data: {
                items: cart_data.order_data,
                total_amount: cart_data.total_amount,
                date: cart_data.date
              }
            }
          }
      );
      res.json({ status: 200, message: "Order placed successfully update!" });
    }
  } catch {
    console.error("Error placing order:", error);
    res.status(500).json({ status: 500, message: "Failed to place order" });
  }
});

orderRouter.post("/myorder", async (req, res) => {
  try{
    let myData = await Order.findOne({"user_Id":req.body.user_Id});
    res.json({myOrder : myData});

  }catch(e){
    res.status(500).json({ status: 500, message: "Failed to fetch order" });
  }
})

export default orderRouter;
