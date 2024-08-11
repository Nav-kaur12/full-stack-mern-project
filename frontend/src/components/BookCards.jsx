import React, { useContext } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';
import { FaCartShopping } from 'react-icons/fa6';
import CartContext from './CartContext';
// import CartContext from '../contexts/CartContext'; // Adjust path as necessary

function BookCards({ headline, books }) {
  const { addToCart } = useContext(CartContext);

  return (
    <div className='px-4 lg:px-24'>
      <h2 className='text-5xl text-center font-bold text-black my-5'>{headline}</h2>
      <div className='mt-12'>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 20 },
            768: { slidesPerView: 4, spaceBetween: 40 },
            1024: { slidesPerView: 5, spaceBetween: 50 },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {books.map(book => (
            <SwiperSlide key={book._id}>
              <Link to={`/book/${book._id}`}>
                <div className='relative'>
                  <img src={book.imageURL} alt='' />
                  <div
                    onClick={() => addToCart(book)}
                    className='absolute right-3 top-3 bg-blue-600 hover:bg-black p-2 rounded cursor-pointer'
                  >
                    <FaCartShopping className='w-4 h-4 text-white' />
                  </div>
                </div>
                <div>
                  <h3>{book.bookTitle}</h3>
                  <p>{book.authorName}</p>
                  <div>
                    <p className='font-bold text-black'>{book.bookPrice}</p>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default BookCards;
