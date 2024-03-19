/* eslint-disable react/prop-types */
import { useMemo } from "react";
import { useAppContext } from "../../context/appContext";
import cart from "../../images/cart.svg";
import heart from "../../images/heart.svg";
import Counter from "../Counter/Counter";

import "./Header.css";

function Header({ handleCartOpen }) {
  const { wishlist, cartState } = useAppContext();

  const cartItemCount = useMemo(
    () => cartState.reduce((acc, { quantity }) => acc + quantity, 0),
    [cartState]
  );

  return (
    <div className="header">
      <div className="header__container">
        <div className="wish__list">
          <button>
            <Counter count={wishlist.length} />
            <img src={heart} alt="cart" width="20" />
          </button>
          <span>Обране</span>
        </div>
        <div className="cart__list">
          <button onClick={handleCartOpen}>
            <Counter count={cartItemCount} />
            <img src={cart} alt="cart" width="20" />
          </button>
          <span>Кошик</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
