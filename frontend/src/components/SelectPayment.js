import React, { useState, useEffect} from 'react';
import Navbar from './Navbar';
import axios from 'axios';
import {FaCashRegister} from 'react-icons/fa'
import {BsPhone} from 'react-icons/bs'
import { FaRegMoneyBillAlt } from 'react-icons/fa'
import { Link, Navigate, useNavigate } from "react-router-dom";


// const orderSocket = new WebSocket(
//     'ws://' + window.location.host + '/ws/order_socket/'
//   )

export default function SelectPayment() {


    const [Cart,SetCart] = useState([])
    const [CartLen,SetCartLen] = useState(0)
    const [PayCash, setPayCash] = useState(false)
    const [email,setEmail] = useState('')
    const [number,setNumber] = useState()
    const navigate = useNavigate()
    const [send,setSend] = useState(false)

    const GetCart = () => {
        axios.get('/api/get_cart').then((response) => {

            console.log(response.data)

            SetCart(response.data)
            let len = 0
            for (const i of response.data) {    
                len += i.num
            }
          SetCartLen(len)
            
        })
    }


    const Send = () => {
        let list = Cart.map((x) => ({'id': x.item.id, 'num': x.num, 'note': x.item.note}) )
    
        
        
        axios.post('/api/order',{'cart': list,'table':number})

        
        setSend(true)    
    
        
   }

   useEffect(() => {
    if (send === true) {
        window.open('/complete') 
     }
   },[send])



    useEffect(() => {
        GetCart()
    },[])


    const renderPayCash = () => {
        return (
            <div className="flex m-auto flex-col w-full">
                <form onSubmit={Send} className="w-full flex flex-col p-3 h-72 justify-between bg-light-gray shadow-lg rounded-md">
                    <div>
                    <label htmlFor='text' className='text-[0.93rem] text-white ml-[2px]'>Imię i nazwisko</label>
                    <input type="text" placeholder="Imię i nazwisko" autoComplete='off' required id='email' value={email} onChange={(event) => { setEmail(event.target.value)}} className="bg-payment-gray mt-1 block shadow-lg w-full text-gray-400 transition-all rounded-md border-gray-600 p-3 focus:border-gray-300 focus:ring focus:ring-red-burger focus:ring-opacity-75 "/>
                    </div>
                    <div>
                    <label htmlFor='text' className='text-[0.93rem] text-white ml-[2px]'>Numer stolika</label>
                    <input type="number" placeholder="Numer stolika" autoComplete='off' required id='email' value={number} onChange={(event) => { setNumber(event.target.value)}} className="bg-payment-gray mt-1 block shadow-lg text-gray-400 w-full transition-all rounded-md border-gray-600 p-3 focus:border-gray-300 focus:ring focus:ring-red-burger focus:ring-opacity-75 "/>
                    </div>
                    <button className="bg-red-burger text-white font-semibold mb-0  rounded-md p-3" id="submit">
                        Zamawiam i płacę przy kasie
                    </button>
                </form>
                <button onClick={() => {setPayCash(false)}} className="bg-red-burger text-white mt-6 rounded-md py-3 mx-auto w-[150px]">
                        Cofnij
                    </button>
            </div>
        )
    }

    const renderOptions = () => {
        return(
            <div className="flex m-auto flex-col w-full">
                <div onClick={() => {setPayCash(true)}} className="w-full flex flex-col p-3 bg-light-gray h-48 shadow-lg rounded-md ">
                    <div className="flex flex-col my-auto">
                    <FaRegMoneyBillAlt className="w-16 h-16 text-red-burger mx-auto" />
                    <div className="text-2xl mt-5 mx-auto text-center text-gray-100 font-semibold">Zapłać przy kasie</div>
                    </div>
                </div>
                <Link to="/checkout" className="w-full flex flex-col mt-6 shadow-lg p-3 h-48 rounded-md bg-light-gray">
                    <div className="flex flex-col my-auto">
                    <BsPhone className="w-16 text-red-burger h-16 mx-auto" />
                    <div className="text-2xl mt-5 mx-auto text-center text-gray-100 font-semibold">Zapłać przez telefon</div>
                    </div>
                </Link>
            </div>
        )
    }


    return(
        <div className="min-h-screen w-full h-auto">
            <div id='home' className="relative flex flex-col min-h-screen w-full px-[5%] lg:px-[15%] transition-all duration-500 bg-dark-gray">
            <Navbar cartlen={CartLen} />
                       
            {PayCash ? renderPayCash() : renderOptions()}
        </div>
        </div>
    )
}