import React from 'react'
import Navbar from '../Navbar';
import { Navigate } from 'react-router-dom';
import EventCard from '../EventCard';

function CompletedEvents() {
  const adminLogin = localStorage.getItem('adminLogged')
  console.log("local-completed", typeof adminLogin);
  return (
    <>
      {adminLogin === 'true' ?
        <div className='flex lg:h-full h-full  flex-col lg:flex-row '>

        <Navbar title='completedEvents' admin={true} />
        <div className='lg:w-full text-white mt-4 ml-4 mr-2'>
            <div className="participated-events mt-4">
                <p className="text-xl bg-white text-black font-medium p-3 lg:w-full rounded-xl "> Following Events have Successfully Completed</p>
                <div className="event-main flex flex-wrap justify-evenly">

                    <EventCard />
                    <EventCard />
                    <EventCard />
                </div>
            </div>
        </div>

    </div> : <Navigate to='/auth/login' />
      }
    </>

  )
}

export default CompletedEvents