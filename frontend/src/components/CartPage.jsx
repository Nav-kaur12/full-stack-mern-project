// CartPage.jsx
import React from 'react';
import { useOutletContext } from 'react-router-dom';
import { FaIndianRupeeSign } from 'react-icons/fa6';

const CartPage = () => {
  const { cart } = useOutletContext();

  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => total + item.bookPrice, 0).toFixed(2);
  };

  return (
    <div className='px-12 lg:px-10 bg-teal-100'>
      <h1 className='text-4xl font-bold text-center my-5'>Your Cart</h1>
      <div className='flex flex-col items-center'>
        {cart.length === 0 ? (
          <p className='text-xl'>Your cart is empty</p>
        ) : (
          <div className='w-full max-w-4xl'>
            {cart.map((book) => (
              <div key={book._id} className='flex items-center border-b border-gray-300 py-4'>
                <img src={book.imageURL} alt={book.bookTitle} className='w-24 h-36 object-cover' />
                <div className='flex-1 ml-4'>
                  <h2 className='text-xl font-semibold'>{book.bookTitle}</h2>
                  <p className='text-gray-700'>by {book.authorName}</p>
                  <p className='text-lg font-bold'>
                    <FaIndianRupeeSign className='inline' /> {book.bookPrice}
                  </p>
                </div>
              </div>
            ))}
            <div className='mt-6 flex justify-between'>
              <h2 className='text-2xl font-bold'>Total:</h2>
              <p className='text-2xl font-bold'>
                <FaIndianRupeeSign className='inline' /> {calculateTotalPrice()}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;