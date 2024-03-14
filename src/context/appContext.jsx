import { createContext, useContext, useState } from 'react';


const AppContext = createContext();

export const useAppContext = () => {
  const context = useContext(AppContext);

  if (context === undefined) {
    throw new Error("AppContext must be within AppContextProvider!");
  }

  return context;
}

const AppContextProvider = ({ children }) => {
  const [cartData, setCart] = useState([]);

  /**
   * @param {{ id: number, quantity: number, title: string, description: string, price: number, category: string }} itemData 
   */
  const addToCart = (itemData) => {
    const itemIndex = cartData.findIndex(data => data.id === itemData.id);

    if (itemIndex !== -1) {
      const newData = [...cartData];
      const { quantity: oldQuantity } = newData[itemIndex];
      newData[itemIndex] = {...newData[itemIndex], quantity: oldQuantity + itemData.quantity };

      setCart(newData);
    } else {
      const oldCart = [...cartData];
      const newCart = oldCart.concat(itemData);

      setCart(newCart);
    }
  };

  /**
   * @param {number} id 
   */
  const removeFromCart = (id) => {
    const newCart = cartData.filter((itemData) => itemData.id !== id);

    setCart(newCart);
  };

  const clearCart = () => {
    setCart([]);
  }

  return (
    <AppContext.Provider value={{ cartData, addToCart, removeFromCart, clearCart }}>
      {children}
    </AppContext.Provider>
  )
}

export default AppContextProvider;