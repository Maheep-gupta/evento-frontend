import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'
import EventJSON from '../utils/EventJSON'
import EventCard from './EventCard';
import axios from 'axios';
import LoadingScreen from './LoadingScreen';

function UpcomingEvent() {
    const [Events, setEvents] = useState(EventJSON)
    const [UpcomingEvents, setUpcomingEvents] = useState(EventJSON)

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
        const upcomingEvent = Events.filter((ele) => {
          return ele.eventStatus === 'Upcoming'
        })
        setUpcomingEvents(upcomingEvent)
      }, [Events])

    return (
        <>
            <div className='flex lg:h-full h-full w-full flex-col lg:flex-row '>

                <Navbar title='ue' />
                <div className='lg:w-full md:h-screen lg:h-full text-white mt-4 ml-4 mr-2'>
                    <div className="participated-events mt-4">
                        <p className="text-xl bg-white text-black font-medium p-3 lg:w-full rounded-xl "> These are some Upcoming Events</p>
                        <div className="event-main flex flex-wrap justify-evenly">
                            {UpcomingEvents.length!==0?
                                UpcomingEvents.map((ele) => {
                                return (
                                    <EventCard key={ele._id} dataToFetch={ele.eventName} eventName={ele.eventName.charAt(0).toUpperCase() + ele.eventName.slice(1)} date={ele.startDate} eventCategory={ele.eventType} eventImage={ele.eventImage} />
                                )

                            }):<LoadingScreen/>}
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default UpcomingEvent