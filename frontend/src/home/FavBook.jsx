import React from 'react'
import FavBookImg from '../assets/favoritebook.jpg'
import { Link } from 'react-router-dom'

const FavBook = () => {
  return (
    <div className='px-4 lg:px-24 my-20 flex flex-col md:flex-row justify-between items-center gap-12'>
        <div className='md:w-2/5 '>
        <img src={FavBookImg} alt=''/>
        </div>

        <div className='md:w-1/2 space-y-6' >
            <h1 className='text-5xl font-bold my-5 md:3/4 leading-snug '>Find Your Favorite <span className='text-blue-700'>Book here!</span></h1>

            <p className='mb-10 text-lg md:w-5/6  '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit architecto voluptate hic et quaerat enim. Necessitatibus, labore voluptates maiores dolores odio quibusdam iste fugit laudantium, quidem voluptas cum. Optio, eius.</p>
            
            
                {/* stats data */}
            <div className='flex flex-col sm:flex-row justify-between gap-6 md:w-3/4 my-14'>           
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

            <Link to='/shop' className= 'mt-8 block '><button className='bg-blue-700 text-white font-semibold py-3 px-6 rounded-md hover:bg-black transition-all duration-300'>Explore More</button></Link>
        </div>
    </div>
  )
}

export default FavBook