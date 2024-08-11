import React from 'react'
import img from '../components/download.jpeg'

const About = () => {
  return (
    <>
      <div className=''>
        
        <div className='bg-teal-100 pt-20'>
          <h1 className='text-4xl font-bold text-rose-800 text-center'>About Us</h1>
          <div className='   flex w-full flex-col md:flex-row justify-evenly items-center py-10 ps-20  gap-20 sm:gap-5 '>
          {/* left side */}
          <div className='space-y-3 w-3/4'>
            <h1 className='text-3xl font-bold'>Welcome to Our Book Store</h1>
            <p className='text-lg'>We are a team of passionate book lovers who want
              to make reading a fun and enjoyable experience for everyone. Our store offers a wide selection of books across various genres, including fiction, non-fiction, mystery, and more.</p>
          </div>
          {/* right side */}
          <div className='w-2/4'>
            <img className='w-100 h-60 rounded-lg' src={img} alt='' />
          </div>
        </div>
        </div>
        

        {/* data stats */}
        <div className='bg-white'>
           <div className='flex flex-col sm:flex-row bg-teal-500 py-10 px-20 mx-auto justify-between gap-6 md:w-3/4 my-5'>           
            <div>
                <h3 className='text-3xl font-bold '>800+</h3>
                <p className='text-bold'>Book Listing</p>
            </div>
            <div>
                <h3 className='text-3xl font-bold '>550+</h3>
                <p className='text-bold'>Registered Users</p>
            </div>
            <div>
                <h3 className='text-3xl font-bold '>200+</h3>
                <p className='text-bold'>PDF Downloads</p>
            </div>
            </div>
        </div>
       

        {/* second card section */}

        <div className='px-12 lg:px-10 py-10 bg-white shadow-2xl '>
          <h1 className='text-3xl font-bold text-yellow-900 text-center'>What We Offer</h1>
          <div className='px-12 lg:px-10 flex flex-col md:flex-row gap-10 my-10'>
            <div className='flex w-full flex-col md:flex-row justify-evenly items-center py-5 ps-10 shadow-2xl gap-20 '>              
              <div className='space-y-3 w-3/4'>
                <h1 className='text-xl font-bold text-rose-800 text-center '>Digital and Audiobook Options:
                </h1>
                <p className='text-lg'>Embrace the convenience of digital and audiobooks with our extensive selection available for purchase. Enjoy your favorite books anytime, anywhere, on your preferred device.</p>
              </div>
            </div>

            <div className='flex w-full flex-col md:flex-row justify-evenly items-center py-5 ps-10 shadow-2xl gap-20 '>
             
              <div className='space-y-3 w-3/4'>
                <h1 className='text-xl font-bold text-rose-800 text-center'>Wide Selection of Books:
                </h1>
                <p className='text-lg '>From timeless classics to contemporary bestsellers, our shelves are stocked with a diverse range of genres to suit every reader's taste. Whether you're searching for the latest thriller, a heartwarming romance, insightful non-fiction, or engaging children's books, you'll find it here.</p>
              </div>
            </div>
          </div>

          <div className='px-12 lg:px-10 flex flex-col md:flex-row gap-10'>
            <div className='flex w-full flex-col md:flex-row justify-evenly items-center py-5 ps-10 shadow-2xl gap-20 '>              
              <div className='space-y-3 w-3/4'>
                <h1 className='text-xl font-bold text-rose-800 text-center '>Gift Wrapping Services:
                </h1>
                <p className='text-lg'>Buying a book as a gift? Let us take care of the wrapping for you. We offer complimentary gift wrapping to add a special touch to your present. You can use any book for gift.</p>
              </div>
            </div>

            <div className='flex w-full flex-col md:flex-row justify-evenly items-center py-5 ps-10 shadow-2xl gap-20 '>
             
              <div className='space-y-3 w-3/4'>
                <h1 className='text-xl font-bold text-rose-800 text-center'>Community Engagement:
                </h1>
                <p className='text-lg '>From timeless classics to contemporary bestsellers, our shelves are stocked with a diverse range of genres to suit every reader's taste. Whether you're searching for the latest thriller, a heartwarming romance, insightful non-fiction, or engaging children's books, you'll find it here.</p>
              </div>
            </div>
          </div>
        </div>




      </div>

    </>
  )
}

export default About