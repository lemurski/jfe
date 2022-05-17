import React, { useState, useEffect } from 'react';
import {FaHamburger} from "react-icons/fa";
import {TiShoppingCart} from "react-icons/ti"
import { Link, useParams } from "react-router-dom";


export default function Navbar(props) {
    let {id} = useParams()

    let crt = '/cart/1'
    let home = '/delivery'

    if (id) {
        crt = ('/cart/' + id.toString())
        home = ('/table/' + id.toString())
    }

    

    return (
        <div className="fixed top-0 flex z-30 dark:bg-dark-gray dark:backdrop-blur-lg  items-center px-[5%] lg:px-[15%] py-3 left-0 h-[4.25rem] w-full ">
            <Link to={home} className="flex dark:text-red-burger text-dark-gray transition-all cursor-pointer items-center hover:scale-105 ease-in-out duration-500">
                <FaHamburger className="w-10 h-10"/>
                <div className="ml-2 sm:flex hidden transition-all text-2xl font-semibold">Stół Na Wół</div>
            </Link>
            
            <Link to={crt} className="w-12 h-12 relative ml-auto mr-0 hover:scale-105 transition-all bg-dark-gray text-white duration-300 rounded-lg flex dark:bg-red-burger">
            <TiShoppingCart className="w-7 h-7 text-white dark:text-dark-gray m-auto" />
            <div className="absolute right-0 rounded-tl-lg rounded-br-lg text-lg text-center bg-white text-dark-gray w-5 h-5 flex leading-none bottom-0"><span className="m-auto">{props.cartlen}</span></div>
            </Link>
        </div>
    )
}