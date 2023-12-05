import React, { useState } from "react";
import Navbar from "../Navbar";
import { Navigate } from "react-router-dom";
import axios from "axios";
import Alerts from "../Alerts";

function CreateEvent() {
  const adminLogin = localStorage.getItem("adminLogged");
  const [createEvent, setCreateEvent] = useState({
    eventName: '',
    eventType: 'Coding',
    startDate: '',
    endDate: '',
    eventdetails: '',
    eventStatus: 'Upcoming',
    eventCoordinators: '',
    participatedStudents: 0,
    eventImage: ''
  })
  const [ActivateAlert, setActivateAlert] = useState(false)
  const [alertMsg, setAlertMsg] = useState({
    statusCode: '',
    msg: ''
  })
  async function uploadProfilePic(picture) {
    const data = new FormData();
    data.append("file", picture)
    data.append("upload_preset", "evento")
    await axios.post("https://api.cloudinary.com/v1_1/dedumcwij/image/upload", data)
      .then(res => {
        // console.log("Image url", res.data.secure_url)
        setCreateEvent({ ...createEvent, eventImage:  res.data.secure_url})
        console.log("Image uploaded successfully!");
      }).catch(err => {
        console.error(err);

      })
  }

  async function handleCreateEvent() {
    console.log(createEvent);
    if (createEvent.eventName === '' || createEvent.startDate === '' || createEvent.endDate === '' || createEvent.eventdetails === '' || createEvent.eventCoordinators === '') {
      alert("Please fill all the Details")
    } else {
      axios({
        method: "post",
        url: "https://wax-nostalgic-macaroni.glitch.me/api/event/createEvent",
        data: createEvent,
        headers: { "Content-Type": "application/json" },
      })
        .then(function (response) {
          //handle success
          // console.log(response.data);
          if (response.data.statusCode === 200) {
            // console.log("200", response.data.statusCode)
            setActivateAlert(true)
            setAlertMsg({ statusCode: response.data.statusCode, msg: response.data.message });
            // setCreateEvent("")
          } else {
            setActivateAlert(true)
            // console.log("alert msg", alertMsg);
            setAlertMsg({ statusCode: response.data.statusCode, msg: response.data.message });
          }
        })
        .catch(function (response) {
          //handle error
          console.error(response);
        });
    }
  }

  return (
    <>
      {adminLogin === "true" ? (
        <div className="flex h-full flex-col lg:flex-row  ">
          <Navbar title="createEvent" admin={true} />
          <div className="lg:w-full text-white mt-4 ml-4 mr-2">
            <p className="text-xl bg-white text-black font-medium p-3 lg:w-full rounded-xl ">
              {" "}
              Create Event
            </p>
            <div className="flex items-center justify-center p-12 pb-0">
              <div className="mx-auto w-full max-w-[550px] bg-white text-black p-9 rounded-xl">

                <div className="mb-5">
                  <label
                    for="name"
                    className="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Event Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Event Name"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    value={createEvent.eventName} onChange={(e) => { setCreateEvent({ ...createEvent, eventName: e.target.value }) }}
                  />
                </div>
                <div className="mb-5">
                  <label
                    for="dropdown"
                    className="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Event Type
                  </label>
                  <select className="w-full outline-none focus:outline-none p-2 bg-white rounded-md border border-[#e0e0e0]" value={createEvent.eventType} onChange={(e) => { setCreateEvent({ ...createEvent, eventType: e.target.value }) }}
                  >
                    <option value="Coding">Coding</option>
                    <option value="Sport">Sport</option>
                    <option value="Culture">Culture</option>
                  </select>
                </div>
                <div className="mb-5">
                  <label
                    for="dropdown"
                    className="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Event Status
                  </label>
                  <select className="w-full outline-none focus:outline-none p-2 bg-white rounded-md border border-[#e0e0e0]" value={createEvent.eventStatus} onChange={(e) => { setCreateEvent({ ...createEvent, eventStatus: e.target.value }) }}
                  >
                    <option value="Upcoming" title="Going to start in less than a month">Upcoming</option>
                  </select>
                </div>
                <div className="mb-5">
                  <label
                    for="start-date"
                    className="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Start Date
                  </label>
                  <input
                    type="date"
                    name="text"
                    id="start-date"
                    placeholder="D/M"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    value={createEvent.startDate} onChange={(e) => { setCreateEvent({ ...createEvent, startDate: e.target.value }) }}
                  />
                </div>
                <div className="mb-5">
                  <label
                    for="start-date"
                    className="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    End Date
                  </label>
                  <input
                    type="date"
                    name="text"
                    id="End-date"
                    placeholder="D/M"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    value={createEvent.endDate} onChange={(e) => { setCreateEvent({ ...createEvent, endDate: e.target.value }) }}
                  />
                </div>
                <div className="mb-5">
                  <label class="w-full flex flex-col items-center px-4 py-6 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue hover:text-blue-600">
                    <svg class="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                    </svg>
                    <span class="mt-2 text-base leading-normal">Select image for event</span>
                    <input type='file' accept=".jpg, .jpeg, .png" class="hidden" onChange={(e) => { uploadProfilePic(e.target.files[0]) }}  />
                  </label>
                </div>
                <div className="mb-5">
                  <label
                    for="message"
                    className="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Event's Detail
                  </label>
                  <textarea
                    rows="4"
                    name="message"
                    id="message"
                    placeholder="Type Event Detail"
                    className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" value={createEvent.eventdetails} onChange={(e) => { setCreateEvent({ ...createEvent, eventdetails: e.target.value }) }}
                  ></textarea>
                </div>
                <div className="mb-5">
                  <label
                    for="message"
                    className="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Event's Coordinator's Details
                  </label>
                  <textarea
                    rows="4"
                    name="message"
                    id="message"
                    placeholder="Coordinator's Name and Contact"
                    className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    value={createEvent.eventCoordinators} onChange={(e) => { setCreateEvent({ ...createEvent, eventCoordinators: e.target.value }) }}

                  ></textarea>
                </div>
                <div>
                  <button className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none" onClick={handleCreateEvent}>
                    Create
                  </button>
                </div>

              </div>
            </div>
            <div className="pt-4">
              {ActivateAlert === true ? alertMsg.statusCode === 200 ? <Alerts msg={alertMsg.msg} type={200} /> : <Alerts msg={alertMsg.msg} type={400} /> : ''}
            </div>
          </div>
        </div>
      ) : (
        <Navigate to="/auth/login" />
      )}
    </>
  );
}

export default CreateEvent;
