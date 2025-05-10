import React from 'react';

const Navbar = () => {
    return (
        <>
            <div className="navbar shadow-sm justify-between">
                <div className="flex-1">
                    <a className="btn btn-ghost text-xl">Fitness</a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1 text-2xl font-medium">
                        <li>Home</li>
                        <li>Service</li>
                        <li>Contact</li>
                        <li>About</li>
                    </ul>

                </div>
            </div>
            
        </>
    );
};

export default Navbar;