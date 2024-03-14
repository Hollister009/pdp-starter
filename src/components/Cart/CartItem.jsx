/* eslint-disable react/prop-types */
import trash from "../../images/trash.png";

const formatCurrency = new Intl.NumberFormat(undefined, {
  style: "currency",
  currency: "USD",
});

const MAX_QUANTITY = 31;
const MIN_QUANTITY = 1;

function CartItem({ id, quantity, title, price, updateItem, removeItem }) {
  return (
    <li key={id} className="cart__item">
      <div className="cart__item-info">
        <h4>{title}</h4>
        <span>
          Quantity:
          <input
            id="item__quantity"
            className="count__quantity"
            type="number"
            value={quantity}
            min={MIN_QUANTITY}
            max={MAX_QUANTITY}
            onChange={(e) => {
              const newQuantity = parseInt(e.target.value)
              updateItem(id, newQuantity)
            }}
          />
        </span>
        <span> Price: {formatCurrency.format(price)}</span>
        <span> Total: {formatCurrency.format(price * quantity)}</span>
      </div>
      <button
        className="remove__button"
        onClick={() => {
          removeItem(id);
        }}
      >
        <img src={trash} alt="trash" width="15" />
      </button>
    </li>
  );
}

export default CartItem;
