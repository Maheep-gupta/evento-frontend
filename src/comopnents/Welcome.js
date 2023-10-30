import React from "react";

function Welcome() {
  return (
    <>
      <div className="text-center mb-10">
        <h1 className="font-bold text-3xl text-gray-900">Hey! Welcome to EventO</h1>
        <p> </p>

        <div className="mt-10">
          <div className="text-center">
            Lorem ipsum dolor sit consectetur adipisicing elit. Omnis ex
            natus sequi earum delectus placeat, eaque unde possimus, hic
            eligendi, vero molestiae dolores voluptatum esse?
          </div>
          <div className="text-center">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis ex
            natus sequi earum delectus placeat, eaque unde possimus, hic
            eligendi, vero molestiae dolores voluptatum esse?
          </div>

          <div className="my-5">
            <button className="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold my-4">
              REGISTER
            </button>
            <button className="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold">
              LOGIN
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Welcome;
