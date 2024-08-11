import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { FaCartShopping, FaIndianRupeeSign } from 'react-icons/fa6';
import CartContext from '../components/CartContext';

const SingleBook = () => {
  const { addToCart, cart } = useContext(CartContext);
  const bookData = useLoaderData();
  const [warning, setWarning] = useState(false);

  const handleAddToCart  = (book) => {
    if (cart.some((item) => item._id === book._id)) {
      setWarning(true);
      setTimeout(() => setWarning(false), 2000);
    }
    else {
      addToCart(book);
    }
  };

  const { _id, imageURL, bookTitle, bookDescription, category, authorName, bookPrice } = bookData;

  // Debugging: should log the cart array

  return (
    <>
      <div className='px-12 lg:px-10 bg-teal-100 flex items-center '>
        <div className='flex w-full flex-col md:flex-row justify-evenly items-center py-5 ps-10 shadow-2xl gap-10 my-20'>
          {/* Left side */}
          <div className='md:w-2/4 shadow-2xl ps-20 pt-5'>
            <div className='space-y-5 h-full ps-10'>
              <img src={imageURL} alt={bookTitle} className='h-96' />
            </div>
            {/* Buttons */}
            <div className='flex flex-row gap-5 my-5 content-center'>
              <button
                type='button'
                onClick={() => handleAddToCart(bookData)} 
                className='bg-yellow-300 px-3 py-3 ms-3 rounded-md text-black font-medium hover:bg-yellow-400 transition-all ease-in duration-200 flex gap-4'
              >
                <FaCartShopping className='w-6 h-6 text-blue' /> Add to Cart
              </button>
              <button
                type='button'
                className='bg-yellow-600 px-6 py-3 ms-3 rounded-md text-white font-medium flex gap-2 hover:bg-yellow-900 transition-all ease-in duration-200'
              >
                <FaIndianRupeeSign className='w-5 h-5 text-blue' /> Buy Now
              </button>
            </div>
          </div>
          {/* Right side */}
          <div className='md:w-3/4 h-full'>
            <div className='space-y-4 py-10'>
              <h2 className='text-2xl font-bold text-rose-800'>{bookTitle}</h2>
              <p className='font-bold'>Price: ${bookPrice}</p>
              <div className='space-y-4'>
                <span className='text-blue-700 font-bold'>Available offers:</span>
                <ul className='space-y-5'>
                  {/* Add offers here */}
                </ul>
              </div>
              <div className='space-y-5'>
                <h1 className='text-xl font-bold'><em>Some key points of book:)</em></h1>
                <p className='md:w-1/7'><span className='text-lime-900 font-semibold pe-10'>Author:</span>{authorName}</p>
                <p className='md:w-1/7'><span className='text-lime-900 font-semibold pe-10'>Category:</span>{category}</p>
                <p className='md:w-1/7'><span className='text-lime-900 font-semibold pe-10'>Description:</span> {bookDescription}</p>
                <p className='md:w-1/7'><span className='text-lime-900 font-semibold pe-10'>Payment:</span> Cash on Delivery Only</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {warning && <div className='warning'>Item is already added to your cart</div>}
    </>
  );
};

export default SingleBook;
