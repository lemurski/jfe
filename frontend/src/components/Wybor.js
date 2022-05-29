import React, { useState, useEffect } from 'react';
import Navbar_home from './Navbar_home';
import {RiRestaurant2Fill} from 'react-icons/ri'
import { FaRegMoneyBillAlt } from 'react-icons/fa'
import {RiEBike2Line} from 'react-icons/ri'
import { Link, Navigate, useNavigate } from "react-router-dom";

export default function Wybor() {

    const [stolik,setStolik] = useState(false)
    const [number,setNumber] = useState('Na wynos')

    const redirect = () => {
        let n = number.toString()
        n = number.replace(' ','_')
        n = n.toLowerCase()
        window.location.href = '/table/' + n;
    }

    const rendermain = () => {
        return (
            <>
            <Link to='/table/delivery' className="w-full flex flex-col p-3 bg-light-gray h-48 shadow-lg rounded-md ">
                    <div className="flex flex-col my-auto">
                    <RiEBike2Line className="w-16 h-16 text-red-burger mx-auto" />
                    <div className="text-2xl mt-5 mx-auto text-center text-gray-100 font-semibold">Dostawa do domu</div>
                    </div>
                </Link>
                <div onClick={() => {setStolik(true)}} className="w-full cursor-pointer flex flex-col mt-6 shadow-lg p-3 h-48 rounded-md bg-light-gray">
                    <div className="flex flex-col my-auto">
                    <RiRestaurant2Fill className="w-16 text-red-burger h-16 mx-auto" />
                    <div className="text-2xl mt-5 mx-auto text-center text-gray-100 font-semibold">Na miejscu lub na wynos</div>
                    </div>
                </div>
                </>
        )
    }

    const rendertable = () => {
        return (
            <>
                    <label htmlFor='text' className='text-[0.93rem] text-white ml-[2px]'>Numer stolika</label>
                    <select onChange={handletable} autoComplete='off' className="bg-payment-gray mt-1 block shadow-lg w-full text-gray-400 transition-all rounded-md border-gray-600 p-3 focus:border-gray-300 focus:ring focus:ring-red-burger focus:ring-opacity-50 ">
                        <option>Na wynos</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                    </select>
                    <button onClick={redirect} className='bg-red-burger shadow-red-burger/50 shadow-neon-shadow py-[0.7rem] mt-8 mx-auto font-semibold w-[130px] rounded-md text-white'>Dalej</button>
                    <button onClick={() => {setStolik(false)}} className='font-semibold p-2 text-red-burger mx-auto mt-6'>Cofnij</button>
            </>
            
        )
    }

    const handletable = (e) => {
        setNumber(e.target.value)
    }

    return (
        <div id='home' className="relative min-h-screen w-full flex flex-col h-auto px-[5%] lg:px-[15%] transition-all duration-500 bg-dark-gray">
        <Navbar_home />
        <div className="h-full pt-[68px] flex flex-col">
        <div className="flex m-auto flex-col w-full">
            {stolik ? rendertable() : rendermain()}
                
            </div>
            </div>
        </div>
    )
}