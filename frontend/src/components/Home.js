import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import { useParams } from 'react-router-dom';
import {MdClear} from 'react-icons/md'
import {BiLeftArrow} from 'react-icons/bi'
import {RiArrowRightSLine, RiArrowLeftSLine} from 'react-icons/ri'
import { AnimatePresence,motion } from 'framer-motion';
import Bottom from './Bottom';


axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';

export default function Home() {


    
    const[Menu,SetMenu] = useState([])
    const[Item,SetItem] = useState()
    const[Displayed,SetDisplayed] = useState(false)
    const[Note,SetNote] = useState()
    const[Turbo,SetTurbo] = useState(false)
    const[CartLen,SetCartLen] = useState(0)
    const[Categories,SetCategories] = useState([])
    const[loading,Setloading] = useState(true)
    const[selectedCategory,SetselectedCategory] = useState('Przystawki')
    const[itemloading,Setitemloading] = useState(false)
    const[width,Setwidth] = useState('98px')
    const[leftmargin,Setleftmargin] = useState('0px')
    const[frytki,setFrytki] = useState(false)
    const[krazki,setKrazki] = useState(false)
    const[Kulki,setKulki] = useState(false)
    const[bataty,setBataty] = useState(false)
    const[left,setLeft] = useState(false)
    const[right,setRight] = useState(true)




    const cat = ['Przystawki','Hamburgery','Dla Dzieci','Napoje','Sałatki','Desery']

    const filtered = Menu.filter(item => item['category'] === selectedCategory)

    

    const DisplayItem = (food) => {
        const filtered = Menu.filter(item => item['id'] == food)
        SetItem(filtered[0])
        Displayed ? SetDisplayed(false) : SetDisplayed(true)
    }
    

    const CloseDetails = () => {
        SetDisplayed(false)
        SetItem({id: 15, title: 'Hamburger', description: 'Smaczny Hamburgerson',ingredients: '["salami","ser"]'})
        SetNote(null)
        SetTurbo(false)
        setFrytki(false)
        setBataty(false)
        setKrazki(false)
        setKulki(false)
    }

    const add = () => {
        Item.note = Note
        Item.dodatkowe_mieso = Turbo
        Item.frytki = frytki
        Item.kulki = Kulki
        Item.krazki = krazki
        Item.bataty = bataty;
        let together = 0;
        (Item.frytki ? together+=7 : null);
        (Item.dodatkowe_mieso ? together+=9 : null);
        (Item.bataty ? together+=9 : null);
        (Item.krazki ? together+=9 : null);
        (Item.kulki ? together+=10 : null);
        together += parseFloat(Item.price)
        AddToCart(Item,together)
        SetDisplayed(false)
        SetCartLen(CartLen + 1)
        SetItem({id: 15, title: 'Hamburger', description: 'Smaczny Hamburgerson',ingredients: '["salami","ser"]'})
        SetNote(null)
        SetTurbo(false)
        setFrytki(false)
        setBataty(false)
        setKrazki(false)
        setKulki(false)
    }


    const HandleNote = (e) => {
        SetNote(e.target.value)
    }
    
    const AddToCart = (item,add) => {
        console.log(item)
        console.log(add)
        axios.post('/api/cart', {
            'cart': item,
            'price': add
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
            SetCategories(data[data.length - 1]['category'])
            var menu = (response.data).slice(0,-1)
            SetMenu(menu)
            
        })
               
    }

    const handlecatchange = (e) => {
        var element = document.getElementById(selectedCategory)
        element.classList.remove('text-white')
        SetselectedCategory(e.target.textContent)
        Setitemloading(true)
        Setwidth(e.target.offsetWidth)
        Setleftmargin(e.target.offsetLeft)
        e.target.classList.add('text-white')
        window.scrollTo(0, 0);
        setTimeout(() => {Setitemloading(false)},300)
    }


    const showMenu = () => {
        return( 
            filtered.map((food,k) =>
            <motion.div key={k} variants={{
                hidden: {opacity:0, y: -50 * k},
                visible: (k) => ({
                    opacity:1,
                    y: 0,
                    transition: {delay: k * 0.06, duration: 0.55}
                }),
                end: {opacity:0}
            }} 
            initial='hidden' animate='visible' exit='end' onClick={() => DisplayItem(food.id)} value={food.id} className="mx-auto px-3 py-4 shadow-lg flex bg-light-gray border-[1.5px] border-gray-800 mt-6 h-36 rounded-xl">
            <div className="w-[100px] flex-none  ml-0 h-[100px] my-auto rounded-full">
            <img className='w-[100px] object-cover h-[100px] rounded-2xl' src={food.image}></img>
            </div>
            <div className='flex ml-4 mr-auto flex-col'>
                <h1 className="text-[0.95rem] font-medium mr-3 overflow-hidden truncate line-clamp-1 text-white">{food.title}</h1>
                <p className="whitespace-normal text-gray-500 max-h-[242px] line-clamp-2 mr-4 mt-1 overflow-hidden truncate text-sm">{food.description}</p>
                <div className='flex bg-red-burger rounded-md mb-0 mt-auto w-16'><h2 className="font-semibold m-auto p-1 text-center text-gray-50 text-[0.9rem] mt-auto mb-0">{food.price} zł</h2></div>
                
            </div>
            
            
            {/* <button value={food.id} onClick={DisplayItem} className='absolute transition-all text-sm font-semibold bg-dark-gray text-orange-burger hover:scale-105 duration-300 bottom-3 right-3 p-[0.3rem] border-2 border-dark-gray rounded-md'>Dodaj do koszyka</button> */}
        </motion.div>
        )
        )
    }

    const log = (e) => {
        if (e.target.scrollLeft > 10) {
            setLeft(true)
        }
        else {
            setLeft(false)
        }
    }

    const rog = (e) => {
        var element = document.getElementById('scr')
        let width = element.offsetWidth

        if (width < 540){
            if ((508 - (e.target.offsetWidth + e.target.scrollLeft)) < 10) {
                setRight(false)
            }
            else {
                setRight(true)
            }
        }


    }
    
    const renderleftarrow = () => {
        return (
            <div className="absolute z-20 bg-light-gray/50 rounded-full top-[0.19rem]">
                <RiArrowLeftSLine className="w-6 h-6 text-red-burger"/>
            </div>
        )
    }

    const renderrightarrow = () => {
        return (
            <div className="absolute z-20 bg-light-gray/50 rounded-full right-0 top-[0.19rem]">
                <RiArrowRightSLine className="w-6 h-6 text-red-burger"/>
            </div>
        )
    }

    const renderAll = () => (
        <>
        <div className="fixed w-[90%]">
        {left ? renderleftarrow() : null}
        {right ? renderrightarrow() : null}

        <div id='biga' onScroll={(e) => {rog(e), log(e)}} className="flex cursor-pointer scroll z-10 flex-nowrap w-full pr-2 relative bg-dark-gray pb-4 text-lg text-text-gray font-semibold overflow-auto">
                <div style={{width: width, left: leftmargin}} className="absolute transition-all h-[3px] bg-red-burger top-7 rounded-lg"></div>
                <h3 id='Przystawki' onClick={(e) =>{handlecatchange(e)}} className='flex-0  border-red-burger text-white'>Przystawki</h3>
                <h3 id='Burgery' onClick={(e) =>{handlecatchange(e)}} className='ml-3  border-red-burger flex-0 '>Burgery</h3>
                <h3 id='Sałatki' onClick={(e) =>{handlecatchange(e)}} className='ml-3  border-red-burger flex-0 '>Sałatki</h3>
                <h3 id='Dla Dzieci' onClick={(e) =>{handlecatchange(e)}} className='ml-3  border-red-burger flex-0 '>Dla Dzieci</h3>
                <h3 id='Napoje' onClick={(e) =>{handlecatchange(e)}} className='ml-3  border-red-burger flex-0 '>Napoje</h3>
                <h3 id='Desery' onClick={(e) =>{handlecatchange(e)}} className='ml-3  border-red-burger flex-0 '>Desery</h3>
            </div>
            </div>
            <div className='pt-6'>
            {/* {loading ? renderLoading() : null} */}
            {/* <div className="mb-6">
                {renderAll}
            </div> */}
            <div>
            <AnimatePresence>
            {Displayed ? ItemDetails() : itemloading ? null : showMenu()}
            </AnimatePresence>
            </div>
            <div className="flex h-7"> </div>
            </div>
        </>
    )


    const renderLoading = () => {
        return(
          <div className="top-0 z-20 flex flex-col left-0 bottom-0 right-0 fixed bg-dark-gray">
            <div className="w-[300px] mt-32 mx-auto h-[350px]">
            <dotlottie-player
                    src='/staticfiles/images/burgerek.lottie'
                    autoplay
                    loop
                    style={{ height: '100%', width: '100%' }}
            />
                      <div className="text-center text-white font-bold -mt-9 text-3xl">Witamy w <br/>Wół I Stół!</div>
            </div>
          </div>
        )
      }
    

    const mieso = (e) => {
        SetTurbo(e.target.checked)
    }


    const renderNavBar = () => {
        return(
            <>
            <Navbar cartlen={CartLen} />
            </>
        )
     }

    const dodatkowe_mieso = (e) => {
        if (e.category === 'Burgery') {
            return(
                <div className='text-white mt-[18px] flex text-[0.9rem] font-semibold'>
                    <input onChange={mieso} className='my-auto w-[1.4rem] h-[1.4rem] rounded bg-light-gray text-red-burger focus:ring-1 focus:ring-offset-2 focus:ring-red-burger' type='checkbox'></input>
                    <label className='ml-2 my-auto'>Turbodoładowanie - dodatkowe mięso (9zł)</label>
                </div>
            )
        }
        else {
            null
        }
    }

    const dodatki_lista = (e) => {
        if (e.category === 'Burgery') {
            return (
                <div className='flex mt-4 w-full flex-col'>
                <h2 className='mx-auto text-lg text-white font-semibold'>Dodaj do zestawu</h2>
                <div className='flex text-gray-300 mt-2 text-base font-semibold flex-col'>
                    <div>
                        <input onChange={(e) => {setFrytki(e.target.checked)}} className='w-[1.4rem] h-[1.4rem] rounded bg-light-gray text-red-burger focus:ring-1 focus:ring-offset-2 focus:ring-red-burger' type='checkbox'></input>
                        <label className='ml-2 '>Frytki (7zł)</label>
                    </div>
                    <div className='mt-4'>
                        <input onChange={(e) => {setKulki(e.target.checked)}} className='w-[1.4rem] h-[1.4rem] rounded bg-light-gray text-red-burger focus:ring-1 focus:ring-offset-2 focus:ring-red-burger' type='checkbox'></input>
                        <label className='ml-2 '>Kulki serowe (10zł)</label>
                    </div>
                    <div className='mt-4'>
                        <input onChange={(e) => {setBataty(e.target.checked)}} className='w-[1.4rem] h-[1.4rem] rounded bg-light-gray text-red-burger focus:ring-1 focus:ring-offset-2 focus:ring-red-burger' type='checkbox'></input>
                        <label className='ml-2 '>Bataty (9zł)</label>
                    </div>
                    <div className='mt-4'>
                        <input onChange={(e) => {setKrazki(e.target.checked)}} className='w-[1.4rem] h-[1.4rem] rounded bg-light-gray text-red-burger focus:ring-1 focus:ring-offset-2 focus:ring-red-burger' type='checkbox'></input>
                        <label className='ml-2 '>Krążki cebulowe (9zł)</label>
                    </div>
                </div>
                </div>
            )
        }
    }


    const ItemDetails = () => {
        return (
            <motion.div animate={{opacity: 1}} initial={{opacity: 0}} exit={{opacity: 0}}>
            {/* <div onClick={CloseDetails} className="top-0 z-20 left-0 transition-all bottom-0 right-0 fixed bg-gray-800/70  "></div> */}
            <div className="fixed rounded-lg flex flex-col px-[5%] z-50 left-0 right-0 m-auto top-0 bottom-0 w-screen min-h-screen bg-dark-gray">
                <div className="fixed z-30 top-0 flex py-3 w-[90%]"><div onClick={CloseDetails} className="my-auto mr-0 ml-auto"><MdClear className='h-8 text-dark-gray  bg-red-burger rounded-lg w-8' /></div> 
                </div>
                <div className="relative w-full  overflow-auto scroll h-full flex-col flex py-[4.25rem] items-center">
                    <div className="flex flex-col w-full my-auto text-gray-200 items-center">
                    <img className='rounded-2xl object-cover w-56 h-44' src={Item.image}></img>
                    <div className='text-xl mt-[18px] font-bold leading-7 text-white '>{Item.title}</div>
                    <p className="mt-[18px] text-center text-sm text-gray-400 font-semibold">{Item.description}</p>
                    {dodatkowe_mieso(Item)}
                    {dodatki_lista(Item)}
                    <textarea onChange={HandleNote} placeholder="Dodaj notatkę do dania" className='mt-6 w-full mb-24 resize-none h-28 rounded-lg border-gray-600 p-3 focus:border-gray-300 focus:ring focus:ring-red-burger text-gray-300 bg-light-gray focus:ring-opacity-50'></textarea>
                    </div>
                </div>
                <div className='fixed bg-dark-gray bottom-0 py-4 w-[90%]'>
                <button onClick={add} className=" py-3 bg-red-burger w-full text-gray-100 tracking-wide text-lg font-semibold border-dark-gray rounded-lg">{Item.price} zł</button>

                </div>
            </div>
            </motion.div>

        )
    }

    useEffect(() => {
        FetchMenu()
        GetCart()
        setTimeout(() => {Setloading(false)},2000)
    },[])

    return (
        <div id='scr' className="min-h-screen font-poppins w-full h-auto">
        {Displayed ? null : renderNavBar()}
            <div id='home' className="min-h-screen w-full pt-[68px] h-auto px-[5%] lg:px-[15%] bg-dark-gray">
            {loading ? renderLoading() : renderAll()}
            
            </div>
        {Displayed ? null : <Bottom />}
        </div>
    )
}



