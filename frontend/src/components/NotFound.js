import React, { useState, useEffect } from 'react';


export default function NotFound() {

    return(
        <div id='home' className="dark:bg-dark-gray flex flex-col w-full h-screen px-[5%] items-center justify-center lg:px-[15%] transition-all duration-500 bg-light-yellow">
             <div className="flex flex-col items-center">
                <div className='w-[110%] transition-all md:w-3/4'>
                                <dotlottie-player
                                    src='/staticfiles/images/404.lottie'
                                    autoplay
                                    loop
                                    style={{ height: '100%', width: '100%' }}
                                />
                </div>
                <div className="transition-all hover:-translate-y-1 duration-200 ease-in hover:scale-105 flex items-center"><a href="/" className="font-semibold tracking-wider text-white w-32 text-center py-4 bg-gradient-to-br from-blue-400 to-blue-800 rounded-xl">Homepage</a></div>
             </div>
             
            

        </div>
    )

}