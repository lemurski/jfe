import React from 'react';
import {FaFacebookSquare, FaInstagram, FaPhoneAlt} from 'react-icons/fa';
import {HiMail} from 'react-icons/hi'
import Navbar_home from './Navbar_home';

import Map from './Map';



export default function Kontakt() {



    return (
        <div id='home' className="relative min-h-screen w-full pt-[68px] h-auto px-[5%] lg:px-[15%] transition-all duration-500 bg-dark-gray">
            <Navbar_home />
            
            <div className='mt-5 rounded-xl p-3 bg-light-gray'>
                    <h2 className='text-white font-semibold text-xl font-Coustard'>Tu nas znajdziesz</h2>
                    <div className="w-full mt-2 h-[450px]">
                        <Map />
                    </div>
            </div>

            <div className="mt-10 flex"><FaFacebookSquare className="w-10 h-10 text-red-burger" />
            <h3 className=" my-auto ml-3 text-xl text-gray-200 font-semibold">Wół Na Stół</h3>
            </div>
            <div className="mt-10 flex"><FaInstagram className="w-10 h-10 text-red-burger" />
            <h3 className=" my-auto ml-3 text-xl text-gray-200 font-semibold">@wolnastol</h3>
            </div>
            <div className="mt-10 flex"><HiMail className="w-10 h-10 text-red-burger" />
            <h3 className=" my-auto ml-3 text-xl text-gray-200 font-semibold">wolnastol@gmail.com</h3>
            </div>
            <div className="mt-10 flex"><FaPhoneAlt className="w-9 h-9 text-red-burger" />
            <h3 className=" my-auto ml-3 text-xl text-gray-200 font-semibold">657425870</h3>
            </div>

            
        </div>
    )
}