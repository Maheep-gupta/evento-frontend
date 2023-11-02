import React from "react";
import Navbar from "./Navbar";

function EventsDetail() {
  return (
    <div className="flex h-full w-screen ">
      <Navbar title="event" />
      <div className=" w-full text-white">


        <div class="relative z-20 flex items-center overflow-hidden bg-white white:bg-white-800 mt-5 mx-5 my-5 rounded-2xl">
          <div class="container relative flex px-6 py-16 mx-auto">
            <div class="relative z-20 flex flex-col sm:w-2/3 lg:w-2/5">
              <span class="w-20 h-2 mb-12 bg-gray-800 dark:bg-black"></span>
              <h1 class="flex flex-col text-6xl font-black-bold leading-none text-gray-800 uppercase font-bebas-neue sm:text-5xl dark:text-black">
                About the Event

              </h1>
              <p class="text-sm text-gray-700 sm:text-base dark:text-black mt-5">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae dolore eum voluptatibus facilis cupiditate, modi corrupti est maiores sunt natus quasi distinctio ratione nulla minima aspernatur ipsa inventore provident eveniet!
              </p>
              <div class="flex mt-8">
                <button
                  className=" block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-2 py-2 font-semibold my-2"
                  type="button"
                  data-ripple-light="true"
                >
                  REGISTER
                </button>
              </div>
            </div>
            <div class="relative hidden sm:block sm:w-1/3 lg:w-3/5">
              <img
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
