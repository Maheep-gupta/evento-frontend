import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import axios from "axios";
import EventJSON from '../utils/EventJSON'
import { useParams } from "react-router-dom";


function EventsDetail() {
  const { id } = useParams()
  console.log(id);

  const [Events, setEvents] = useState(EventJSON)
  const [eventDetails, setEventDetails] = useState(Events)


  useEffect(() => {
    axios.get("https://college-event-management-backend-production-1e34.up.railway.app/api/event/getEvent")
      .then((response) => {
        setEvents(response.data.eventData)
      })
      .catch((err) => {
        console.error(err);
      })

  }, []);
  useEffect(() => {
    console.log("Events",Events);
    if (Events.length > 2) {

      const EventDeatils = Events.find((ele) => {
        return ele.eventName === id
      })
      setEventDetails(EventDeatils)
    }

  }, [Events])
  console.log("Event Details", eventDetails);
  return (
    <div className="flex h-full  ">
      <Navbar title="event" />
      <div className=" w-full text-black">


        <div className="relative z-20 flex items-center overflow-hidden bg-white white:bg-white-800 mt-5 mx-5 my-5 rounded-2xl">
          <div className="container relative flex px-6 py-16 mx-auto">
            <div className="relative z-20 flex flex-col sm:w-2/3 lg:w-2/5">
              <span className="w-20 h-2 mb-4 bg-gray-800 dark:bg-black"></span>
              <h1 className="text-l mb-12 font-semibold leading-none text-gray-800 uppercase font-bebas-neue sm:text-l dark:text-black">
                About the Event

              </h1>
              <h1 className="flex flex-col text-6xl font-black-bold leading-none text-gray-800 uppercase font-bebas-neue sm:text-5xl dark:text-black">
                {eventDetails.eventName}

              </h1>

              <div class="pt-5">
                <details class="group">
                  <summary class="flex ring-2 ring-gray-300 rounded-xl p-2 mr-6 justify-between items-center font-medium cursor-pointer list-none">
                    <span className="text-l"> About</span>
                    <span class="transition group-open:rotate-180">
                      <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </summary>
                  <p class="text-neutral-600 mt-3 group-open:animate-fadeIn">
                    {eventDetails.eventDetail}
                  </p>
                </details>
              </div>
              <details class="group pt-5">
                <summary class="flex ring-2 ring-gray-300 rounded-xl p-2 mr-6 justify-between items-center font-medium cursor-pointer list-none">
                  <span className="text-l"> Start Date</span>
                  <span class="transition group-open:rotate-180">
                    <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </summary>
                <p class="text-neutral-600 mt-3 group-open:animate-fadeIn">
                  {eventDetails.startDate}
                </p>
              </details>
              <details class="group pt-5">
                <summary class="flex ring-2 ring-gray-300 rounded-xl p-2 mr-6 justify-between items-center font-medium cursor-pointer list-none">
                  <span className="text-l"> Venue</span>
                  <span class="transition group-open:rotate-180">
                    <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </summary>
                <p class="text-neutral-600 mt-3 group-open:animate-fadeIn">
                  College Campus
                </p>
              </details>
              <details class="group pt-5">
                <summary class="flex ring-2 ring-gray-300 rounded-xl p-2 mr-6 justify-between items-center font-medium cursor-pointer list-none">
                  <span className="text-l"> Event Coordinators</span>
                  <span class="transition group-open:rotate-180">
                    <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </summary>
                <p class="text-neutral-600 mt-3 group-open:animate-fadeIn">
                  {eventDetails.eventCoordinators}
                </p>
              </details>

              {/* <div className="flex gap-6">
                <h3 className="text-md md:text-xl font-semibold text-black mt-5">
                  Timing
                </h3>
                <span className="mt-2 text-black">{eventDetails.startDate}</span>
              </div>
              <div className="flex gap-6">
                <h3 className="text-md md:text-xl font-semibold text-black">
                  Venue
                </h3>
                <span className="mt-2 text-black">College Campus</span>
              </div>
              <div className="flex gap-6">
                <h3 className="text-md md:text-xl font-semibold text-black">
                  Event Coordinators
                </h3>
                <span className="mt-2 text-black">{eventDetails.eventCoordinators}</span>

              </div> */}


              <div className="flex mt-8">
                <button
                  className=" block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-900 focus:bg-indigo-900 text-black rounded-lg px-2 py-2 font-semibold my-2"
                  type="button"
                  data-ripple-light="true"
                >
                  REGISTER
                </button>
              </div>


            </div>
            <div className="relative hidden sm:block sm:w-1/3 lg:w-3/5 ">
              <img className="rounded-xl "
                src="https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1470&amp;q=80"
                alt="ui/ux review check"
              />
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default EventsDetail;
