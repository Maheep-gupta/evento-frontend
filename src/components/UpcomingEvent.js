import React from 'react'
import Navbar from './Navbar'

function UpcomingEvent() {
    const adminLogin = localStorage.getItem('adminLogged')
    console.log(adminLogin);
    return (
        <>
            <div className='flex h-screen w-screen bg-gradient-to-tl from-green-400 to-indigo-900'>

                <Navbar title='ue' />
                <div className='bg-gradient-to-tl from-green-400 to-indigo-900 w-full text-white'> Upcoming Event</div>
            </div>
        </>
    )
}

export default UpcomingEvent