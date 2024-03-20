import {
  createContext,
  useContext,
  useMemo,
  useState,
  useCallback
} from 'react';

const AppContext = createContext();

export const useAppContext = () => {
  const context = useContext(AppContext);

  if (context === undefined) {
    throw new Error('AppContext must be within AppContextProvider!');
  }

  return context;
};

const AppContextProvider = ({ children }) => {
  const [cartState, setCartState] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  const updateItemQuantityById = useCallback(
    (id, quantity) => {
      const currentItemIndex = cartState.findIndex((item) => item.id === id);
      const copyCartState = [...cartState];
      const currentItem = copyCartState[currentItemIndex];
      copyCartState[currentItemIndex] = { ...currentItem, quantity };

      setCartState(copyCartState);
    },
    [cartState]
  );

  const addItemToCart = useCallback(
    (item) => {
      const cartItem = cartState.find(({ id }) => id === item.id);

      if (cartItem) {
        const newQuantity = cartItem.quantity + item.quantity;
        updateItemQuantityById(item.id, newQuantity);
      } else {
        setCartState([...cartState, item]);
      }
    },
    [cartState, updateItemQuantityById]
  );

  const removeItemFromCart = useCallback(
    (id) => {
      setCartState(cartState.filter((item) => item.id !== id));
    },
    [cartState]
  );

  const handleCartClear = useCallback(() => {
    setCartState([]);
  }, []);

  const toggleWishlistById = useCallback(
    (id) => {
      const isItemInWishlist = wishlist.includes(id);

      if (isItemInWishlist) {
        setWishlist(wishlist.filter((itemId) => itemId !== id));
      } else {
        setWishlist([...wishlist, id]);
      }
    },
    [wishlist]
  );

  const value = useMemo(() => {
    return {
      cartState,
      wishlist,
      addItemToCart,
      handleCartClear,
      removeItemFromCart,
      toggleWishlistById,
      updateItemQuantityById
    };
  }, [
    cartState,
    wishlist,
    addItemToCart,
    handleCartClear,
    removeItemFromCart,
    toggleWishlistById,
    updateItemQuantityById
  ]);

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
