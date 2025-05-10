import React from 'react';

const Navbar = () => {
    return (
        <>
            <nav class=" text-white pt-10 sm:px-20 flex justify-between items-center">
                <div class="flex items-center">
                    <h1 class="text-3xl font-bold text-red-500 mr-5">Fitness</h1>
                    
                </div>
                <div>
                    <ul class="list-none p-0 m-0 flex">
                        <li class="mr-2">
                            <a href="#" class="bg-red-500 text-white py-2 px-4 rounded-xl no-underline">Home</a>
                        </li>
                        <li class="mr-2">
                            <a href="#" class="text-gray-300 hover:text-white no-underline py-2 px-3">Service</a>
                        </li>
                        <li class="mr-2">
                            <a href="#" class="text-gray-300 hover:text-white no-underline py-2 px-3">Contact</a>
                        </li>
                        <li>
                            <a href="#" class="text-gray-300 hover:text-white no-underline py-2 px-3">About</a>
                        </li>
                    </ul>
                </div>
            </nav>

        </>
    );
};

export default Navbar;