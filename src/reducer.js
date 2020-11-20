import {
  CLEAR_ITEM,
  REMOVE_ITEM,
  INCREASE_ITEM,
  DECREASE_ITEM,
  GET_TOTALS,
} from "./action";

import cartItems from "./cart-items";

const initialState = {
  cart: cartItems,
  total: 0,
  amount: 0,
};

export const Cartreducer = (state = initialState, action) => {
  switch (action.type) {
    case CLEAR_ITEM: {
      return {
        ...state,
        cart: [],
      };
    }
    case REMOVE_ITEM: {
      return {
        ...state,
        cart: state.cart.filter(
          (cartItem) => cartItem.id !== action.payload.id
        ),
      };
    }
    case INCREASE_ITEM: {
      let tempCart = state.cart.map((cartItem) => {
        if (cartItem.id === action.payload.id) {
          cartItem = { ...cartItem, amount: cartItem.amount + 1 };
        }
        return cartItem;
      });
      return {
        ...state,
        cart: tempCart,
      };
    }
    case DECREASE_ITEM: {
      let tempCart = [];
      if (action.payload.amount === 1) {
        tempCart = state.cart.filter(
          (cartItem) => cartItem.id !== action.payload.id
        );
        //console.log("its one");
      } else {
        tempCart = state.cart.map((cartItem) => {
          if (cartItem.id === action.payload.id) {
            cartItem = { ...cartItem, amount: cartItem.amount - 1 };
          }
          return cartItem;
        });
      }
      return {
        ...state,
        cart: tempCart,
      };
    }
    case GET_TOTALS: {
      //console.log("check");
      let { total, amount } = state.cart.reduce(
        (cartTotal, cartItem) => {
          const { price, amount } = cartItem;
          const itemTotal = price * amount;

          cartTotal.total += itemTotal;
          cartTotal.amount += amount;

          return cartTotal;
        },
        {
          total: 0,
          amount: 0,
        }
      );
      total = parseFloat(total.toFixed(2));
      return {
        ...state,
        total,
        amount,
      };
    }
    // let {total,amount} = state.cart.reduce((cartTotal,cartItem)=>{

    //   return cartTotal
    // },{total=0,amount=0})
    // return {
    //   ...state,
    // };
    default:
      return state;
  }
};

//export default Cartreducer;
