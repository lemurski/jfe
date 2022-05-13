import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'
import axios from 'axios'
import '@dotlottie/player-component';



export default function Complete() {


    const ClearCart = () => {
        axios.post('/api/clear').then((response) => {
        })
    }

    useEffect(() => {
        ClearCart()
    },[])

    return(

        <div className="min-h-screen w-full h-auto">
            <div id='home' className="relative flex flex-col min-h-screen pt-[4.25rem] w-full px-[5%] lg:px-[15%] transition-all duration-500">
            <Navbar cartlen={0} />
            <div className="font-bold text-center text-white mt-12 text-4xl">Dziękujemy za<br/>zamówienie!</div>
            <div className="w-[300px] h-[300px] mt-24 mx-auto">
            

            <dotlottie-player
                src='/staticfiles/images/b.lottie'
                autoplay
                loop
                style={{ height: '100%', width: '100%' }}
            />
            </div>
            
     
            </div>
        </div>



    )
}