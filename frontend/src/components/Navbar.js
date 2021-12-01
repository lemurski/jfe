import React, { useState, useEffect } from 'react';
import {FaLaptopMedical} from "react-icons/fa";
import {BsSun, BsMoon} from "react-icons/bs"


export default function Navbar() {
    
    const [DarkMode,ChangeDarkMode] = useState('dark');

    function handleDarkModeChange() {
        var element = document.getElementById('main')

        if (DarkMode == 'dark') {
            element.classList.remove('dark');
            element.classList.add('light')
            ChangeDarkMode('light')
        }
        else {
            element.classList.remove('light');
            element.classList.add('dark')
            ChangeDarkMode('dark')
        }

        
    }

    function renderSwitch() {
        if (DarkMode == 'dark') {
            return (
                <BsSun className="w-7 h-7 text-white dark:text-dark-gray m-auto" />
            )
        }
        else {
            return (
                <BsMoon className="w-7 h-7 text-white dark:text-dark-gray m-auto" />
            )
        }
    }
    

    return (
        <div className="fixed top-0 flex z-30 bg-clip-padding backdrop-filter dark:bg-clip-padding dark:backdrop-filter bg-yellow-100 dark:bg-gray-800 dark:backdrop-blur-lg dark:bg-opacity-40 backdrop-blur-lg bg-opacity-40 items-center px-[5%] lg:px-[15%] py-3 left-0 h-[4.25rem] w-full ">
            <a href="/#home" className="flex dark:text-gray-200 text-dark-gray transition-all cursor-pointer items-center hover:scale-105 ease-in-out duration-500">
                <FaLaptopMedical className="w-10 h-10"/>
                <div className="ml-2 sm:flex hidden transition-all text-2xl font-semibold">Kacper Lemański</div>
            </a>
            
            <div className="h-full flex w-auto text-gray-800 dark:text-gray-400 text-sm sm:text-base items-center my-auto ml-8 mr-auto   ">
                <a href="/#about_me" className="hover:scale-105 transition-all font-semibold">About Me</a>
                <a href="/#contact" className="hover:scale-105 ml-8 transition-all font-semibold">Contact</a>
            </div>
            <div onClick={handleDarkModeChange} className="w-12 h-12 hover:scale-105 transition-all bg-dark-gray duration-300 rounded-lg flex dark:bg-yellow-200">
                {renderSwitch()}
            </div>
        </div>
    )
}