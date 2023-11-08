import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import AdminNav from './navComponents/AdminNav';
import UserNav from './navComponents/UserNav';

function Navbar({ title }) {
    const [mobileNav, setMobileNav] = useState(false)
    const admin = localStorage.getItem('adminLogged')
    function toggleView() {
        if (mobileNav) {
            setMobileNav(false)
        } else {
            setMobileNav(true)
        }
    }
    return (
        <>
            <div className="ham flex justify-evenly lg:hidden z-20 m-2" >
                <div className='ham-icon ' onClick={toggleView}>
                    {
                        mobileNav === false ? <svg xmlns="http://www.w3.org/2000/svg" height="3em" color='grey' viewBox="0 0 448 512" style={{ fill: '#fff' }}><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
                        </svg> : <svg xmlns="http://www.w3.org/2000/svg" height="3em" viewBox="0 0 384 512" style={{ fill: '#fff' }}><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" /></svg>
                    }
                </div>
                <div className='flex justify-center'>
                    <Link className="flex items-center w-1/3 px-3" to="/">
                        <div className=" fill-current">
                            <img src={require('../assets/evento.png')} alt='EventO' />
                        </div>
                    </Link>
                </div>
            </div>
            <div className={`flex lg:h-[100vh] h-[100vh/2] ml-4 flex-col gap-y-6 items-center w-48 overflow-hidden text-gray-700 bg-gray-100 rounded ${mobileNav === true ? 'block absolute z-10 mt-[3rem] ml-0 h-1/2 animate-fade-right' : 'hidden'} lg:flex lg:sticky top-0 lg:h`} >
                <Link className="flex items-center w-full px-3 mt-3" to="/">
                    <div className=" h-10 fill-current">
                        <img src={require('../assets/evento-black.png')} alt='EventO' />
                    </div>
                </Link>
                {admin === 'true' ? <AdminNav title={title} /> : <UserNav title={title} />}
                {/* Account */}
                <Link className="flex items-center justify-center w-full h-16 mt-auto bg-gray-200 hover:bg-gray-300 text-black" to="/user/account">
                    <svg className="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="ml-2 text-sm font-medium">Account</span>
                </Link>
            </div>
        </>
    )
}

export default Navbar