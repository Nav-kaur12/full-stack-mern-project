import './App.css';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import MyFooter from './components/MyFooter';
import 'flowbite/dist/flowbite.css';
import { useContext } from 'react';
import CartContext from './components/CartContext';
// import CartContext from './contexts/CartContext'; // Adjust path as necessary

function App() {
  const { cart } = useContext(CartContext);

  return (
    <>
      <Navbar size={cart.length} />
      <div className='min-h-screen'>
        <Outlet />
      </div>
      <MyFooter />
    </>
  );
}

export default App;
