import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import { Link, useLocation } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';


export default function Cart(props) {

    const location = useLocation()
    const [Cart,SetCart] = useState([])


    
    axios.defaults.xsrfCookieName = 'csrftoken';
    axios.defaults.xsrfHeaderName = 'X-CSRFToken';

    const showMenu = (Cart).map((food,key) =>
        <div key={key} className="mx-auto w-[95%] relative p-3 flex bg-gray-50 mt-5 h-40 rounded-lg">
            <div className='flex flex-col'>
                <h1 className="text-2xl font-bold leading-7 text-gray-900">{food.title}</h1>
                <p className="mt-1 text-sm">{food.description}</p>
                <h2 className="font-semibold text-lg mt-auto mb-0">{food.price} zł</h2>
            </div>
            
            <img className='w-28 mr-0 ml-auto h-16 rounded-md' src={food.image}></img>
        </div>
    )



    const GetCart = () => {
        axios.get('/api/get_cart').then((response) => {
            SetCart(response.data)
        })
    }

    useEffect(() => {
        GetCart()
    },[])

    return(
        <div className="min-h-screen w-full h-auto">
            <div id='home' className="dark:bg-dark-gray relative flex flex-col min-h-screen w-full h-auto px-[5%] lg:px-[15%] transition-all duration-500 bg-light-yellow">
            <Navbar cartlen={Cart.length} />
            <div className="flex flex-col my-auto">
                {showMenu}
                
            </div>
            <Link to='/checkout' className='rounded p-2 bg-white'>BUTTON</Link>
            </div>
        </div>


    )
}   