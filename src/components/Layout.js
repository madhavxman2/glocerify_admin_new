import React, { useState } from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Login from '../pages/Login'


const Layout = ({ children }) => {
    // const path= useLocation();

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // Function to handle login
    const handleLogin = () => {
        // Perform login actions, set isLoggedIn to true
        setIsLoggedIn(true);
    };

    // Function to handle logout
    const handleLogout = () => {
        // Perform logout actions, set isLoggedIn to false
        setIsLoggedIn(false);
    };
    console.log(isLoggedIn)
    return (
        <>
            {!isLoggedIn && <Login onLogin={handleLogin} />}
            {isLoggedIn &&
                <div className='flex flex-auto h-screen'>
                    <Sidebar />
                    <div className='grow'>
                        <Navbar handleLogout={handleLogout} />
                        <div className='m-5'>{children}</div>
                    </div>
                </div>
            }
        </>
    )
}

export default Layout;
