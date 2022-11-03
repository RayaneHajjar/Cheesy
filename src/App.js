import React, { useState } from 'react';

import CartProvider from './store/CartProvider.js';

import Header from './components/layouts/Header.js';
import Meals from './components/meals/Meals';
import Cart from './components/cart/Cart';

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  
  const showCartHandler = () => {
    setCartIsShown(true);
  }

  const hideCartHandler = () => {
    setCartIsShown(false);
  }
  
  return (
    <CartProvider>
      <Header onShowCart={showCartHandler}/>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
