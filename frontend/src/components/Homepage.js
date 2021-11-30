import React, { useState, useEffect } from 'react';
import {AiOutlineArrowDown} from "react-icons/ai";
import '@dotlottie/player-component';
import {SiDjango, SiReact, SiJavascript, SiDocker, SiPython, SiTailwindcss, SiCanva} from 'react-icons/si'
import {RiBodyScanFill} from 'react-icons/ri'
import {CgMathPercent} from 'react-icons/cg'
import {BiDna} from 'react-icons/bi'



export default function Homepage() {


        return(
            <div className="dark:bg-dark-gray flex flex-col w-full h-auto px-[5%] lg:px-[15%] transition-all duration-500 bg-light-yellow">
            <div className="w-full flex flex-col px-6 sm:px-0 h-auto">
            <div className="flex pt-32 xl:pt-[18rem]">
            <div className="grid xl:grid-cols-2 grid-cols-1 text-white gap-4 mx-auto w-full h-auto xl:h-[36rem]">
                <div className="xl:w-[41rem] flex flex-col w-auto" >
                <h1 className="lg:text-[4rem] sm:text-[3rem] text-4xl leading-[1.25] xl:text-left text-center dark:text-white text-black mb-4 font-calibre font-bold"><span className="animate-animated animate-delay-1s animate-fadeInDown"><span className='text-blue-500'>Hi,</span> I'm Kacper,</span> <br /> <span className="animate-animated animate-fadeInDown animate-delay-2s">a full-stack developer and a medical student. </span></h1>
                <div className="flex animate-animated animate-fadeInDown animate-delay-2s mx-auto xl:mx-0 mt-5">
                <div className="transition-all hover:-translate-y-1 duration-200 ease-in hover:scale-105 flex items-center"><a href="#about_me" className="font-semibold tracking-wider w-32 text-center py-4 bg-gradient-to-br from-blue-400 to-blue-800 rounded-xl"> About me! </a></div>
                <div className='hover:scale-105 hover:-translate-y-1 duration-200 flex items-center ease-in transition-all'><a href='#my_work' className="w-32 ml-4 font-semibold tracking-wider text-center py-4 border-[3px] text-dark-gray dark:text-gray-200 border-dark-gray dark:border-gray-200 rounded-xl ">My Work</a></div>
                </div>
                </div>
                <div className='order-first animate-animated animate-fadeInDown animate-delay-3s animate-slow xl:order-none mt-[-30px] xl:mt-[-100px] xl:w-[734px] sm:w-full ml-[-12.5%] sm:ml-0 w-[125%] h-full xl:h-[576px]'>
                    <dotlottie-player
                        src='/staticfiles/images/doc.lottie'
                        autoplay
                        loop
                        style={{ height: '100%', width: '100%' }}
                    />
                </div>    
            </div>
            </div>            
            </div>
            <AiOutlineArrowDown id="about_me" className="mx-auto w-10 h-10 opacity-50 text-dark-gray mt-20 dark:text-gray-200 animate-bounce animate-slower animate-animated animate-infinite" />
            <div  className="w-full flex mt-20 px-6 lg:px-[15%] flex-col">
            <h2 className="underline font-semibold text-3xl text-dark-gray dark:text-gray-200">About me</h2>
            <div className="mt-4">
            <img className="h-40 mr-5 float-left rounded-lg" src={'/staticfiles/images/me.jpeg'}/>
            <p className='text-lg text-dark-gray text-justify leading-[1.9] dark:text-gray-200'>I am a 2nd year Medical Student at the University of Sheffield with a passion for web development. I am a fullstack developer that loves to learn and create.
            So far I have  been working as solo-developer on the side but am now looking to combine my passion for medicine and programming togheter. When I am not studying or developing I love to play squash and hang out with friends.
            </p>
            </div>
            
            </div>
            <div className="w-full flex mt-20 px-6 lg:px-[15%] flex-col">
                <h2 className="underline font-semibold text-3xl text-dark-gray dark:text-gray-200">My timeline</h2>
                <div>
                <ul className="mt-4 text-lg text-dark-gray dark:text-gray-200">
                    <li className="mt-4"><span className="font-bold">2000</span> born in Sulechów - Poland.</li>
                    <li className="mt-4"><span className="font-bold">2018</span> passed matura exams with results in the 95th percentile from Biology, Chemistry and 100th percentile from English.</li>
                    <li className="mt-4"><span className="font-bold">2017 to present</span> developing multiple Web Applications.</li>
                    <li className="mt-4"><span className="font-bold">2020</span> started the Medicine MBChB course at the Sheffield Medical School.</li>
                </ul>
                </div>
            
            </div>
            <div id='my_work' className="w-full flex mt-20 px-6 lg:px-[15%] flex-col">
                <h2 className="underline font-semibold text-3xl text-dark-gray dark:text-gray-200">Past projects</h2>
                <div className="grid grid-cols=1 xl:grid-cols-2 text-dark-gray dark:text-gray-200 gap-10 mt-5 w-full mx-auto h-auto">
                    <div className="flex flex-col">
                        <a target="_blank" href="http://e-notatki.pl"><img className='rounded-lg' src={'/staticfiles/images/e-notatek.png'} /> </a>
                        <div className=" mt-5 text-xl"><a target="_blank" href="http://e-notatki.pl" className="underline font-bold">E-Notatki.pl</a><p> A platform for polish highschool students to buy and sell their notes.</p></div>
                    </div>
                    <div className="flex flex-col">
                        <img className='rounded-lg' src={'/staticfiles/images/dose.png'} />
                        <div className="mt-5 text-xl"><span className="underline font-bold">Daily Dose of UCAT</span><p> A website that allowed future medical students to sing up for a newsletter that would send them practice questions for the UCAT exam.</p></div>
                    </div>
                    <div className="flex flex-col">
                        <img className='rounded-lg' src={'/staticfiles/images/t1.png'} />
                        <div className="mt-5 text-xl"><span className="underline font-bold">Research Project</span><p> In 2021 I conducted a research project that compared the results of two different MRI T1 mapping techniques in patients with Idiopathic Pulmonray Fibrosis.</p></div>
                    </div>
                    {/*
                    <ul className="mt-4 text-lg list-disc ml-5 text-dark-gray dark:text-gray-200">
                        <li className="mt-4"><a target="_blank" href="http://e-notatki.pl" className="underline font-bold">e-notatki.pl</a> a platform for polish highschool students to buy and sell their notes.</li>
                        <li className="mt-4"><span className="font-bold">Daily Dose of UCAT</span> a website that allowed future medcial students to sing up for a newsletter that would send them practice questions for the UCAT exam (entry exams to medical schools in the uk).</li>
                        <li className="mt-4"><span className="font-bold">Research Project</span> in 2021 I conducted a research project that compared the results of two different MRI T1 mapping techniques in patients with Idiopathic Pulmonray Fibrosis.</li>
                    </ul>
                    */}
                </div>
            
            </div>
            <div className="w-full flex h-auto my-20 px-6 lg:px-[15%] flex-col">
                <h2 className="underline font-semibold text-3xl text-dark-gray dark:text-gray-200">My Skills</h2>
                    <div className="grid mt-4 grid-cols-1 sm:grid-cols-2 sm:gap-20 w-full h-full">
                
                    <div>
                    <ul className="text-lg text-dark-gray dark:text-gray-200">
                        <li className="skills"><SiPython className="icon" /><span className="font-bold">Python</span></li>
                        <li className="skills"><SiDjango className="icon" /><span className="font-bold">Django</span></li>
                        <li className="skills"><SiReact className="icon" /><span className="font-bold">React</span></li>
                        <li className="skills"><SiJavascript className="icon" /><span className="font-bold">Java Script</span></li>
                        <li className="skills"><SiDocker className="icon" /><span className="font-bold">Docker</span></li>
                        </ul>
                    </div>
                    <div className="flex justify-start sm:justify-end">
                        <div className="w-[220px]">
                    <ul className="text-base sm:text-lg text-dark-gray dark:text-gray-200">
                        <li className="skills"><SiTailwindcss className="icon" /><span className="font-bold">Tailwind CSS</span></li>
                        <li className="skills"><SiCanva className="icon" /><span className="font-bold">Machine Learning</span></li>
                        <li className="skills"><RiBodyScanFill className="icon" /><span className="font-bold">Medical Imaging</span></li>
                        <li className="skills"><CgMathPercent className="icon" /><span className="font-bold">Mat Lab</span></li>
                        <li className="skills"><BiDna className="icon" /><span className="font-bold">Biology & Chemistry</span></li>
                        </ul>
                        </div>
                    </div>
                    
                

                </div>
            </div>
            </div>
        )
    }


   
