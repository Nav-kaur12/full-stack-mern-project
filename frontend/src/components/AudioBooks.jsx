import React from 'react'
import Marquee from "react-fast-marquee";
import { FaBook } from 'react-icons/fa6';


const AudioBooks = () => {
  return (
    <>
      <div className=' bg-teal-100 py-10 pt-20 w-full sm:gap-5 '>
        <div>
          <div className=' flex  py-5  px-10 items-left text-blue-800 content-center'>
            <h1 className='text-5xl font-bold px-3'> Hindi books  </h1>
            <FaBook className='w-10 h-10 mt-2 text-blue-700 ' />
          </div>


          <Marquee play speed={100} pauseOnHover direction='left' loop={false}>
            <div className='lg:w-1/2 mx-5'>
              <iframe width="560" height="315" src="https://www.youtube.com/embed/S0RqHzm1r5E?si=dxvP1p_SYL-qd82G" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>

            <div className='lg:w-1/2  mx-5'>
              <iframe width="560" height="315" src="https://www.youtube.com/embed/F2Qxkw9DgEs?si=0lJsfQHQUgABFqu3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>

            <div className='lg:w-1/2  mx-5'>
              <iframe width="560" height="315" src="https://www.youtube.com/embed/JJ0O5sgFqx0?si=eh7OrlllIsn8wtKh" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>

            <div className='lg:w-1/2  mx-5'>
              <iframe width="560" height="315" src="https://www.youtube.com/embed/1jLiwuoWErE?si=94aVGrvUTtnw9tj3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>


          </Marquee>
        </div>
        <hr className='bg-blue-900  h-1 mt-5' />


        {/* punjabi books */}

        <div>
          <div className=' flex  py-5  px-10 items-left text-blue-800 content-center'>
            <h1 className='text-5xl font-bold px-3'> Punjabi books  </h1>
            <FaBook className='w-10 h-10 mt-2 text-blue-700 ' />
          </div>
          <Marquee play speed={100} pauseOnHover direction='right'>
            <div className='lg:w-1/2 mx-5'>
              <iframe width="560" height="315" src="https://www.youtube.com/embed/S0RqHzm1r5E?si=dxvP1p_SYL-qd82G" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>

            <div className='lg:w-1/2  mx-5'>
              <iframe width="560" height="315" src="https://www.youtube.com/embed/F2Qxkw9DgEs?si=0lJsfQHQUgABFqu3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>

            <div className='lg:w-1/2  mx-5'>
              <iframe width="560" height="315" src="https://www.youtube.com/embed/JJ0O5sgFqx0?si=eh7OrlllIsn8wtKh" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>

            <div className='lg:w-1/2  mx-5'>
              <iframe width="560" height="315" src="https://www.youtube.com/embed/1jLiwuoWErE?si=94aVGrvUTtnw9tj3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>

          </Marquee>

        </div>
        <hr className='bg-blue-900  h-1 mt-5' />


        {/* english book */}

        <div>
          <div className=' flex  py-5  px-10 items-left text-blue-800 content-center'>
            <h1 className='text-5xl font-bold px-3'> English books  </h1>
            <FaBook className='w-10 h-10 mt-2 text-blue-700 ' />
          </div>
          <Marquee play speed={100} pauseOnHover direction='left'>
            <div className='lg:w-1/2 mx-5'>
              <iframe width="560" height="315" src="https://www.youtube.com/embed/S0RqHzm1r5E?si=dxvP1p_SYL-qd82G" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>

            <div className='lg:w-1/2  mx-5'>
              <iframe width="560" height="315" src="https://www.youtube.com/embed/F2Qxkw9DgEs?si=0lJsfQHQUgABFqu3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>

            <div className='lg:w-1/2  mx-5'>
              <iframe width="560" height="315" src="https://www.youtube.com/embed/JJ0O5sgFqx0?si=eh7OrlllIsn8wtKh" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>

            <div className='lg:w-1/2  mx-5'>
              <iframe width="560" height="315" src="https://www.youtube.com/embed/1jLiwuoWErE?si=94aVGrvUTtnw9tj3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>


          </Marquee>
        </div>


      </div>
      {/* </div> */}






      {/* {/* <div className='flex flex-col md:flex-row justify-evenly items-center py-10 ps-20  gap-20 '>

      
    </div >
    </div > */}

    </>

  )
}

export default AudioBooks