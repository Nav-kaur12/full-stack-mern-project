import { Footer } from "flowbite-react";
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";
import { Link } from "react-router-dom";
 
const MyFooter = () => {
  const footItem=[
    {link:"Home", path:'/'},
    {link:"About", path:'/about'},
    {link:"Shop", path:'/shop'},
    {link:"Sell Your Book", path:'/admin/dashboard'},
    {link:"Audio-Books", path:'/audiobooks'},
]
  return (
    
    <Footer container  className="bg-black" >

      
      <div className="w-full ">
          <div className="flex justify-center items-center">
          <ul className='md:flex space-x-12 hidden text-center'>
                 {
                     footItem.map(
                         ({link,path})=> <Link key={path} to={path} className='block text-base text-white uppercase cursor-pointer hover:text-Stone-300 hover:translate-x-1'>{link}</Link>                       
                   )
                 }
             </ul>
          </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright href="#" by="Flowbite™" year={2022} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon href="#" icon={BsFacebook} />
            <Footer.Icon href="#" icon={BsInstagram} />
            <Footer.Icon href="#" icon={BsTwitter} />
            <Footer.Icon href="#" icon={BsGithub} />
            <Footer.Icon href="#" icon={BsDribbble} />
          </div>
        </div>
      </div>
    </Footer>
      

   
  )
}

export default MyFooter






