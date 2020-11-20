import React from "react";
import { useDispatch } from "react-redux";
import { REMOVE_ITEM, INCREASE_ITEM, DECREASE_ITEM } from "../action";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const removeItem = (id) => {
    dispatch({ type: REMOVE_ITEM, payload: { id } });
  };
  const increaseHandler = (id) => {
    dispatch({ type: INCREASE_ITEM, payload: { id } });
  };
  const decreaseHandler = (id, amount) => {
    dispatch({ type: DECREASE_ITEM, payload: { id, amount } });
  };
  return (
    <div className="cart-item">
      <img src={item.img} alt={item.title} />
      <div>
        <h4>{item.title}</h4>
        <h4 className="item-price">${item.price}</h4>
        {/* remove button */}
        <button className="remove-btn" onClick={() => removeItem(item.id)}>
          remove
        </button>
      </div>
      <div>
        {/* increase amount */}
        <button className="amount-btn" onClick={() => increaseHandler(item.id)}>
          <i className="fas fa-arrow-up fa-1x"></i>
        </button>
        {/* amount */}
        <p className="amount">{item.amount}</p>
        {/* decrease amount */}
        <button
          className="amount-btn"
          onClick={() => decreaseHandler(item.id, item.amount)}
        >
          <i className="fas fa-arrow-down fa-1x"></i>
        </button>
      </div>
    </div>
  );
};

export default CartItem;
