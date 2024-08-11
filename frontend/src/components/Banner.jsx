import React from 'react'
import BannerCard from '../home/BannerCard'

const Banner = () => {

    return (
        <div className='px-4 lg:px-10 bg-teal-100 flex items-center'>
            <div className='flex w-full flex-col md:flex-row justify-evenly items-center gap-12 py-20'>
                {/* left side */}
                <div className='md:w-1/2 space-y-8 h-full'>
                    <h2 className='text-5xl font-bold leading-snug text-black'> Buy and Sell Your Books <span className='text-blue-700'>for the Best Price</span> </h2>
                    <p className='md:w-4/5 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi repellat quas labore reprehenderit, dolorum vel eveniet illum tempore neque minus, minima sed velit cupiditate! Aperiam ex tempore modi officia quasi.</p>

                    <div>
                        <form action='https://www.flipkart.com/search'>
                        <input type='text' name='q' id='search' placeholder='Search a book' className='py-2 px-2 rounded-s-sm outline-none' />
                        <button type='submit' className='bg-blue-700 px-6 py-3 ms-3 rounded-md text-white font-medium hover:bg-black transition-all ease-in duration-200'>Search</button>
                        </form>               
                    </div>
                </div>

                {/* right side */}
                <div>
                    <BannerCard />
                </div>

            </div>
        </div>
    )
}

export default Banner
