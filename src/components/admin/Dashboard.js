import React, { createRef, useEffect, useState } from 'react'
import Navbar from '../Navbar'
import { Navigate } from 'react-router-dom';
import axios from 'axios';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

function Dashboard() {
    const adminLogin = localStorage.getItem('adminLogged')
    const [dashboardData, setDashboardData] = useState('')
    const [completeEventTable, setcompleteEventTable] = useState([])
    const contentRef = createRef();
    useEffect(() => {
        axios.get("https://wax-nostalgic-macaroni.glitch.me/api/dashboard/stats")
            .then((response) => {
                console.log(response.data.data);
                setDashboardData(response.data.data)
                setcompleteEventTable(response.data.data.completeEventDetails)
            })
            .catch((err) => {
                console.error(err);
            })

    }, [adminLogin]);

    const handleDownload = () => {
        html2canvas(contentRef.current).then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF();
            pdf.addImage(imgData, 'PNG', 0, 0, 210, 297); // Adjust width and height as needed
            pdf.save('Student Stats.pdf');
        });
    };



    return (
        <>
            {
                adminLogin === 'true'
                    ?
                    <div className='flex flex-col lg:flex-row'>

                        <Navbar title='dashboard' admin={true} />
                        {/* @MOHIT write code in this div */}
                        <div className=' w-full h-full mt-6 text-white flex items-center flex-col  '>
                            <div className="flex w-full justify-center gap-6">
                                <div className="mb-12 flex flex-col gap-6 gap-x-6">
                                    <div className='gap-6 flex flex-col sm:flex-row'>

                                        <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md md:w-60 h-40 md:h-60 lg:w-96">
                                            <div className="bg-clip-border mx-6 rounded-xl overflow-hidden bg-gradient-to-tr from-blue-600 to-blue-400 text-white shadow-blue-500/40 shadow-lg absolute mt-4 grid h-12 w-12 place-items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-6 h-6 text-white">
                                                    <path d="M12 7.5a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z"></path>
                                                    <path fillRule="evenodd" d="M1.5 4.875C1.5 3.839 2.34 3 3.375 3h17.25c1.035 0 1.875.84 1.875 1.875v9.75c0 1.036-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 011.5 14.625v-9.75zM8.25 9.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM18.75 9a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75V9.75a.75.75 0 00-.75-.75h-.008zM4.5 9.75A.75.75 0 015.25 9h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H5.25a.75.75 0 01-.75-.75V9.75z" clipRule="evenodd"></path>
                                                    <path d="M2.25 18a.75.75 0 000 1.5c5.4 0 10.63.722 15.6 2.075 1.19.324 2.4-.558 2.4-1.82V18.75a.75.75 0 00-.75-.75H2.25z"></path>
                                                </svg>
                                            </div>
                                            <div className="p-4 text-right">
                                                <p className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600"> Event created today</p>
                                                <h4 className="block antialiased tracking-normal font-sans text-xl md:text-2xl font-semibold leading-snug text-blue-gray-900">{dashboardData.todayCreatedEvent}</h4>
                                            </div>
                                            <div className="border-t border-blue-gray-50 p-4">
                                                <p className="block antialiased font-sans text-base leading-relaxed font-normal text-blue-gray-600">
                                                    <strong className="text-green-500">+5%</strong>&nbsp;than last week
                                                </p>
                                            </div>
                                        </div>
                                        <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md md:w-60 h-40 md:h-60 lg:w-96">
                                            <div className="bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-pink-600 to-pink-400 text-white shadow-pink-500/40 shadow-lg absolute mt-4 grid h-12 w-12 place-items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-6 h-6 text-white">
                                                    <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd"></path>
                                                </svg>
                                            </div>
                                            <div className="p-4 text-right">
                                                <p className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">Total number of Students</p>
                                                <h4 className="block antialiased tracking-normal font-sans text-xl md:text-2xl font-semibold leading-snug text-blue-gray-900">{dashboardData.totalStudents} </h4>
                                            </div>
                                            <div className="border-t border-blue-gray-50 p-4">
                                                <p className="block antialiased font-sans text-base leading-relaxed font-normal text-blue-gray-600">
                                                    <strong className="text-green-500">+3%</strong>&nbsp;than last month
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='gap-6 flex flex-col sm:flex-row'>

                                        <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md md:w-60 h-40 md:h-60 lg:w-96">
                                            <div className="bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-green-600 to-green-400 text-white shadow-green-500/40 shadow-lg absolute mt-4 grid h-12 w-12 place-items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-6 h-6 text-white">
                                                    <path d="M6.25 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM3.25 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM19.75 7.5a.75.75 0 00-1.5 0v2.25H16a.75.75 0 000 1.5h2.25v2.25a.75.75 0 001.5 0v-2.25H22a.75.75 0 000-1.5h-2.25V7.5z"></path>
                                                </svg>
                                            </div>
                                            <div className="p-4 text-right">
                                                <p className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">Students onboarded <br />today</p>
                                                <h4 className="block antialiased tracking-normal font-sans text-xl md:text-2xl font-semibold leading-snug text-blue-gray-900">{dashboardData.todayJoinedStudents}</h4>
                                            </div>
                                            <div className="border-t border-blue-gray-50 p-4">
                                                <p className="block antialiased font-sans text-base leading-relaxed font-normal text-blue-gray-600">
                                                    <strong className="text-red-500">-2%</strong>&nbsp;than yesterday
                                                </p>
                                            </div>
                                        </div>
                                        <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md md:w-60 h-40 md:h-60 lg:w-96">
                                            <div className="bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-orange-600 to-orange-400 text-white shadow-orange-500/40 shadow-lg absolute mt-4 grid h-12 w-12 place-items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-6 h-6 text-white">
                                                    <path d="M18.375 2.25c-1.035 0-1.875.84-1.875 1.875v15.75c0 1.035.84 1.875 1.875 1.875h.75c1.035 0 1.875-.84 1.875-1.875V4.125c0-1.036-.84-1.875-1.875-1.875h-.75zM9.75 8.625c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-.75a1.875 1.875 0 01-1.875-1.875V8.625zM3 13.125c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v6.75c0 1.035-.84 1.875-1.875 1.875h-.75A1.875 1.875 0 013 19.875v-6.75z"></path>
                                                </svg>
                                            </div>
                                            <div className="p-4 text-right">
                                                <p className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">Total Events</p>
                                                <h4 className="block antialiased tracking-normal font-sans text-xl md:text-2xl font-semibold leading-snug text-blue-gray-900">{dashboardData.totalEventss}</h4>
                                            </div>
                                            <div className="border-t border-blue-gray-50 p-4">
                                                <p className="block antialiased font-sans text-base leading-relaxed font-normal text-blue-gray-600">
                                                    <strong className="text-green-500">+5%</strong>&nbsp;than yesterday
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-4 ml-6 mr-6 grid grid-cols-1 gap-6 xl:grid-cols-3">
                                <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md overflow-hidden xl:col-span-2">
                                    <div className="relative bg-clip-border rounded-xl overflow-hidden bg-transparent text-gray-700 shadow-none m-0 flex items-center justify-between p-6">
                                        <div>
                                            <h6 className="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-blue-gray-900 mb-1">Stats</h6>

                                        </div>
                                        <button aria-expanded="false" aria-haspopup="menu" id=":r5:" className="relative middle none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 bg-blue-600 disabled:shadow-none disabled:pointer-events-none h-8 max-h-[32px] p-4 pt-2 text-white rounded-lg text-xs text-blue-gray-500 hover:bg-blue-gray-500/10 active:bg-blue-gray-500/30 mr-6" type="button" onClick={handleDownload}>
                                            Download
                                        </button>
                                    </div>
                                    <div className="p-6 overflow-x-scroll px-0 pt-0 pb-2 ml-4">
                                        <table className="w-full table-auto" ref={contentRef}>
                                            <thead>
                                                <tr>
                                                    <th className="border-b border-blue-gray-50 py-3 px-6 text-left">
                                                        <p className="block antialiased font-sans text-[11px] font-medium uppercase text-blue-gray-400">Event Names</p>
                                                    </th>

                                                    <th className="border-b border-blue-gray-50 py-3 px-6 text-left">
                                                        <p className="block antialiased font-sans text-[11px] font-medium uppercase text-blue-gray-400">Student Participated</p>
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>

                                                {completeEventTable.map((event, index) => (
                                                    <tr key={index}>
                                                        <td className="py-3 px-5 border-b border-blue-gray-50">
                                                            <div className="flex items-center gap-4">
                                                                <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-bold">{event.name}</p>
                                                            </div>
                                                        </td>
                                                        <td className="py-3 px-5 border-b border-blue-gray-50">
                                                            <div className="w-10/12">
                                                                <p className="antialiased font-sans mb-1 block text-xs font-medium text-blue-gray-600">{event.totalParticipants}</p>

                                                            </div>
                                                        </td>
                                                    </tr>
                                                ))}


                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    :
                    <Navigate to='/' />
            }

        </>
    )
}

export default Dashboard