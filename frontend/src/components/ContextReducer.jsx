import React, { createContext, useContext, useReducer } from "react";

const CartStateContext = createContext();
const CartDispatchContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return [...state, action.data];
    case "REMOVE_ITEM":
      let new_state = [...state];
      new_state.splice(action.index, 1);
      return new_state;
    case "UPDATE_ITEM":
      let new_arr = [...state];
      new_arr.find((food,i)=>{
        if(food.id === action.id){
          new_arr[i] = {...food, quantity: action.quantity + food.quantity, finalPrice: action.finalPrice + food.finalPrice}
          return new_arr;
        }
      })
      return new_arr;
    case "CLEAR":
      let empty_arr = [];
      return empty_arr;
    default:
      console.log("Error");
      break;
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, []);
  return (
    <CartDispatchContext.Provider value={dispatch}>
      <CartStateContext.Provider value={state}>
        {children}
      </CartStateContext.Provider>
    </CartDispatchContext.Provider>
  );
};

export const useCartDispatch = () => useContext(CartDispatchContext);
export const useCart = () => useContext(CartStateContext);
