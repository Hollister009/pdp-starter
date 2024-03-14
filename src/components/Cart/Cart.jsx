/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import cart from "../../images/cart.svg";
import "./Cart.css";
import CartItem from "./CartItem";

const formatCurrency = new Intl.NumberFormat(undefined, {
  style: "currency",
  currency: "USD",
});

function Cart({
  state,
  isOpen,
  handleClose,
  removeItem,
  updateItem,
  clearCart,
}) {
  const purchaseHandler = () => {
    clearCart();

    setTimeout(() => {
      alert("Thank you for your purchase!");
    });
  };

  const cartTotalPrice = state.reduce(
    (acc, { price, quantity }) => price * quantity + acc,
    0
  );

  if (!isOpen) return null;

  if (state.length === 0) {
    return (
      <div className="cart__container">
        <div className="cart__buttons">
          <button className="purchase__button" disabled>
            Purchase
          </button>
          <button className="close__button" onClick={handleClose}>
            X
          </button>
        </div>
        <img src={cart} alt="cart" width="40" />
        <span>Cart empty...</span>
      </div>
    );
  }

  return (
    <div className="cart__container">
      <div className="cart__buttons">
        <button className="purchase__button" onClick={purchaseHandler}>
          Purchase
        </button>
        <button className="close__button" onClick={handleClose}>
          X
        </button>
      </div>
      <ul className="cart__item-list">
        {state.map((item) => (
          <CartItem
            key={item.id}
            {...item}
            updateItem={updateItem}
            removeItem={removeItem}
          />
        ))}
      </ul>
      <span className="total">
        Total price: {formatCurrency.format(cartTotalPrice)}
      </span>
    </div>
  );
}

export default Cart;
