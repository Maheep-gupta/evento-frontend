import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import EventCard from './EventCard'
import axios from 'axios';
import LoadingScreen from './LoadingScreen';

function ParticipatedEvents() {
    const userId = localStorage.getItem('id')
    const [participated, setParticipated] = useState([])

    useEffect(() => {
        axios.get(`https://wax-nostalgic-macaroni.glitch.me/api/event/participatedEvent/${userId}`)
            .then((response) => {;
                setParticipated(response.data.data)
                // setCodingEvents(response.data.eventData)
            })
            .catch((err) => {
                console.error(err);
            })

    }, [userId]);
    return (
        <>
            <div className='flex lg:h-full h-full w-full flex-col lg:flex-row '>

                <Navbar title='pe' />
                <div className='lg:w-full sm:h-screen lg:h-full text-white mt-4 ml-4 mr-2'>
                    <div className="participated-events mt-4">
                        <p className="text-xl bg-white text-black font-medium p-3 lg:w-full rounded-xl "> You have Participated in the following Events</p>
                        <div className="event-main flex flex-wrap justify-evenly">

                            {
                                participated.length!==0?
                                participated.length > 0 ?
                                
                                participated.map((ele) => {
                                    return (
                                    ele!==null?
                                    <EventCard key={ele._id} dataToFetch={ele.eventName} eventName={ele.eventName.charAt(0).toUpperCase() + ele.eventName.slice(1)} date={ele.startDate} eventCategory={ele.eventType} eventImage={ele.eventImage} registered={true} />:''
                                )
                            }):'You have not Particiapated In any Event':<LoadingScreen/>}
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}

export default ParticipatedEvents