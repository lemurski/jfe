import {FaFacebookSquare, FaInstagram, FaPhoneAlt, FaMapMarkerAlt} from 'react-icons/fa';
import React from 'react';



export default function Bottom() {


    return (
        <div className='w-full text-gray-200 font-semibold flex flex-col h-60 mt-20 pt-6 px-6 bg-light-gray'>
                <div className='flex'>
                <div className='flex flex-col'>
                    <div className="flex"><FaFacebookSquare className="w-6 my-auto h-6 text-red-burger" />
                    <h3 className=" my-auto ml-2 ">Wół Na Stół</h3>
                    </div>
                    <div className="mt-6 flex"><FaMapMarkerAlt className="w-6 my-auto h-6 text-red-burger" />
                    <h3 className=" my-auto ml-2 ">ul.Ptasia 16b <br/> Zielona Góra</h3>
                    </div>
                </div>
                <div className='flex mr-0 ml-auto flex-col'>
                    <div className='flex'>
                    <h3 className=" my-auto mr-2">@wolnastol</h3>
                    <div className="flex mr-0 ml-auto"><FaInstagram className="w-6 h-6 my-auto text-red-burger" /></div>
                    </div>
                    <div className='flex mt-6'>
                        <h3 className=" my-auto ml-auto mr-2 ">657425870</h3>
                        <div className="mr-0 flex"><FaPhoneAlt className="w-6 my-auto h-6 text-red-burger" /></div>
                    </div>
                </div>
                </div>
                <div className='flex flex-col my-auto'>
                <h3>Godziny otwarcia:</h3>
                <p className='text-sm mt-2'>Poniedziałek-piątek: 13:00-21:00</p>
                <p className='text-sm mt-2'>Sobota-Niedziela: 12:00-19:00</p>
                </div>

            </div> 
        )

}