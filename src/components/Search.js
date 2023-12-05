import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import EventCard from './EventCard'
import axios from 'axios';
import EventJSON from '../utils/EventJSON'


function Search() {
    const [Events, setEvents] = useState(EventJSON)
    const [search, setSearch] = useState('')
    
    useEffect(() => {
        axios.get("https://wax-nostalgic-macaroni.glitch.me/api/event/getEvent")
            .then((response) => {
                setEvents(response.data.eventData)
            })
            .catch((err) => {
                console.error(err);
            })

    }, []);
    

    return (
        <>
            <div className='flex lg:h-full h-full w-full flex-col lg:flex-row '>

                <Navbar title='search' />
                <div className='lg:w-screen text-white mt-4 ml-4 mr-2'>
                    <link rel="stylesheet" href="https://unpkg.com/flowbite@1.4.4/dist/flowbite.min.css" />

                    <div className="max-w-2xl mx-auto">

                        <form>
                            <label for="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search</label>
                            <div className="relative">
                                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                    <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                                </div>
                                <input type="search" id="default-search" className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Events ,Tags,..." required value={search} onChange={(e)=>{setSearch(e.target.value)}}/>
                            </div>
                        </form>

                        <div className="mt-5"><div className="participated-events mt-4">
                            <div className="event-main flex flex-wrap justify-evenly">
                                {
                                    search.length>0?

                                    Events.map((ele)=>{
                                        return (
                                            
    
                                            ele.eventName.toLowerCase().includes(search) || ele.eventType.toLowerCase().includes(search) ?
                                            <EventCard key={ele._id} dataToFetch={ele.eventName} eventName={ele.eventName.charAt(0).toUpperCase() + ele.eventName.slice(1)} date={ele.startDate} eventCategory={ele.eventType} eventImage={ele.eventImage} />
                                                :
                                                ''
                                        )
                                    }):''
                                }
                            </div>
                        </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Search