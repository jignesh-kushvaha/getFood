import React from "react";
import { useState } from "react";

function Card() {
  let [quantity, setQuantity] = useState(1);
  function changeQuantityIncrement() {
    setQuantity(++quantity);
  }
  function changeQuantityDecrement() {
    if(quantity == 1){
      setQuantity(1);
      return;  
    }
    setQuantity(--quantity);
  }
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img
        src="https://placehold.co/600x400"
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <div className="row align-items-center">
          <div className="col-md-4 d-flex justify-content-between align-items-center border gap-1 p-0">
            <button
              className="btn"
              onClick={changeQuantityIncrement}
            >
              +
            </button>
            <span>{quantity}</span>
            <button
              className="btn"
              onClick={changeQuantityDecrement}
            >
              -
            </button>
          </div>
          <div className="col-auto">
            <select className="form-select form-select-md" name="size" id="size">
              <option value="half">Half</option>
              <option value="full">Full</option>
            </select>
          </div>
          <div className="col text-end">₹190</div>
        </div>
      </div>
    </div>
  );
}

export default Card;
