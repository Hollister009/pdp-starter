/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/prop-types */
import { useState } from "react";
import cart from "../../images/cart.svg";
import heart from "../../images/heart.svg";
import heartFilled from "../../images/heart-black.svg";
import { MAX_QUANTITY, MIN_QUANTITY } from "../../constants/constants";

import "./Item.css";

const formatCurrency = new Intl.NumberFormat(undefined, {
  style: "currency",
  currency: "USD",
});

function Item({
  item,
  addItemToCart,
  toggleWishlistById,
  isWishlisted = false,
}) {
  const { title, description, price, category } = item;
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (event) => {
    const newQuantity = Number(event.target.value);
    setQuantity(newQuantity);
  };

  return (
    <div className="item">
      <ul className="item__info">
        <li className="item__title">
          <b>{title}</b>
        </li>
        <li className="item__category">{category}</li>
        <li className="item__description">{description}</li>
        <li className="item__price">Price: {formatCurrency.format(price)}</li>
        <li className="item__quantity">
          Quantity:
          <input
            id="quantity"
            className="count__quantity"
            type="number"
            min={MIN_QUANTITY}
            max={MAX_QUANTITY}
            value={quantity}
            onChange={handleQuantityChange}
          />
        </li>
      </ul>
      <div className="item__buttons">
        <button
          className="item__wish-button"
          onClick={() => toggleWishlistById(item.id)}
        >
          {isWishlisted ? "Remove from " : "Add to "}
          <img src={isWishlisted ? heartFilled : heart} alt="cart" width="15" />
        </button>

        <button
          className="item__cart-button"
          onClick={() => addItemToCart({ ...item, quantity })}
        >
          Add to <img src={cart} alt="cart" width="15" />
        </button>
      </div>
    </div>
  );
}

export default Item;
