import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import { useLocation, useSearchParams } from 'react-router-dom';
import {MdClear} from 'react-icons/md'


axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';

export default function Homepage() {
    
    const[Menu,SetMenu] = useState([])
    const[Item,SetItem] = useState({id: 15, title: 'Hamburger', description: 'Smaczny Hamburgerson',ingredients: '["salami","ser"]'})
    const[Displayed,SetDisplayed] = useState(false)
    const[Note,SetNote] = useState()
    const[CartLen,SetCartLen] = useState(0)
    const[Categories,SetCategories] = useState([])
    const[search] = useSearchParams()


    const DisplayItem = (food) => {
        const filtered = Menu.filter(item => item['id'] == food)
        SetItem(filtered[0])
        
        Displayed ? SetDisplayed(false) : SetDisplayed(true)
    }

    const TableNum = () => {
        console.log(search.get('id'))

    }


    const CloseDetails = () => {
        SetDisplayed(false)
        SetItem({id: 15, title: 'Hamburger', description: 'Smaczny Hamburgerson',ingredients: '["salami","ser"]'})
        
       
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
            
        })
    }

    const GetCart = () => {
        axios.get('/api/get_cart').then((response) => {
            let len = 0
            for (const i of response.data) {
                len += i.num
            }
            SetCartLen(len)
        })
    }
    
    const ClearCart = () => {
        SetCartLen(0)
        axios.post('/api/clear').then((response) => {
        })
    }

    const FetchMenu = () => {
        axios.get('/api/menu').then((response) => {
            SetCategories((response.data).at(-1)['category'])
            var menu = (response.data).slice(0,-1)
            SetMenu(menu)
            
        })
               
    }


    const showMenu = (cat) => {
        const filtered = Menu.filter(item => item['category'] === cat)
        return( 
            filtered.map((food,k) =>
            <div key={food.id} onClick={() => DisplayItem(food.id)} value={food.id} className="mx-auto relative p-3 shadow-lg flex bg-orange-burger border-[1.5px] border-gray-800 mt-6 h-32 rounded-md">
            <div className='flex flex-col'>
                <h1 className="text-[1.1rem] font-extrabold leading-7 mr-3 text-gray-900">{food.title}</h1>
                <p className="mt-1 whitespace-normal max-h-[242px] line-clamp-2 mr-4 overflow-hidden truncate text-sm">{food.description}</p>
                <h2 className="font-semibold text-base mt-auto mb-0">{food.price} zł</h2>
            </div>
            
            <img className='w-[100px] mr-0 ml-auto h-[100px] my-auto rounded-md' src={food.image}></img>
            {/* <button value={food.id} onClick={DisplayItem} className='absolute transition-all text-sm font-semibold bg-dark-gray text-orange-burger hover:scale-105 duration-300 bottom-3 right-3 p-[0.3rem] border-2 border-dark-gray rounded-md'>Dodaj do koszyka</button> */}
        </div>
        )
        )
    }

    
    const renderAll = Categories.map((category, key) =>
        <>
        <div key={category} className="mx-auto relative p-3 flex shadow-lg border-[1.5px] border-black bg-orange-burger mt-6 h-14 rounded-md">
            <div className="m-auto text-xl font-extrabold">{category}</div>
        </div>
        {showMenu(category)}
        </>
    )


    

    const ItemDetails = () => {
        return (
            <div>
            <div onClick={CloseDetails} className="top-0 z-20 left-0 transition-all bottom-0 right-0 fixed bg-gray-800/70  "></div>
            <div className="fixed rounded-lg items-center pt-6 z-50 flex flex-col left-0 right-0 m-auto top-0 bottom-0 w-[22.5rem] h-[36rem] bg-dark-gray">
                <div onClick={CloseDetails} className="absolute top-[0.55rem] right-2"> <MdClear className='h-6 text-orange-burger w-6' /> </div>
                <div className="flex flex-col px-4 my-auto text-gray-200 items-center">
                <div className='text-2xl font-bold leading-7 text-orange-burger '>{Item.title}</div>
                <img className='mt-6 rounded-md w-52 h-44' src={Item.image}></img>
                <p className="mt-6 text-center font-semibold">{Item.description}</p>
                <textarea onChange={HandleNote} placeholder="Dodaj notatkę do dania" className='mt-6 w-full resize-none h-28 rounded-md border-gray-600 p-3 focus:border-gray-300 focus:ring focus:ring-orange-dark text-gray-400 bg-payment-gray focus:ring-opacity-75'></textarea>
                </div>
                <button onClick={add} className="w-full py-3 bg-orange-burger text-dark-gray tracking-wide text-lg mt-6 mb-0 font-semibold border-dark-gray rounded-b-lg">{Item.price} zł</button>
            </div>
            </div>
        )
    }

    useEffect(() => {
        FetchMenu()
        GetCart()
        TableNum()
    },[])

    return (
        <div className="min-h-screen w-full h-auto">
        <Navbar cartlen={CartLen} />
        <div id='home' className="dark:bg-orange-burger relative min-h-screen w-full pt-[68px] h-auto px-[5%] lg:px-[15%] transition-all duration-500 bg-light-yellow">
            <div className="mb-6">
                {renderAll}
            </div>
            {Displayed ? ItemDetails() : null}
        <div className="flex"> 
         </div>
        </div>
        </div>
    )
}



