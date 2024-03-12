import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import EventCard from "./EventCard";
import axios from "axios";
import SkeletonCard from "./SkeletonCard";

function EventsHome() {
  const [Events, setEvents] = useState([])
  const [codingEvents, setCodingEvents] = useState([])
  const [popularEvents, setPopularEvents] = useState([])
  const [sportsEvents, setSportsEvents] = useState([])
  const [culturalEvents, setCulturalEvents] = useState([])


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
    const CodingEvents = Events.filter((ele) => {
      return ele.eventType === 'Coding' && ele.eventStatus !== 'Completed'
    })
    setCodingEvents(CodingEvents)
  }, [Events])

  useEffect(() => {
    const SportsEvents = Events.filter((ele) => {
      return ele.eventType === 'Sport' && ele.eventStatus !== 'Completed'
    })
    setSportsEvents(SportsEvents)
  }, [Events])
  useEffect(() => {
    const PopularEvents = Events.filter((ele) => {
      return ele.participatedStudents > 0
    })
    setPopularEvents(PopularEvents)
  }, [Events])
  useEffect(() => {
    const CulturalEvents = Events.filter((ele) => {
      return ele.eventType === 'Culture' && ele.eventStatus !== 'Completed'
    })
    setCulturalEvents(CulturalEvents)
  }, [Events])


  return (
    <>
      <div className="flex h-full flex-col lg:flex-row  ">
        <Navbar title="home" />
        <div className="lg:w-screen text-white mt-4 ml-4 mr-2">
          <div className="popular-events">
            <p className="flex text-4xl bg-white text-black font-medium p-5 lg:w-full rounded-xl "><svg className="pr-2" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><path d="M153.6 29.9l16-21.3C173.6 3.2 180 0 186.7 0C198.4 0 208 9.6 208 21.3V43.5c0 13.1 5.4 25.7 14.9 34.7L307.6 159C356.4 205.6 384 270.2 384 337.7C384 434 306 512 209.7 512H192C86 512 0 426 0 320v-3.8c0-48.8 19.4-95.6 53.9-130.1l3.5-3.5c4.2-4.2 10-6.6 16-6.6C85.9 176 96 186.1 96 198.6V288c0 35.3 28.7 64 64 64s64-28.7 64-64v-3.9c0-18-7.2-35.3-19.9-48l-38.6-38.6c-24-24-37.5-56.7-37.5-90.7c0-27.7 9-54.8 25.6-76.9z" /></svg> Popular Events</p>
            <div className="event-main flex flex-wrap justify-evenly">
              {popularEvents.length !== 0 ?
                popularEvents.map((ele) => {
                  return (

                    <EventCard key={ele._id} dataToFetch={ele.eventName} eventName={ele.eventName.charAt(0).toUpperCase() + ele.eventName.slice(1)} date={ele.startDate} eventCategory={ele.eventType} eventImage={ele.eventImage} />
                  )
                })
                :
                <div className="flex w-full flex-wrap justify-evenly" >
                  <SkeletonCard />
                  <SkeletonCard />
                  <SkeletonCard />
                  <SkeletonCard />
                  <SkeletonCard />
                </div>}

            </div>
          </div>
          <div className="coding-events mt-4">
            <p className=" flex text-4xl bg-white text-black font-medium p-5 lg:w-full rounded-xl "><svg className="pr-2" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512"><path d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z" /></svg> Coding Events</p>
            <div className="event-main flex flex-wrap justify-evenly">

              {codingEvents.length !==0?
                codingEvents.map((ele) => {
                return (

                  <EventCard key={ele._id} dataToFetch={ele.eventName} eventName={ele.eventName.charAt(0).toUpperCase() + ele.eventName.slice(1)} date={ele.startDate} eventCategory={ele.eventType} eventImage={ele.eventImage} />
                )
                }): <div className="flex w-full flex-wrap justify-evenly" >
                <SkeletonCard />
                <SkeletonCard />
                <SkeletonCard />
                <SkeletonCard />
                <SkeletonCard />
              </div>
              }
            </div>
          </div>
          <div className="cultural-events mt-4">
            <p className=" flex text-4xl bg-white text-black font-medium p-5 lg:w-full rounded-xl "><svg className="pr-2" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512"><path d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z" /></svg> Cultural Events</p>
            <div className="event-main flex flex-wrap justify-evenly">
              {
                culturalEvents.length!==0?
                culturalEvents.map((ele) => {
                  return (

                    <EventCard key={ele._id} dataToFetch={ele.eventName} eventName={ele.eventName.charAt(0).toUpperCase() + ele.eventName.slice(1)} date={ele.startDate} eventCategory={ele.eventType} eventImage={ele.eventImage} />
                  )
                }): <div className="flex w-full flex-wrap justify-evenly">
                <SkeletonCard />
                <SkeletonCard />
                <SkeletonCard />
                <SkeletonCard />
                <SkeletonCard />
              </div>
              }
            </div>
          </div>
          <div className="sports-events mt-4">
            <p className=" flex text-4xl bg-white text-black font-medium p-5 lg:w-full rounded-xl "><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512" className="pr-2 text-indigo-700"><path d="M86.6 64l85.2 85.2C194.5 121.7 208 86.4 208 48c0-14.7-2-28.9-5.7-42.4C158.6 15 119 35.5 86.6 64zM64 86.6C35.5 119 15 158.6 5.6 202.3C19.1 206 33.3 208 48 208c38.4 0 73.7-13.5 101.3-36.1L64 86.6zM256 0c-7.3 0-14.6 .3-21.8 .9C238 16 240 31.8 240 48c0 47.3-17.1 90.5-45.4 124L256 233.4 425.4 64C380.2 24.2 320.9 0 256 0zM48 240c-16.2 0-32-2-47.1-5.8C.3 241.4 0 248.7 0 256c0 64.9 24.2 124.2 64 169.4L233.4 256 172 194.6C138.5 222.9 95.3 240 48 240zm463.1 37.8c.6-7.2 .9-14.5 .9-21.8c0-64.9-24.2-124.2-64-169.4L278.6 256 340 317.4c33.4-28.3 76.7-45.4 124-45.4c16.2 0 32 2 47.1 5.8zm-4.7 31.9C492.9 306 478.7 304 464 304c-38.4 0-73.7 13.5-101.3 36.1L448 425.4c28.5-32.3 49.1-71.9 58.4-115.7zM340.1 362.7C317.5 390.3 304 425.6 304 464c0 14.7 2 28.9 5.7 42.4C353.4 497 393 476.5 425.4 448l-85.2-85.2zM317.4 340L256 278.6 86.6 448c45.1 39.8 104.4 64 169.4 64c7.3 0 14.6-.3 21.8-.9C274 496 272 480.2 272 464c0-47.3 17.1-90.5 45.4-124z" /></svg> Sports Events</p>
            <div className="event-main flex flex-wrap justify-evenly">

              {sportsEvents.length!==0?
                sportsEvents.map((ele) => {
                return (

                  <EventCard key={ele._id} dataToFetch={ele.eventName} eventName={ele.eventName.charAt(0).toUpperCase() + ele.eventName.slice(1)} date={ele.startDate} eventCategory={ele.eventType} eventImage={ele.eventImage} />
                )
                }) :
                <div className="flex w-full flex-wrap justify-evenly">
                <SkeletonCard />
                <SkeletonCard />
                <SkeletonCard />
                <SkeletonCard />
                <SkeletonCard />
              </div>
            }
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default EventsHome;
