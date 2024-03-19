/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const useAppContext = () => {
  const context = useContext(AppContext);

  if (context === undefined) {
    throw new Error("AppContext must be within AppContextProvider!");
  }

  return context;
};

const AppContextProvider = ({ children }) => {
  const [cartState, setCartState] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  const updateItemQuantityById = (id, quantity) => {
    const currentItemIndex = cartState.findIndex((item) => item.id === id);
    const copyCartState = [...cartState];
    const currentItem = copyCartState[currentItemIndex];
    copyCartState[currentItemIndex] = { ...currentItem, quantity };

    setCartState(copyCartState);
  };

  const addItemToCart = (item) => {
    const cartItem = cartState.find(({ id }) => id === item.id);

    if (cartItem) {
      const newQuantity = cartItem.quantity + item.quantity;
      updateItemQuantityById(item.id, newQuantity);
    } else {
      setCartState([...cartState, item]);
    }
  };

  const removeItemFromCart = (id) => {
    setCartState(cartState.filter((item) => item.id !== id));
  };

  const handleCartClear = () => {
    setCartState([]);
  };

  const toggleWishlistById = (id) => {
    const isItemInWishlist = wishlist.includes(id);

    if (isItemInWishlist) {
      setWishlist(wishlist.filter((itemId) => itemId !== id));
    } else {
      setWishlist([...wishlist, id]);
    }
  };

  return (
    <AppContext.Provider
      value={{
        cartState,
        setCartState,
        wishlist,
        setWishlist,
        addItemToCart,
        handleCartClear,
        removeItemFromCart,
        toggleWishlistById,
        updateItemQuantityById
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
