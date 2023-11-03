import React from "react";
import Navbar from "../Navbar";
import { Navigate } from "react-router-dom";

function CreateEvent() {
  const adminLogin = localStorage.getItem("adminLogged");

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
            <div className="flex items-center justify-center p-12">
              <div className="mx-auto w-full max-w-[550px] bg-white text-black p-9 rounded-xl">
                <form action=" " method="POST">
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
                    />
                  </div>
                  <div className="mb-5">
                    <label
                      for="dropdown"
                      className="mb-3 block text-base font-medium text-[#07074D]"
                    >
                      Event Type
                    </label>
                    <select className="w-full outline-none focus:outline-none p-2 bg-white rounded-md border border-[#e0e0e0]">
                      <option value="coding">Coding</option>
                      <option value="sport">Sport</option>
                      <option value="culture">Culture</option>
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
                    />
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
                      className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
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
                    ></textarea>
                  </div>
                  <div>
                    <button className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none">
                      Create
                    </button>
                  </div>
                </form>
              </div>
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
