import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// // import { useCart } from './CartContext';
// react icons
import { FaBarsStaggered, FaBlog, FaCartShopping, FaXmark } from 'react-icons/fa6';

import CartContext from './CartContext';
import { AuthContext } from '../contects/AuthProvider';

const Navbar = () => {
    const [isMenuOpen,setisMenuOpen]=useState(false);
    const [isSticky,setsSticky]=useState(false);
    const { cart } = useContext(CartContext);
  

    const {user}= useContext(AuthContext);
    console.log(user);

    // toggle Menu
    const toggleMenu =()=>{
        setisMenuOpen(!isMenuOpen);
    }

    useEffect(()=>{
        const handleScroll=()=>{
            if(window.scrollY>100){
                setsSticky(true);
            }
            else{
                setsSticky(false);
            }
        }

        window.addEventListener('scroll', handleScroll);
        return()=>{
        window.addEventListener('scroll', handleScroll);
        }
            
    },[])

    // navItems
    const navItems=[
        {link:"Home", path:'/'},
        {link:"About", path:'/about'},
        {link:"Shop", path:'/shop'},
        {link:"Sell Your Book", path:'/admin/dashboard'},
        {link:"Audio-Books", path:'/audiobooks'},
    ]
  return (

   <header className='w-full bg-transparen fixed top-0 right-0 transition-all ease-in duration-300'>
    <nav className={`py-4 lg:px-24 px-4 ${isSticky ? 'sticky top-0 left-0 right-0 bg-blue-300' : ''} `}>
        <div className='flex justify-between items-center text-base gap-2'>
             {/* logo */}
             <Link to='/' className='text-2xl font-bold text-blue-700 flex items-cebnter gap-2'><FaBlog className='inline-block'/>Books</Link>

            {/* nav items for large device */}
            <ul className='md:flex space-x-12 hidden'>
                 {
                     navItems.map(
                         ({link,path})=> <Link key={path} to={path} className='block text-base text-black uppercase cursor-pointer hover:text-blue-700 hover:border-b-2 border-blue-800 '>{link}</Link>                       
                   )
                 }
             </ul>

             {/* button for lg devices*/}
            
             <div className='cart lg:flex items-center'>
             <span> 
             <Link to='/cart'>
          <FaCartShopping className='w-9 h-9 text-yellow-500' />
        </Link>
        </span>            
        <span>{cart.length}</span> 
          
       </div>

             {/* menu btn  for the mobile devices */}
             <div className='md:hidden'>
                 <button onClick={toggleMenu} className='text-black focus:outline-none'>
                     {
                       isMenuOpen ? <FaXmark className='h-5 w-5 text-black'/> :<FaBarsStaggered className='h-3 w-5 text-black'/>  
                     }
                   
                 </button>
                 </div>
             </div>

             {/* navItems for sm devices */}
             <div className={`space-y-4 px-4 mt-16 py-7 bg-blue-700 ${isMenuOpen ? 'block fixed top-0 right-0 left-0':'hidden'}`}>
                 {
                 navItems.map(
                     ({link,path})=> 
                 <Link key={path} to={path} className='block text-base text-white uppercase cursor
                 pointer'>{link}</Link>
                  )}
            </div>        
     </nav>
    </header>
   )
 }

 export default Navbar
