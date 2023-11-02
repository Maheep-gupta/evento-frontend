import React from "react";
import Navbar from "./Navbar";

function EventsDetail() {
  return (
    <div className="flex h-screen w-screen bg-gradient-to-tl from-green-400 to-indigo-900">
      <Navbar title="event" />
      <div className="bg-gradient-to-tl from-green-400 to-indigo-900 w-full text-white">
        EventDetail
      </div>
      {/* <span>Search</span> */}
    </div>
  );
}

export default EventsDetail;
