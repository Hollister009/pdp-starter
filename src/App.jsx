import { useState } from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import ItemList from "./components/ItemList/ItemList";
import data from "./data/pdp.json";
import Cart from "./components/Cart/Cart";

function App() {
  const [cartState, setCartState] = useState([]);
  const [wishlist, setWishlist] = useState([]); // Array of IDs (Array<string>)
  const [isCartOpen, setCartOpen] = useState(false);

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

  const handleCartOpen = () => {
    setCartOpen(true);
  };

  const handleCartClose = () => {
    setCartOpen(false);
  };

  const handleCartClear = () => {
    setCartState([]);
  }

  const toggleWishlistById = (id) => {
    const isItemInWishlist = wishlist.includes(id);

    if (isItemInWishlist) {
      setWishlist(wishlist.filter((itemId) => itemId !== id));
    } else {
      setWishlist([...wishlist, id]);
    }
  };

  return (
    <>
      <Header
        wishlist={wishlist}
        cartState={cartState}
        handleCartOpen={handleCartOpen}
      />
      <ItemList
        data={data}
        wishlist={wishlist}
        addItemToCart={addItemToCart}
        toggleWishlistById={toggleWishlistById}
      />
      <Cart
        state={cartState}
        isOpen={isCartOpen}
        handleClose={handleCartClose}
        removeItem={removeItemFromCart}
        updateItem={updateItemQuantityById}
        clearCart={handleCartClear}
      />
      <Footer />
    </>
  );
}

export default App;
