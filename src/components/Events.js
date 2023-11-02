import React from "react";
import Navbar from "./Navbar";
import EventCard from "./EventCard";

function Events() {
  return (
    <>

      <div className="flex h-full w-screen bg-gradient-to-tl from-green-400 to-indigo-900 flex-col lg:flex-row  ">
        <Navbar title="home" />
        <div className="lg:w-full text-white mt-4 ml-4 mr-2">
          <div className="popular-events">
            <p className="text-4xl bg-white text-black font-medium p-5 lg:w-full rounded-xl "> Popular Events</p>
            <div className="event-main flex flex-wrap justify-evenly">

              <EventCard />
              <EventCard />
              <EventCard />
            </div>
          </div>
          <div className="coding-events mt-4">
            <p className="text-4xl bg-white text-black font-medium p-5 lg:w-full rounded-xl "> Coding Events</p>
            <div className="event-main flex flex-wrap justify-evenly">

              <EventCard />
              <EventCard />
              <EventCard />
            </div>
          </div>
          <div className="sports-events mt-4">
            <p className="text-4xl bg-white text-black font-medium p-5 lg:w-full rounded-xl "> Sports Events</p>
            <div className="event-main flex flex-wrap justify-evenly">

              <EventCard />
              <EventCard />
              <EventCard />
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default Events;
