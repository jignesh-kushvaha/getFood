import React from "react";
import { useState } from "react";
import { useCart, useCartDispatch } from "./ContextReducer";

function Card({ foodItem }) {
  let options = foodItem.options[0];
  let sizes = Object.keys(options);

  //local variables
  let [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState(sizes[0]);
  let finalPrice = options[selectedSize] * quantity;

  //variables created to do cart functionality
  const cartDispatch = useCartDispatch();
  const cartState = useCart();

  function changeQuantityIncrement() {
    setQuantity(++quantity);
  }
  function changeQuantityDecrement() {
    if (quantity == 1) {
      setQuantity(1);
      return;
    }
    setQuantity(--quantity);
  }
  function handleSizeChange(event) {
    setSelectedSize(event.target.value);
  }

  const handleAddToCart = async () => {
    let items = {
      id: foodItem._id,
      name: foodItem.name,
      img: foodItem.img,
      size: selectedSize,
      quantity: quantity,
      finalPrice: finalPrice,
    };

    let food = [];
    for (const item of cartState) {
      if(item.id === foodItem._id){
        food = item;
        break;
      }
    }
    if(food.length !== 0){
      if(food.size === selectedSize){
        await cartDispatch({type:"UPDATE_ITEM", id:food.id,quantity:quantity,finalPrice:finalPrice})
        return;
      }
    }

    await cartDispatch({ type: "ADD_ITEM", data: items });
    console.log("Item added to cart successfully!");
  };

  return (
    <div className="card mb-4">
      <img
        src={foodItem.img}
        className="card-img-top"
        alt="..."
        height="200px"
      />
      <div className="card-body">
        <h5 className="card-title">{foodItem.name}</h5>
        {/* <p className="card-text">{foodItem.description}</p> */}
        <div className="row align-items-center g-2">
          <div className="col-4 d-flex justify-content-between align-items-center border gap-1 p-0">
            <button className="btn px-2 px-md-3" onClick={changeQuantityIncrement}>
              +
            </button>
            <span>{quantity}</span>
            <button className="btn px-2 px-md-3" onClick={changeQuantityDecrement}>
              -
            </button>
          </div>
          <div className="col-5">
            <select
              className="form-select form-select-md"
              name="size"
              id="size"
              value={selectedSize}
              onChange={handleSizeChange}
            >
              {sizes.map((size, index) => (
                <option key={index} value={size}>
                  {size}
                </option>
              ))}
            </select>
          </div>
          <div className="col-3 text-end">
            <span className="fs-5">₹{options[selectedSize]}</span>
          </div>
        </div>

        <div className="row align-items-center">
          <div className="col-12 d-flex justify-content-between align-items-center mt-2">
            Final Price - ₹{finalPrice}
          </div>
        </div>
        <hr />
        <div className="row align-items-center">
          <div className="col-12 d-flex justify-content-end">
            <button
              className="btn btn-primary text-white"
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
