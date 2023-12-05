import React, { useState, useEffect } from 'react'
import Navbar from '../Navbar';
import { Navigate } from 'react-router-dom';
import EventCard from '../EventCard';
import EventJSON from '../../utils/EventJSON'
import axios from 'axios';

function CompletedEvents() {
  const adminLogin = localStorage.getItem('adminLogged')
  const [Events, setEvents] = useState(EventJSON)
  const [CompletedEvent, setCompletedEvent] = useState(EventJSON)

  useEffect(() => {
    axios.get("https://wax-nostalgic-macaroni.glitch.me/api/event/getEvent")
      .then((response) => {
        setEvents(response.data.eventData)
      })
      .catch((err) => {
        console.error(err);
      })

  }, []);
  useEffect(() => {
    const completedEvent = Events.filter((ele) => {
      return ele.eventStatus === 'completed'
    })
    setCompletedEvent(completedEvent)
  }, [Events])
  return (
    <>
      {adminLogin === 'true' ?
        <div className='flex lg:h-full h-full  flex-col lg:flex-row '>

          <Navbar title='completedEvents' admin={true} />
          <div className='lg:w-full text-white mt-4 ml-4 mr-2'>
            <div className="participated-events mt-4">
              <p className="text-xl bg-white text-black font-medium p-3 lg:w-full rounded-xl "> Following Events have Successfully Completed</p>
              <div className="event-main flex flex-wrap justify-evenly">
                {CompletedEvent.length > 0 ?
                CompletedEvent.map((ele) => {
                  return (
                    <EventCard key={ele._id} dataToFetch={ele.eventName} eventName={ele.eventName.charAt(0).toUpperCase() + ele.eventName.slice(1)} date={ele.startDate} eventCategory={ele.eventType} eventImage={ele.eventImage} />
                  )

                }):"No Events"
}
              </div>
            </div>
          </div>

        </div> : <Navigate to='/auth/login' />
      }
    </>

  )
}

export default CompletedEvents