import React, { useState, useEffect } from 'react';
import {GiBull, GiHamburgerMenu} from "react-icons/gi";
import {TiShoppingCart} from "react-icons/ti"
import { Link } from "react-router-dom";
import { AnimatePresence,motion } from 'framer-motion';
import {MdClear} from 'react-icons/md'




export default function Navbar_home(props) {
    
    const [sidebar,setsidebar] = useState(false)
    const changeSidebar = () => {
        sidebar ? setsidebar(false) : setsidebar(true)
    }

    const scroll = () => {
        var element = document.getElementById("o_nas");
        changeSidebar()
        const yOffset = -200;

        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

        window.scrollTo({top: y, behavior: 'smooth'});
    }

    const renderNavBar = () => {
        if (sidebar) {
            null
        }
        else {
            return (
                <div className="fixed top-0 flex z-30 items-center backdrop-blur-lg px-[5%] lg:px-[15%] py-3 left-0 h-[4.25rem] w-full ">
                <Link to="/" className="flex dark:text-red-burger text-dark-gray transition-all cursor-pointer items-center hover:scale-105 ease-in-out duration-500">
                    <GiBull className="w-10 h-10"/>
                </Link>
                <Link to="/" className="mx-auto text-red-burger sm:flex transition-all my-auto font-Coustard text-4xl font-bold">
                <div className="">Wół Na Stół</div>
                </Link>
                
                <GiHamburgerMenu onClick={changeSidebar} className="w-8 h-8 -mt-1 mr-0 text-red-burger"/>
                
                
                </div>
            )
        }
    }   

    const renderSidebar = () => {
        if (sidebar) {
            return (
                <motion.div animate={{opacity: 1}} initial={{opacity: 0}} exit={{opacity: 0}}>
                <div className="fixed flex flex-col text-white text-2xl font-semibold items-center pb-[4.25rem] top-0 left-0 bg-dark-gray z-50 w-screen h-screen">
                    <div onClick={changeSidebar} className="absolute top-8 right-4"> <MdClear className='h-8 text-red-burger w-8' /> </div>
                    <div className="flex my-auto h-1/2 text-2xl justify-evenly flex-col items-center">
                    <button className='text-white text-2xl font-semibold' onClick={scroll}>O nas</button>
                    <a href="/table/1">Menu</a>
                    <a href='/kontakt'>Kontakt</a>
                    <h2>Galeria</h2>
                    </div>
                </div>
                </motion.div>
            )
        }
        else {
            null
        }
    }


    return (
        <>
        {renderNavBar()}
        <AnimatePresence>
        {renderSidebar()}
        </AnimatePresence>
        </>
    )
}