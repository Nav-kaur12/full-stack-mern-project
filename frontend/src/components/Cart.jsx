import React, { useContext, useEffect, useState } from 'react';
import CartContext from './CartContext';

const Cart = () => {
  const { cart, removeFromCart, handleChange } = useContext(CartContext);
  const [totalPrice, setTotalPrice] = useState(0);

  const calculateTotalPrice = () => {
    let total = 0;
    cart.forEach(item => {
      total += item.amount * item.bookPrice; // Using bookPrice instead of price
    });
    setTotalPrice(total);
  };

  useEffect(() => {
    calculateTotalPrice();
  }, [cart]);

  return (
    <>
      <div className='px-10 lg:px-10 bg-teal-100'>
        <div className='pt-5 ps-10 gap-10 my-20'>
          <h2 className='text-5xl font-bold text-center'>Your BOOKS in a cart</h2>
        </div>
        <div className='pt-0 px-10 pb-20'>
          {cart?.map(item => (
            <div className="cart_box sm:flex-col space-y-3 md:flex flex-row justify-between items-center mt-50  border-b-4 border-blue-500 pb-5 pt-4" key={item._id}>
              <div className='cartImg flex w-50'>
                <img className='w-20 h-20' src={item.imageURL} alt="book" />
                <p className='text-xl font-bold text-center ms-4'>{item.bookTitle} - Rs {item.bookPrice}</p>
              </div>
              <div>
                <button className='bg-green-400 hover:bg-lime-500 font-bold me-2 px-4' onClick={() => handleChange(item, 1)}> + </button>
                <button className='bg-red-400 rounded-lg font-bold me-2 px-3'>{item.amount}</button>
                <button className='bg-green-400 hover:bg-lime-500 px-4 font-bold me-2' onClick={() => handleChange(item, -1)}> - </button>
              </div>
              <div>
                <span className='bg-lime-500 hover:bg-green-700 font-bold me-2 px-4 py-2 rounded-md'>
                  Rs {item.amount * item.bookPrice} {/* Using bookPrice instead of price */}
                </span>
                <button className='bg-green-400 hover:bg-green-400 font-bold me-2 px-4 py-2 rounded-md hover:bg-green-700 hover:text-white hover:rounded-lg' onClick={() => removeFromCart(item._id)}>Remove</button>
              </div>
            </div>
          ))}
          <div className='flex justify-between '>
            <span className='text-xl font-bold text-center ms-4 pt-4'>Total Price of your Cart: </span>
            <span className='text-xl text-green-500 font-bold text-center ms-4 pt-4'>Rs {totalPrice}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;

