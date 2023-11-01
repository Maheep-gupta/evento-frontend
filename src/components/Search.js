import React from 'react'
import Navbar from './Navbar'

function Search() {
    return (
        <>
            <div className='flex'>
                <Navbar title='search' />
                <div className='bg-gradient-to-tl from-green-400 to-indigo-900 w-full text-white'>Search</div>
                {/* <span>Search</span> */}
            </div>
        </>
    )
}

export default Search