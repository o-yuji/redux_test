import React from "react";
import { PlusIcon } from "../HeroIcons";
import { MinusIcon } from "../HeroIcons";
import { useDispatch } from "react-redux";
import { removeItem, increase, decrease } from "../features/cart/CartSlice";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <article className="cart-item">
      <img src={item.img} alt="画像" />
      <div>
        <h4>{item.title}</h4>
        <h4 className="item-price">{item.price}円</h4>
        <button
          className="remove-btn"
          onClick={() => dispatch(removeItem(item))}
        >
          削除
        </button>
      </div>
      <div>
        <button className="amount-btn" onClick={() => dispatch(increase(item))}>
          <PlusIcon />
        </button>
        <p className="amount">{item.amount}</p>
        <button
          className="amount-btn"
          onClick={() => {
            item.amount > 1
              ? dispatch(decrease(item))
              : dispatch(removeItem(item));
          }}
        >
          <MinusIcon />
        </button>
      </div>
    </article>
  );
};

export default CartItem;
