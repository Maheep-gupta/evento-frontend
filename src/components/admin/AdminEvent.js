import React from 'react'
import Navbar from '../Navbar';
import { Navigate } from 'react-router-dom';

function AdminEvent() {
  const adminLogin = localStorage.getItem('adminLogged')
  console.log("local-event",adminLogin);
  return (
    <>
      {adminLogin === 'true' ?
            <div className='flex'>

          <Navbar title='adEvent' admin={true} />
          {/* @MOHIT write code in this div */}
          <div>

            <span>Admin Event haa kar dunga mai </span>
          </div>
          </div>:<Navigate to='/auth/login'/>
            }
    </>
    
  )
}

export default AdminEvent