import React, { useState, useEffect } from 'react';
import {TiShoppingCart} from "react-icons/ti"
import {FaHamburger} from "react-icons/fa";
import { Link, Navigate, useNavigate } from "react-router-dom";
import axios from "axios";


export default function Kasa_platnosc() {

    const [stolik,setStolik] = useState(false)
    const [number,setNumber] = useState('Na wynos')
    const [Cart,SetCart] = useState([])
    const [CartLen,SetCartLen] = useState(0)
    const [Total, SetTotal] = useState(0);
    const [send,setSend] = useState(false)





    const GetCart = () => {
        axios.get('/api/get_cart').then((response) => {

            console.log(response.data)

            SetCart(response.data)
            let len = 0
            var total = 0
            for (const i of response.data) {    
                total += i.price_combined
                len += i.num;
            }
          SetCartLen(len)
          SetTotal(total);
        })
    }

    useEffect(() => {
        GetCart()
    },[])

    const redirect = () => {
        let n = number.toString()
        n = number.replace(' ','_')
        n = n.toLowerCase()
        window.location.href = '/table/' + n;
    }

    const Send = () => {
        let list = Cart.map((x) => ({'id': x.item.id, 'num': x.num, 'note': x.item.note, 'turbo' : x.item.dodatkowe_mieso, 'frytki': x.item.frytki, 'krazki': x.item.krazki,'kulki': x.item.kulki, 'bataty': x.item.bataty}) )
    
        
        
        axios.post('/api/order',{'cart': list,'table':number})
    
        
        setSend(true)    
    
        
    }

    const renderNavBar = () => {
        return(
            <div className="fixed top-0 flex z-30 dark:bg-dark-gray dark:backdrop-blur-lg  items-center px-[5%] lg:px-[15%] py-3 left-0 h-[4.25rem] w-full ">
            <Link to='/kasa' className="flex dark:text-red-burger text-dark-gray transition-all cursor-pointer items-center hover:scale-105 ease-in-out duration-500">
                <FaHamburger className="w-10 h-10"/>
                <div className="ml-2 sm:flex hidden transition-all text-2xl font-semibold">Stół Na Wół</div>
            </Link>
            
            <Link to='/kasa_koszyk' className="w-12 h-12 relative ml-auto mr-0 hover:scale-105 transition-all bg-dark-gray text-white duration-300 rounded-lg flex dark:bg-red-burger">
            <TiShoppingCart className="w-7 h-7 text-white dark:text-dark-gray m-auto" />
            <div className="absolute right-0 rounded-tl-lg rounded-br-lg text-lg text-center bg-white text-dark-gray w-5 h-5 flex leading-none bottom-0"><span className="m-auto">{CartLen}</span></div>
            </Link>
        </div>
        )
     }

    useEffect(() => {
        if (send === true) {
            window.location.href = '/kasa'; 
         }
    },[send])
    
    const rendertable = () => {
        return (
            <>
                    <label htmlFor='text' className='text-[0.93rem] text-white ml-[2px]'>Numer stolika</label>
                    <select onChange={(e) => {setNumber(e.target.value)}} autoComplete='off' className="bg-payment-gray mt-1 block shadow-lg w-full text-gray-400 transition-all rounded-md border-gray-600 p-3 focus:border-gray-300 focus:ring focus:ring-red-burger focus:ring-opacity-50 ">
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
                    <button onClick={Send} className='bg-red-burger shadow-red-burger/50 shadow-neon-shadow py-[0.7rem] mt-8 mx-auto font-semibold w-[130px] rounded-md text-white'>Dalej</button>
                    <Link to='/kasa_koszyk'className='font-semibold p-2 text-red-burger mx-auto mt-6'>Cofnij</Link>
            </>
            
        )
    }

    const handletable = (e) => {
        setNumber(e.target.value)
    }

    return (
        <div id='home' className="relative min-h-screen w-full flex flex-col h-auto px-[5%] lg:px-[15%] transition-all duration-500 bg-dark-gray">
        {renderNavBar()}
        <div className="flex m-auto flex-col w-full">
            {rendertable()}
                
            </div>
        </div>
    )
}