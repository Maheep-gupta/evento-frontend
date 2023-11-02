import React from 'react'
import Navbar from './Navbar'

function Account() {
    return (
        <>
            <div className='flex lg:h-full h-full w-screen flex-col lg:flex-row '>

                <Navbar title='account' />
                <div className='lg:w-full text-black mt-4 ml-4 mr-2'>
                    <section class="w-full">
                        <div class="px-4 mx-auto">
                            <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16">
                                <div class="px-6">
                                    <div class="flex flex-wrap justify-center">
                                        <div class="w-full px-4 flex justify-center">
                                            <div class="">
                                                <img alt="..." src={require('../assets/student-icon.png')} class="shadow-xl rounded-full h-auto align-middle border-none absolute mt-2 -ml-20 lg:-ml-16 w-24" />
                                            </div>
                                        </div>
                                        <div class="w-full px-4 text-center mt-20">
                                            <div class="flex justify-center py-4 lg:pt-4 pt-8">

                                                <div class="mr-4 p-3 text-center">
                                                    <span class="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                                                        10
                                                    </span>
                                                    <span class="text-sm text-blueGray-400">Event Participated</span>
                                                </div>
                                                <div class="lg:mr-4 p-3 text-center">
                                                    <span class="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                                                        89
                                                    </span>
                                                    <span class="text-sm text-blueGray-400">Event Joined</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="text-center mt-4">
                                        <h3 class="text-xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                                            Jenna Stones
                                        </h3>
                                        <div class="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                                            <i class="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
                                            Los Angeles, California
                                        </div>
                                        <div class="mb-2 text-blueGray-600">
                                            <i class="fas fa-university mr-2 text-lg text-blueGray-400"></i>
                                            Kamla Nehru Institute of Physical and Social Sciences
                                        </div>
                                    </div>
                                    <div class="mt-10 py-10 border-t border-blueGray-200 text-center">
                                        <div class="flex flex-wrap justify-center">
                                            <div class="w-full lg:w-9/12 px-4">
                                                <p class="mb-4 text-lg leading-relaxed text-blueGray-700">
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