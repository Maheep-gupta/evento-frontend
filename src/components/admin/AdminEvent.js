import React from 'react'
import Navbar from '../Navbar';
import { Navigate } from 'react-router-dom';

function AdminEvent() {
  const adminLogin = localStorage.getItem('adminLogged')
  console.log("local-event", adminLogin);
  return (
    <>
      {adminLogin === 'true' ?
        <div className='flex'>

          <Navbar title='adEvent' admin={true} />
          {/* @MOHIT write code in this div */}
          <div className='bg-gradient-to-tl from-green-400 to-indigo-900 w-full text-white'>

            <span>Admin Event haa kar dunga mai </span>
          </div>
        </div > : <Navigate to='/auth/login' />
      }
    </>

  )
}

export default AdminEvent