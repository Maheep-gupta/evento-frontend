import React from 'react'
import Navbar from '../Navbar'
import { Navigate } from 'react-router-dom';

function Dashboard() {
  const adminLogin = localStorage.getItem('adminLogged')
  console.log("local-dash", typeof adminLogin);
  return (
    <>
      {
        adminLogin === 'true'
          ?
          <div className='flex'>

            <Navbar title='dashboard' admin={true} />
            {/* @MOHIT write code in this div */}
            <div>Dashboard</div>
          </div>
          :
          <Navigate to='/' />
      }

    </>
  )
}

export default Dashboard