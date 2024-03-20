import { useState } from 'react';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import ItemList from './components/ItemList/ItemList';
import data from './data/pdp.json';
import Cart from './components/Cart/Cart';
import AppContextProvider from './context/appContext';

function App() {
  const [isCartOpen, setCartOpen] = useState(false);

  const handleCartOpen = () => {
    setCartOpen(true);
  };

  const handleCartClose = () => {
    setCartOpen(false);
  };

  return (
    <AppContextProvider>
      <Header handleCartOpen={handleCartOpen} />
      <ItemList data={data} />
      <Cart isOpen={isCartOpen} handleClose={handleCartClose} />
      <Footer />
    </AppContextProvider>
  );
}

export default App;
