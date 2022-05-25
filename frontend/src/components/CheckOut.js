import React, { useState, useEffect, useRef } from 'react';
import Navbar from './Navbar';
import CheckoutForm from './CheckoutForm';
import axios from 'axios';
import { Elements } from '@stripe/react-stripe-js'
import { useParams } from "react-router-dom";
import { loadStripe } from '@stripe/stripe-js';


const stripePromise = loadStripe('pk_test_51KPqVjIe60pKGrAOnS4gEdD930envC2Iibv1UbuI0kiRWdrjwKrQatPS1r6iqx4nQVUi9ZvymfMaBlwRnWadA9pZ00gpGVhYCD')

export default function Checkout() {

    const [Cart,SetCart] = useState([])
    const [CartLen,SetCartLen] = useState(0)
    const [clientSecret, setClientSecret] = useState("");
    const isMounted = useRef(false);
    let {id} = useParams()



    useEffect(() => {
        console.log(clientSecret)
    },[clientSecret])

    const FetchStripe = () => {
        let list = Cart.map((x) => ({'id': x.item.id,'price':x.price,'price_combined':x.price_combined, 'num': x.num, 'note': x.item.note, 'turbo': x.item.dodatkowe_mieso, 'frytki': x.item.frytki, 'krazki': x.item.krazki,'kulki': x.item.kulki, 'bataty': x.item.bataty}) )

        const ist = JSON.stringify(list)

        axios.post('/api/payment', {'cart' : ist, 'table' : id}).then((response) => {
            setClientSecret(response.data.clientSecret)
          }).catch(error => {console.log(error)});
    }

    const GetCart = () => {
        axios.get('/api/get_cart').then((response) => {
            SetCart(response.data)
            let len = 0
            for (const i of response.data) {
                len += i.num
            }
          SetCartLen(len)
            
        })
    }

    useEffect(() => {
        GetCart()
    },[])

    useEffect(() => {
        if (isMounted.current) {
            FetchStripe()
        } 
        else {
            isMounted.current = true;
            }
    },[Cart])

    const appearance = {
        theme: 'flat',
        labels: 'above',

        variables: {
            colorPrimary: '#ff2b32',
            colorText: '#ffffff',
            colorBackground: '#40414f',

        }

      };
    
    const options = {
        clientSecret,
        appearance,
    }

    return (
        
        <div className="min-h-screen w-full h-auto">
            <div id='home' className="relative flex flex-col min-h-screen pt-[4.25rem] w-full px-[3%] lg:px-[15%] transition-all duration-500 bg-dark-gray">
            <Navbar cartlen={CartLen} />
            
            {clientSecret && (
                <Elements options={options} stripe={stripePromise}>
                    <CheckoutForm />
                </Elements>
            )}      
            </div>
        </div>
        
    )

}