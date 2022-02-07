import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import { useLocation } from 'react-router-dom';


axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';

export default function Homepage() {
    
    const[Menu,SetMenu] = useState([])
    const[Item,SetItem] = useState({id: 15, title: 'Hamburger', description: 'Smaczny Hamburgerson',ingredients: '["salami","ser"]'})
    const[Displayed,SetDisplayed] = useState(false)
    const[Note,SetNote] = useState()
    const[CartLen,SetCartLen] = useState(0)
    const location = useLocation()

    const DisplayItem = (e) => {
        SetItem(Menu[e.target.value])
        Displayed ? SetDisplayed(false) : SetDisplayed(true)
    }

    const CloseDetails = () => {
        SetDisplayed(false)
        SetItem({id: 15, title: 'Hamburger', description: 'Smaczny Hamburgerson',ingredients: '["salami","ser"]'})
        console.log(CartLen)
        
       
    }

    const add = () => {
        Item.note = Note
        AddToCart(Item)
        SetDisplayed(false)
        SetCartLen(CartLen + 1)
        SetItem({id: 15, title: 'Hamburger', description: 'Smaczny Hamburgerson',ingredients: '["salami","ser"]'})
    }


    const HandleNote = (e) => {
        SetNote(e.target.value)
    }
    
    const AddToCart = (item) => {
        axios.post('/api/cart', {
            'cart': item,
        }).then((response) => {
            console.log((response.data))
        })
    }

    const GetCart = () => {
        axios.get('/api/get_cart').then((response) => {
            SetCartLen((response.data).length)
        })
    }
    
    const ClearCart = () => {
        SetCartLen(0)
        axios.post('/api/clear').then((response) => {
            console.log(response)
        })
    }

    const FetchMenu = () => {
        axios.get('/api/menu').then((response) => {
            SetMenu(response.data)
            
        })
        if (location.state) {
            SetCartLen(location.state.cartlen)
                console.log(location.state)
        }
        
    }

    // const showIngredients = (Item.ingredients).map((ingredient) => {
    //     <div>{ingredient}</div>
    // })

    const showMenu = Menu.map((food,key) =>
        <div key={key} className="mx-auto w-[95%] relative p-3 flex bg-gray-50 mt-5 h-40 rounded-lg">
            <div className='flex flex-col'>
                <h1 className="text-2xl font-bold leading-7 text-gray-900">{food.title}</h1>
                <p className="mt-1 text-sm">{food.description}</p>
                <h2 className="font-semibold text-lg mt-auto mb-0">{food.price} zł</h2>
            </div>
            
            <img className='w-28 mr-0 ml-auto h-16 rounded-md' src={food.image}></img>
            <button value={key} onClick={DisplayItem} className='absolute transition-all text-sm font-semibold hover:scale-105 duration-300 bottom-3 right-3 p-[0.3rem] border-2 border-dark-gray rounded-md'>Dodaj do koszyka</button>
        </div>
    )

    const ItemDetails = () => {
        return (
            <div>
            <div onClick={CloseDetails} className="top-0 z-20 left-0 bottom-0 right-0 fixed bg-gray-500/25"></div>
            <div className="absolute rounded-xl items-center p-4 z-50 flex flex-col left-0 right-0 m-auto top-0 bottom-0 w-[22.5rem] h-[39rem] bg-gray-50">
                <div className='text-2xl font-bold leading-7 text-gray-900'>{Item.title}</div>
                <img className='mt-2 rounded-md w-52 h-auto' src={Item.image}></img>
                <p className="mt-2 font-semibold">{Item.description}</p>
                <textarea onChange={HandleNote} placeholder="Dodaj notatkę do przedmiotu" className='mt-10 w-full resize-none h-28 rounded-md focus:border-red-300 focus:ring focus:ring-red-200 focus:ring-opacity-50'></textarea>
                <button onClick={add} className="p-[0.3rem] border-2 mt-auto mb-0 border-dark-gray rounded-md">Dodaj do koszyka</button>
            </div>
            </div>
        )
    }

    useEffect(() => {
        FetchMenu()
        GetCart()
    },[])

    return (
        <div className="min-h-screen w-full h-auto">
        <Navbar cartlen={CartLen} />
        <div id='home' className="dark:bg-dark-gray relative flex flex-col min-h-screen w-full h-auto px-[5%] lg:px-[15%] transition-all duration-500 bg-light-yellow">
            <div className="flex flex-col my-auto">
                {showMenu}
            </div>
            {Displayed ? ItemDetails() : null}
         <button onClick={ClearCart} className="bg-white p-2 rounded-md">Clear Cart</button>   
        </div>
        </div>
    )
}



