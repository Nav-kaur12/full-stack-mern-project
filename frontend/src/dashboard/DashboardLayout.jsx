
import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from './SideBar';
import MyFooter from '../components/MyFooter';

const DashboardLayout = () => {
  return (
    <>
    <div className='flex gap-4 flex-col md:flex-row'>
        <SideBar/>
        <Outlet/>
    </div>
    <footer className="bg-gray-100">
          <MyFooter />
        </footer>
    </>
  )
}

export default DashboardLayout
