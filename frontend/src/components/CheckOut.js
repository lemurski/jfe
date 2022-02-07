import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import CheckoutForm from './CheckoutForm';
import axios from 'axios';
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js';


const stripePromise = loadStripe('pk_test_51KPqVjIe60pKGrAOnS4gEdD930envC2Iibv1UbuI0kiRWdrjwKrQatPS1r6iqx4nQVUi9ZvymfMaBlwRnWadA9pZ00gpGVhYCD')

export default function Checkout() {

    const [Cart,SetCart] = useState([])

    const [clientSecret, setClientSecret] = useState("");

    const FetchStripe = () => {
        axios.post('/api/payment').then((response) => {
            console.log(response.data)
            setClientSecret(response.data.clientSecret)
          }).catch(error => {console.log(error)});
    }

    const GetCart = () => {
        axios.get('/api/get_cart').then((response) => {
            SetCart(response.data)
            console.log(response.data)
            
        })
    }

    useEffect(() => {
        GetCart()
        FetchStripe()
    },[])


    const appearance = {
        theme: 'flat',
      };
    
    const options = {
        clientSecret,
        appearance,
    }


    return (
        
        <div className="min-h-screen w-full h-auto">
            <div id='home' className="dark:bg-dark-gray relative flex flex-col min-h-screen pt-[4.25rem] w-full px-[5%] lg:px-[15%] transition-all duration-500 bg-light-yellow">
            <Navbar cartlen={Cart.length} />
            {clientSecret && (
                <Elements options={options} stripe={stripePromise}>
                    <CheckoutForm />
                </Elements>
            )}      
            </div>
        </div>
        
    )

}