import React from "react";
import { useCart, useCartDispatch } from "../components/ContextReducer";

function Cart() {
  let data = useCart();
  let dispatch = useCartDispatch();

  if (data.length === 0) {
    return (
      <>
        <h1 className="d-flex justify-content-center">Cart is Empty</h1>
      </>
    );
  }
  let totalPrice = data.reduce((acc, cur) => acc + cur.finalPrice, 0);

  async function HandleCheckOut() {
    let cartData = {
      user_Id: localStorage.getItem("user"),
      order_data: data,
      total_amount: totalPrice,
      date: new Date(),
    };

    let response = await fetch("https://get-food-backend-teal.vercel.app/api/order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cartData)
    });
    
    const res = await response.json();
    console.log(res);
  
    if (res.status === 200) {
      console.log(res);
      console.log("Order placed successfully!");
      dispatch({ type: "CLEAR" });
    } else {
      console.log("Failed to place order!");
    }
  }

  return (
    <>
      <div className="container m-auto mt-5 table-responsive table-responsive-sm table-responsive-md">
        <table className="table table-bordered table-hover">
          <thead>
            <tr>
              <th scope="col">No.</th>
              <th scope="col">Name</th>
              <th scope="col">Size</th>
              <th scope="col">Quantity</th>
              <th scope="col">Final Price</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, i) => (
              <tr key={i}>
                <td scope="col">{i + 1}</td>
                <td scope="col">{item.name}</td>
                <td scope="col">{item.size}</td>
                <td scope="col">{item.quantity}</td>
                <td scope="col">{item.finalPrice}</td>
                <td scope="col">
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => dispatch({ type: "REMOVE_ITEM", index: i })}
                  >
                    delete
                  </button>
                </td>
              </tr>
            ))}
            <tr>
              <td colSpan="6">Total Amount - ₹{totalPrice}</td>
            </tr>
            <tr>
              <td colSpan="6">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={HandleCheckOut}
                >
                  Check Out
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Cart;
