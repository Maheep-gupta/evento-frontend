import React from 'react'
import { Link } from 'react-router-dom'
import AdminNav from './navComponents/AdminNav';
import UserNav from './navComponents/UserNav';

function Navbar({ title }) {
    const admin = localStorage.getItem('adminLogged')
    console.log(title);
    return (
        <>
            <div className="flex flex-col items-center w-48 h-screen overflow-hidden text-gray-700 bg-gray-100 rounded">
                <Link className="flex items-center w-full px-3 mt-3" to="/">
                    <div className=" h-10 fill-current">
                        <img src={require('../assets/evento-black.png')} alt='EventO'/>
                    </div>
                </Link>
                {console.log(admin)}
                {admin === 'true' ? <AdminNav title={title} /> : <UserNav title={title } />}
                {/* Account */}
                <Link className="flex items-center justify-center w-full h-16 mt-auto bg-gray-200 hover:bg-gray-300 text-black" to="#">
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