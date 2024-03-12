import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function ForgetPassword() {
  const [formData, setformData] = useState({
    collegeId:21038201000
  })
  const handleClick=() => {
    axios.post(
      "https://wax-nostalgic-macaroni.glitch.me/api/update/verifyEmail",
      formData, // Data object
      {
        headers: { "Content-Type": "application/json" }, // Headers
      }
    )
    .then((response) => {
      if (response.data.statusCode === 200) {
          localStorage.setItem('id', formData.collegeId);
          window.location.href = '/verify';
      } else {
        console.log("Error:", response.data.msg);
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });
  }
  return (
    <div>
      <div className="flex items-center justify-center p-12 h-screen">
            <div className="mx-auto w-full max-w-[550px] bg-white text-black p-9 rounded-xl">
          <h1 className="text-4xl font-medium">Reset password</h1>
          <p className="text-slate-500">Fill up the form to verify the email</p>

          <div className="my-10">
            <div className="flex flex-col space-y-5">
              <label for="collegeId">
                <p className="font-medium text-slate-700 pb-2">College ID</p>
                <input
                  id="collegeId"
                  name="collegeId"
                  type="collegeId"
                  className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                  placeholder="College ID"
                  value={formData.collegeId}
                  onChange={(e) => {
                    setformData({ ...formData, collegeId: e.target.value });
                }}
                />
              </label>

              <button onClick={handleClick} className="w-full py-3 font-medium text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg border-indigo-500 hover:shadow inline-flex space-x-2 items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z"
                  />
                </svg>

                <span>Verify the Email</span>
              </button>
              <p className="text-center">
                Not registered yet?{" "}
                <Link
                  to="/auth/signup/"
                  className="text-indigo-600 font-medium inline-flex space-x-1 items-center"
                >
                  <span>Register now </span>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </span>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgetPassword;
