import React from 'react'
import Navbar from './Navbar'

function ParticipatedEvents() {
    return (
        <>
            <div className='flex'>

                <Navbar title='pe' />
                <div className='bg-gradient-to-tl from-green-400 to-indigo-900 w-full text-white'>                <span>Participated Event</span>
                </div>

            </div>

        </>
    )
}

export default ParticipatedEvents