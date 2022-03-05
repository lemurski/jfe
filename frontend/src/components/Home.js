import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import { useLocation, useSearchParams } from 'react-router-dom';
import {MdClear} from 'react-icons/md'
import { AnimatePresence,motion } from 'framer-motion';


axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';

export default function Home() {
    
    const[Menu,SetMenu] = useState([])
    const[Item,SetItem] = useState()
    const[Displayed,SetDisplayed] = useState(false)
    const[Note,SetNote] = useState()
    const[CartLen,SetCartLen] = useState(0)
    const[Categories,SetCategories] = useState([])
    const[search] = useSearchParams()
    const[loading,Setloading] = useState(true)
    const[selectedCategory,SetselectedCategory] = useState('Przystawki')
    const[itemloading,Setitemloading] = useState(false)
    const[width,Setwidth] = useState('98px')
    const[leftmargin,Setleftmargin] = useState('0px')


    const cat = ['Przystawki','Hamburgery','Dla Dzieci','Napoje','Sałatki','Desery']

    const filtered = Menu.filter(item => item['category'] === selectedCategory)

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
        SetNote(null)
        
       
    }

    const add = () => {
        Item.note = Note
        AddToCart(Item)
        SetDisplayed(false)
        SetCartLen(CartLen + 1)
        SetItem({id: 15, title: 'Hamburger', description: 'Smaczny Hamburgerson',ingredients: '["salami","ser"]'})
        SetNote(null)
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
            const data = response.data
            console.log(data[data.length - 1]['category'])
            SetCategories(data[data.length - 1]['category'])
            var menu = (response.data).slice(0,-1)
            SetMenu(menu)
            
        })
               
    }

    const handlecatchange = (e) => {
        SetselectedCategory(e.target.textContent)
        Setitemloading(true)
        console.dir(e.target)
        Setwidth(e.target.offsetWidth)
        Setleftmargin(e.target.offsetLeft)
        setTimeout(() => {Setitemloading(false)},400)
    }


    const showMenu = () => {
        return( 
            filtered.map((food,k) =>
            <motion.div key={k} variants={{
                hidden: {opacity:0, y: -50 * k},
                visible: (k) => ({
                    opacity:1,
                    y: 0,
                    transition: {delay: k * 0.05, duration: 0.4}
                }),
                end: {opacity:0}
            }} 
            initial='hidden' animate='visible' exit='end' onClick={() => DisplayItem(food.id)} value={food.id} className="mx-auto px-3 py-4 shadow-lg flex bg-light-gray border-[1.5px] border-gray-800 mt-6 h-36 rounded-xl">
            <div className="w-[100px] flex-none  ml-0 mr-auto h-[100px] my-auto rounded-full">
            <img className='w-[100px] h-[100px] rounded-full' src={food.image}></img>
            </div>
            <div className='flex ml-4 flex-col'>
                <h1 className="text-[0.95rem] font-medium mr-3 text-white">{food.title}</h1>
                <p className="whitespace-normal text-gray-500 max-h-[242px] line-clamp-2 mr-4 mt-1 overflow-hidden truncate text-sm">{food.description}</p>
                <div className='flex bg-red-burger rounded-md mb-0 mt-auto w-16'><h2 className="font-semibold m-auto p-1 text-center text-gray-50 text-[0.9rem] mt-auto mb-0">{food.price} zł</h2></div>
                
            </div>
            
            
            {/* <button value={food.id} onClick={DisplayItem} className='absolute transition-all text-sm font-semibold bg-dark-gray text-orange-burger hover:scale-105 duration-300 bottom-3 right-3 p-[0.3rem] border-2 border-dark-gray rounded-md'>Dodaj do koszyka</button> */}
        </motion.div>
        )
        )
    }

    
    const renderAll = () => (
        <>
        <div className="flex scroll flex-nowrap relative pb-4 text-lg text-text-gray font-semibold overflow-x-auto mt-6">
                <div style={{width: width, left: leftmargin}} className="absolute transition-all h-[3px] bg-red-burger top-7 rounded-lg"></div>
                <h3 onClick={(e) =>{handlecatchange(e)}} className='flex-0  border-red-burger hover:text-white'>Przystawki</h3>
                <h3 onClick={(e) =>{handlecatchange(e)}} className='ml-3  border-red-burger flex-0 hover:text-white'>Burgery</h3>
                <h3 onClick={(e) =>{handlecatchange(e)}} className='ml-3  border-red-burger flex-0 hover:text-white'>Sałatki</h3>
                <h3 onClick={(e) =>{handlecatchange(e)}} className='ml-3  border-red-burger flex-0 hover:text-white'>Dla Dzieci</h3>
                <h3 onClick={(e) =>{handlecatchange(e)}} className='ml-3  border-red-burger flex-0 hover:text-white'>Napoje</h3>
                <h3 onClick={(e) =>{handlecatchange(e)}} className='ml-3  border-red-burger flex-0 hover:text-white'>Desery</h3>
            </div>
            {/* {loading ? renderLoading() : null} */}
            {/* <div className="mb-6">
                {renderAll}
            </div> */}
            <AnimatePresence >
            {itemloading ? null : showMenu()}
            </AnimatePresence>
            <AnimatePresence>
            {Displayed ? ItemDetails() : null}
            </AnimatePresence>
            <div className="flex h-7"> </div>
        </>
    )


    const renderLoading = () => {
        return(
          <div className="top-0 z-20 flex flex-col left-0 bottom-0 right-0 fixed bg-dark-gray">
            <div className="w-[300px] mt-40  mx-auto h-[350px]">
            <dotlottie-player
                    src='/staticfiles/images/burgerek.lottie'
                    autoplay
                    loop
                    style={{ height: '100%', width: '100%' }}
            />
                      <div className="text-center text-white font-bold -mt-9 text-3xl">Witamy w <br/> Stół Na Wół!</div>
            </div>
          </div>
        )
      }
    
    const renderNavBar = () => {
        return(
            <>
            <Navbar cartlen={CartLen} />
            </>
        )
     }

    const ItemDetails = () => {
        return (
            <motion.div animate={{opacity: 1}} initial={{opacity: 0}} exit={{opacity: 0}}>
            {/* <div onClick={CloseDetails} className="top-0 z-20 left-0 transition-all bottom-0 right-0 fixed bg-gray-800/70  "></div> */}
            <div className="rounded-lg relative items-center pt-6 z-50 flex flex-col left-0 right-0 m-auto top-0 bottom-0 w-screen h-screen bg-dark-gray">
                <div onClick={CloseDetails} className="absolute top-[0.55rem] right-2"> <MdClear className='h-8 text-red-burger w-8' /> </div>
                <div className="flex flex-col px-4 my-auto text-gray-200 items-center">
                <img className='rounded-2xl w-56 h-44' src={Item.image}></img>
                <div className='text-xl mt-6 font-bold leading-7 text-white '>{Item.title}</div>
                <p className="mt-[18px] text-center text-sm text-gray-400 font-semibold">{Item.description}</p>
                <textarea onChange={HandleNote} placeholder="Dodaj notatkę do dania" className='mt-6 w-full resize-none h-28 rounded-md border-gray-600 p-3 focus:border-gray-300 focus:ring focus:ring-red-burger text-gray-300 bg-light-gray focus:ring-opacity-50'></textarea>
                <button onClick={add} className="w-full py-3 bg-red-burger text-gray-100 tracking-wide text-lg mt-6 mb-0 font-semibold border-dark-gray rounded-xl">{Item.price} zł</button>
                </div>
            </div>
            </motion.div>

        )
    }

    useEffect(() => {
        FetchMenu()
        GetCart()
        TableNum()
        setTimeout(() => {Setloading(false)},2000)
    },[])

    return (
        <div className="min-h-screen font-poppins w-full h-auto">
        {Displayed ? null : renderNavBar()}
            <div id='home' className="relative min-h-screen w-full pt-[68px] h-auto px-[5%] lg:px-[15%] transition-all duration-500 bg-dark-gray">
            {loading ? renderLoading() : renderAll()}
            </div>
        </div>
    )
}



