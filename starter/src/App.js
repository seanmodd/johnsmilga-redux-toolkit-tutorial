import React from 'react';
import Navbar from './components/Navbar';
import CartContainer from './components/CartContainer';

import { useDispatch, useSelector } from 'react-redux';
// import { calculateTotals, getCartItems } from './features/cart/cartSlice';
import { useEffect } from 'react';
// import Modal from './components/Modal';
function App() {
  const { cartItems, isLoading } = useSelector((store) => store.cart);
  // const { isOpen } = useSelector((store) => store.modal);
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(calculateTotals());
    console.log("calculateTotals() dispatch")
  }, [cartItems]);

  useEffect(() => {
    // dispatch(getCartItems('random'));
    console.log("getCartItems('random') dispatch")
  }, []);

    if (isLoading) {
    return (
      <div className='loading'>
        <h1>Loading...</h1>
      </div>
    );
  }

   return (
    <main>
      {/* {isOpen && <Modal />} */}
      <Navbar />
      <CartContainer />
    </main>
  );
}
export default App;
