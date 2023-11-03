import React from 'react'
import Navbar from './Navbar'

function Account() {
    return (
        <>
            <div className='flex h-full w-screen '>
                <Navbar title='account' />
                <div className='bg-gradient-to-tl from-green-400 to-indigo-900 w-full'>
                    <section className=" bg-gradient-to-tl from-green-400 to-indigo-900 w-full">
                        <div className="px-4 mx-auto">
                            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16">
                                <div className="px-6">
                                    <div className="flex flex-wrap justify-center">
                                        <div className="w-full px-4 flex justify-center">
                                            <div className="">
                                                <img alt="..." src={require('../assets/student-icon.png')} className="shadow-xl rounded-full h-auto align-middle border-none absolute mt-2 -ml-20 lg:-ml-16 w-24" />
                                            </div>
                                        </div>
                                        <div className="w-full px-4 text-center mt-20">
                                            <div className="flex justify-center py-4 lg:pt-4 pt-8">

                                                <div className="mr-4 p-3 text-center">
                                                    <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                                                        10
                                                    </span>
                                                    <span className="text-sm text-blueGray-400">Event Participated</span>
                                                </div>
                                                <div className="lg:mr-4 p-3 text-center">
                                                    <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                                                        89
                                                    </span>
                                                    <span className="text-sm text-blueGray-400">Event Joined</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-center mt-4">
                                        <h3 className="text-xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                                            Jenna Stones
                                        </h3>
                                        <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                                            <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
                                            Los Angeles, California
                                        </div>
                                        <div className="mb-2 text-blueGray-600">
                                            <i className="fas fa-university mr-2 text-lg text-blueGray-400"></i>
                                            Kamla Nehru Institute of Physical and Social Sciences
                                        </div>
                                    </div>
                                    <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                                        <div className="flex flex-wrap justify-center">
                                            <div className="w-full lg:w-9/12 px-4">
                                                <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                                                    An artist of considerable range, Jenna the name taken
                                                    by Melbourne-raised, Brooklyn-based Nick Murphy
                                                    writes, performs and records all of his own music,
                                                    giving it a warm, intimate feel with a solid groove
                                                    structure. An artist of considerable range.
                                                </p>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}

export default Account