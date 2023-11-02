import React from 'react'
import Navbar from './Navbar'
import EventCard from './EventCard'

function ParticipatedEvents() {
    return (
        <>
            <div className='flex lg:h-full h-full w-screen flex-col lg:flex-row '>

                <Navbar title='pe' />
                <div className='lg:w-full text-white mt-4 ml-4 mr-2'>
                    <div className="participated-events mt-4">
                        <p className="text-xl bg-white text-black font-medium p-3 lg:w-full rounded-xl "> You have Participated in the following Events</p>
                        <div className="event-main flex flex-wrap justify-evenly">

                            <EventCard />
                            <EventCard />
                            <EventCard />
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}

export default ParticipatedEvents