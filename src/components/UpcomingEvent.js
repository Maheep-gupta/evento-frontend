import React from 'react'
import Navbar from './Navbar'

function UpcomingEvent() {
    const adminLogin = localStorage.getItem('adminLogged')
    console.log(adminLogin);
    return (
        <>
            <div className='flex'>

                <Navbar title='ue' />
                <span>Upcoming Event</span>
            </div>
        </>
    )
}

export default UpcomingEvent