/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import { useMemo } from "react";
import { useAppContext } from "../../context/appContext";
import CartIcon from "../../images/cart.svg?react";
import CartItem from "./CartItem";
import "./Cart.css";

const formatCurrency = new Intl.NumberFormat(undefined, {
  style: "currency",
  currency: "USD",
});

function Cart({
  isOpen,
  handleClose,
}) {
  const {cartState, removeItemFromCart, updateItemQuantityById, handleCartClear} = useAppContext();
  const purchaseHandler = () => {
    handleCartClear();

    setTimeout(() => {
      alert("Thank you for your purchase!");
    });
  };

  const cartTotalPrice = useMemo(() => cartState.reduce(
    (acc, { price, quantity }) => price * quantity + acc,
    0
  ), [cartState]);

  const renderCartItems = () => {
    return cartState.map((item) => (
      <CartItem
        key={item.id}
        {...item}
        updateItem={updateItemQuantityById}
        removeItem={removeItemFromCart}
      />
    ));
  };

  if (!isOpen) return null;

  if (cartState.length === 0) {
    return (
      <div className="cart__container">
        <div className="cart__buttons">
          <button className="cart__button" disabled>
            Purchase
          </button>
          <button className="cart__button" onClick={handleClose}>
            X
          </button>
        </div>
        <div className="cart-icon">
          <CartIcon />
        </div>
        <span>Cart empty...</span>
      </div>
    );
  }

  return (
    <div className="cart__container">
      <div className="cart__buttons">
        <button className="cart__button" onClick={purchaseHandler}>
          Purchase
        </button>
        <button className="cart__button" onClick={handleClose}>
          X
        </button>
      </div>
      <ul className="cart__item-list">{renderCartItems()}</ul>
      <span className="total">
        Total price: {formatCurrency.format(cartTotalPrice)}
      </span>
    </div>
  );
}

export default Cart;
