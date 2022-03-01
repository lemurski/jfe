import React, { useState, useEffect } from 'react';
import {FaHamburger} from "react-icons/fa";
import {TiShoppingCart} from "react-icons/ti"
import { Link } from "react-router-dom";


export default function Navbar(props) {
    
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
                <TiShoppingCart className="w-7 h-7 text-white dark:text-dark-gray m-auto" />
            )
        }
        else {
            return (
                <TiShoppingCart className="w-7 h-7 text-white dark:text-dark-gray m-auto" />
            )
        }
    }
    

    return (
        <div className="fixed top-0 flex z-30 bg-clip-padding backdrop-filter dark:bg-clip-padding dark:backdrop-filter bg-yellow-100 dark:bg-dark-gray dark:backdrop-blur-lg dark:bg-opacity-80 backdrop-blur-lg bg-opacity-40 items-center px-[5%] lg:px-[15%] py-3 left-0 h-[4.25rem] w-full ">
            <Link to="/table/1" className="flex dark:text-red-burger text-dark-gray transition-all cursor-pointer items-center hover:scale-105 ease-in-out duration-500">
                <FaHamburger className="w-10 h-10"/>
                <div className="ml-2 sm:flex hidden transition-all text-2xl font-semibold">Burger House</div>
            </Link>
            
            <Link to='/cart' className="w-12 h-12 relative ml-auto mr-0 hover:scale-105 transition-all bg-dark-gray text-white duration-300 rounded-lg flex dark:bg-red-burger">
                {renderSwitch()}
            <div className="absolute right-0 rounded-tl-lg rounded-br-lg text-lg text-center bg-white text-dark-gray w-5 h-5 flex leading-none bottom-0"><span className="m-auto">{props.cartlen}</span></div>
            </Link>
        </div>
    )
}