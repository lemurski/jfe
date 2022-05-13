import React from 'react';
import { GiBull, GiHamburgerMenu } from "react-icons/gi";
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import AOS from 'aos';
import { MdClear } from 'react-icons/md'
import { AnimatePresence, motion } from 'framer-motion';
import Navbar_home from './Navbar_home';
import Map from './Map';






export default function Glowna() {

    const [sidebar, setsidebar] = useState(false)

    AOS.init()

    const changeSidebar = () => {
        sidebar ? setsidebar(false) : setsidebar(true)
    }


    const redirect = () => {
        window.location.href = '/table/1';
    }

    const renderNavBar = () => {
        if (sidebar) {
            null
        }
        else {
            return (
                <div className="fixed top-0 flex z-30 items-center backdrop-blur-lg px-[5%] lg:px-[15%] py-3 left-0 h-[4.25rem] w-full ">
                    <Link to="/" className="flex dark:text-red-burger text-dark-gray transition-all cursor-pointer items-center hover:scale-105 ease-in-out duration-500">
                        <GiBull className="w-10 h-10" />
                    </Link>
                    <Link to="/" className="mx-auto text-red-burger sm:flex transition-all my-auto font-Coustard text-4xl font-bold">
                        <div className="">Wół Na Stół</div>
                    </Link>

                    <GiHamburgerMenu onClick={changeSidebar} className="w-8 h-8 -mt-1 mr-0 text-red-burger" />


                </div>
            )
        }
    }

    const renderSidebar = () => {
        if (sidebar) {
            return (
                <motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }} exit={{ opacity: 0 }}>
                    <div className="fixed flex flex-col text-white text-2xl font-semibold items-center pb-[4.25rem] top-0 left-0 bg-dark-gray z-40 w-screen h-screen">
                        <div onClick={changeSidebar} className="absolute top-8 right-4"> <MdClear className='h-8 text-red-burger w-8' /> </div>
                        <div className="flex my-auto h-1/2 text-2xl justify-evenly flex-col items-center">
                            <a href="/#o_nas">O nas</a>
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
        <div id='home' className="relative min-h-screen w-full h-auto flex flex-col transition-all duration-500 bg-dark-gray">
            <Navbar_home />
            <img className='h-[66vh] w-full mx-auto object-cover' src={'/staticfiles/images/israel.jpg'} ></img>
            <div className="absolute top-0 left-0 h-[67vh] w-full bg-gradient-to-t from-dark-gray"></div>
            <div className="flex flex-col w-full mb-24 lg:px-[25%]">
                <h1 className='text-white font-Coustard uppercase mt-10 text-4xl tracking-wider text-center'>Najlepsze burgery w Zielonej Górze</h1>
                <div className='flex mt-6'>
                    <div className='mx-auto '>
                        <button onClick={redirect} className='bg-red-burger shadow-red-burger/50 shadow-neon-shadow py-[0.85rem] font-semibold text-lg w-[180px] rounded-md text-white'>Złóż zamówienie</button>
                    </div>
                </div>
                <div data-aos='fade-up' data-aos-offset="250" data-aos-duration="1000" className='flex flex-col mt-16 p-4 bg-light-gray'>
                    <h2 id='o_nas' className='text-white text-xl  font-bold font-Coustard'>O Nas</h2>
                    <p className='text-gray-400 mt-2 text-justify leading-[1.725] text-[0.925rem] font-semibold'>W naszej kuchni nie znajdziecie innej wołowiny niż tej pochodzącej od lokalnego dostawcy, wyselekcjonowanej specjalnie dla naszej restauracji, z codziennej dostawy. Nigdzie indziej nie będziecie mieli okazji spróbować takiego pieczywa, chrupiącego, ale i miękkiego zarazem, ponieważ wypiekane jest według naszej autorskiej receptury, w pobliskiej piekarni. Warzywa w naszych potrawach zawsze będą chrupiące i świeże, bo nigdy nie zamawiamy ich na zapas, a wybór najwyższej jakości surowców jest dla nas niezmiernie ważny. Sosy i dressingi będą idealnie doprawione, gdyż nasi kucharze robią je własnoręcznie na miejscu, nigdy nie korzystając z “gotowców”.</p>
                </div>
                <div data-aos='fade-right' data-aos-offset="250" data-aos-duration="1000" className=''>
                    <img className='h-[225px] w-full z-10 mx-auto object-cover' src={'/staticfiles/images/burgers.jpg'} ></img>
                    <div className="absolute -mt-[225px] z-20 h-[225px] w-full bg-gradient-to-t from-dark-gray/60"></div>
                </div>
                <div className='mt-10 p-3 bg-light-gray'>
                    <h2 className='text-white font-semibold text-xl font-Coustard'>Tu nas znajdziesz</h2>
                    <div className="w-full mt-2 h-[450px]">
                        <Map />
                    </div>
                </div>
            </div>
        </div>

    )
}