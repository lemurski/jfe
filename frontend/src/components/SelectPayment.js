import React, { useState, useEffect} from 'react';
import Navbar from './Navbar';
import axios from 'axios';
import {FaCashRegister} from 'react-icons/fa'
import {BsPhone, BsArrowLeft} from 'react-icons/bs'
import { FaRegMoneyBillAlt } from 'react-icons/fa'
import { Link, useParams } from "react-router-dom";
import Bottom from './Bottom';



// const orderSocket = new WebSocket(
//     'ws://' + window.location.host + '/ws/order_socket/'
//   )

export default function SelectPayment() {

    let {id} = useParams()
    const lnk = ('/checkout/' + id.toString())

    const [Cart,SetCart] = useState([])
    const [CartLen,SetCartLen] = useState(0)
    const [PayCash, setPayCash] = useState(false)
    const [email,setEmail] = useState('')
    const [number,setNumber] = useState(id)
    const [send,setSend] = useState(false)
    const [adress,setAddress] = useState(false)
    const [Total, SetTotal] = useState(0);
    const [Imie,setImie] = useState('')
    const [Ulica,setUlica] = useState('')
    const [Budynek,setBudynek] = useState('')
    const [Kod,setKod] = useState('')
    const [Miasto,setMiasto] = useState('')
    const [Notatka,setNotatka] = useState('')

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

    

    const redirect = () => {
        window.location.href = ('/cart/' + id.toString())
      }

    const Send_delivery = () => {
        let list = Cart.map((x) => ({'id': x.item.id, 'num': x.num, 'note': x.item.note, 'turbo' : x.item.dodatkowe_mieso, 'frytki': x.item.frytki, 'krazki': x.item.krazki,'kulki': x.item.kulki, 'bataty': x.item.bataty}) )
    
        
        
        axios.post('/api/order',{'cart': list,'ulica':Ulica,'imie':Imie,'kod':Kod,'budynek':Budynek,'miasto':Miasto,'notatka':Notatka})

        
        setSend(true)    
    
        
   }

   const Send = () => {
    let list = Cart.map((x) => ({'id': x.item.id, 'num': x.num, 'note': x.item.note, 'turbo' : x.item.dodatkowe_mieso, 'frytki': x.item.frytki, 'krazki': x.item.krazki,'kulki': x.item.kulki, 'bataty': x.item.bataty}) )

    
    
    axios.post('/api/order',{'cart': list,'table':number})

    
    setSend(true)    

    
}

   useEffect(() => {
    if (send === true) {
        window.location.href = '/complete'; 
     }
   },[send])

   const showMenu = Cart.map((food, key) => (
    <div
      key={key}
      className="mx-auto py-3 w-[100%] h-auto rounded-lg"
    >
      <div className="flex text-base font-medium text-gray-200 w-full">
        <div className="flex flex-col">
          <h1 className="text-base font-medium leading-7">
            {food.item.title} x {food.num}
          </h1>
          {food.item.note ? (
            <div className="text-sm text-gray-400">{food.item.note}</div>
          ) : null}
          {food.item.dodatkowe_mieso ? (
            <div className="text-sm text-gray-400">Turbodoładowanie</div>
          ) : null}
        </div>
        <div className="flex flex-col mr-0 ml-auto my-auto">
          <div className="text-center mr-0 text-gray-100 ml-auto py-1 px-2 bg-red-burger rounded-lg text-base">
            {(parseFloat(food.item.price) * parseFloat(food.num)).toFixed(2)} zł
          </div>
        </div>
      </div>
    </div>
  ));


    useEffect(() => {
        GetCart()
    },[])

    const renderaddresses = () => {
        return (
            <div className="flex m-auto pt-[85px] flex-col w-full">
            <form onSubmit={() =>{setAddress(true)}}className="w-full flex flex-col p-3 h-auto justify-between bg-light-gray shadow-lg rounded-md">
                <h2 className="text-white text-xl font-semibold">Dane do dostawy</h2>
                <div className="mt-2">
                <label htmlFor='text' className='text-[0.93rem]  text-gray-300 ml-[2px]'>Imię i nazwisko</label>
                <input type="text" placeholder="Wpisz swoje imię i nazwisko" autoComplete='off' required id='imie' value={Imie} onChange={(event) => { setImie(event.target.value)}} className="bg-payment-gray mt-1 block shadow-lg w-full text-gray-400 transition-all rounded-md border-gray-500 p-3 focus:border-gray-300 focus:ring focus:ring-red-burger focus:ring-opacity-75 "/>
                </div>
                
                <div className="mt-4">
                    <label htmlFor='text' className='text-[0.93rem]  text-gray-300 ml-[2px]'>Ulica</label>
                    <input type="text" placeholder="Wpisz swoją ulicę" autoComplete='off' required id='ulica' value={Ulica} onChange={(event) => { setUlica(event.target.value)}} className="bg-payment-gray mt-1 block shadow-lg w-full text-gray-400 transition-all rounded-md border-gray-500 p-3 focus:border-gray-300 focus:ring focus:ring-red-burger focus:ring-opacity-75 "/>
                </div>
                <div className="mt-4">
                    <label htmlFor='text' className='text-[0.93rem]  text-gray-300 ml-[2px]'>Numer budynku</label>
                    <input type="text" placeholder="Wpisz numer budynku" autoComplete='off' required id='budynek' value={Budynek} onChange={(event) => { setBudynek(event.target.value)}} className="bg-payment-gray mt-1 block shadow-lg w-full text-gray-400 transition-all rounded-md border-gray-500 p-3 focus:border-gray-300 focus:ring focus:ring-red-burger focus:ring-opacity-75 "/>
                </div>
                <div className="mt-4">
                    <label htmlFor='text' className='text-[0.93rem]  text-gray-300 ml-[2px]'>Kod pocztowy</label>
                    <input type="text" placeholder="Wpisz swój kod pocztowy" autoComplete='off' required id='pocztowy' value={Kod} onChange={(event) => { setKod(event.target.value)}} className="bg-payment-gray mt-1 block shadow-lg w-full text-gray-400 transition-all rounded-md border-gray-500 p-3 focus:border-gray-300 focus:ring focus:ring-red-burger focus:ring-opacity-75 "/>
                </div>
                <div className="mt-4">
                    <label htmlFor='text' className='text-[0.93rem]  text-gray-300 ml-[2px]'>Miasto</label>
                    <input type="text" placeholder='Wpisz swoje miasto' autoComplete='off' required id='miasto' value={Miasto} onChange={(event) => { setMiasto(event.target.value)}} className="bg-payment-gray mt-1 block shadow-lg w-full text-gray-400 transition-all rounded-md border-gray-500 p-3 focus:border-gray-300 focus:ring focus:ring-red-burger focus:ring-opacity-75 "/>
                </div>
                <div className="mt-4">
                    <label htmlFor='text' className='text-[0.93rem]  text-gray-300 ml-[2px]'>Numer telefonu</label>
                    <input type="text" placeholder="Wpisz swój numer telefonu" autoComplete='off' required id='telefon' className="bg-payment-gray mt-1 block shadow-lg w-full text-gray-400 transition-all rounded-md border-gray-500 p-3 focus:border-gray-300 focus:ring focus:ring-red-burger focus:ring-opacity-75 "/>
                </div>
                <div className="mt-4">
                    <label htmlFor='text' className='text-[0.93rem]  text-gray-300 ml-[2px]'>Dodaj notatkę (opcjonalne)</label>
                    <input type="text" placeholder='Np. Proszę nie dzwonić do drzwi' autoComplete='off' id='delivery_note' value={Notatka} onChange={(event) => { setNotatka(event.target.value)}} className="bg-payment-gray mt-1 block shadow-lg w-full text-gray-400 transition-all rounded-md border-gray-500 p-3 focus:border-gray-300 focus:ring focus:ring-red-burger focus:ring-opacity-75 "/>
                </div>
                
                
                <button className="bg-red-burger shadow-red-burger/50 shadow-neon-shadow text-white font-semibold mb-0 mt-7 rounded-md p-3" id="submit">
                    Do płatności
                </button>
            </form>
            <button onClick={redirect} className="text-red-burger text-lg font-semibold mt-4 rounded-md py-3 mx-auto w-[150px]">
                    Cofnij
                </button>
        </div>
        )
    }

    const renderPayCash = () => {
        if (id === 'delivery') {
            return(
            <div className="flex h-screen pt-[68px] flex-col w-full">
                <div onClick={() => {setPayCash(false)}}>
                <BsArrowLeft className='w-8 h-8 text-red-burger' />
                </div>
                <div className="bg-light-gray p-3 mt-6 flex-col flex w-full shadow-lg rounded-md">
                <div className="text-white text-xl font-semibold">Szczegóły zamówienia</div>
                {showMenu}
                </div>
                <div className="bg-light-gray p-3 mt-6 text-gray-200 flex-col flex w-full shadow-lg rounded-md">
                    <h2 className="text-white text-xl font-semibold">Adres zamówienia</h2>
                    <p className='mt-2'>Imię i nazwisko - {Imie}</p>
                    <p className='mt-2'>Ulica - {Ulica}</p>
                    <p className='mt-2'>Numer budynku - {Budynek}</p>
                    <p className='mt-2'>Kod pocztowy - {Kod}</p>
                    <p className='mt-2'>Miasto - {Miasto}</p>
                    {Notatka ? <p className='mt-2'>Notatka - {Notatka}</p> : null }
                </div>
                <div className="w-full py-4 bg-dark-gray mt-auto mb-0 text-gray-200 flex flex-col">
                    <div className="flex">
                        <div className="text-lg font-semibold mb-3">Podsumowanie</div>
                        <div className="text-lg font-semibold ml-auto mr-0">
                            {Total.toFixed(2)} zł
                        </div>
                    </div>
                    <button onClick={() => {Send_delivery()}} className="bg-red-burger text-white mt-4 rounded-md py-3 mx-auto w-full">
                        Zamawiam i płacę
                    </button>
                </div>
                
            </div>
            )
        }
        else {
            return (
                <div className="flex m-auto flex-col w-full">
                    <form onSubmit={Send} className="w-full flex flex-col p-3 h-72 justify-between bg-light-gray shadow-lg rounded-md">
                        <div>
                        <label htmlFor='text' className='text-[0.93rem] text-white ml-[2px]'>Imię i nazwisko</label>
                        <input type="text" placeholder="Imię i nazwisko" autoComplete='off' required id='email' value={email} onChange={(event) => { setEmail(event.target.value)}} className="bg-payment-gray mt-1 block shadow-lg w-full text-gray-400 transition-all rounded-md border-gray-500 p-3 focus:border-gray-300 focus:ring focus:ring-red-burger focus:ring-opacity-75 "/>
                        </div>
                        <div>
                        <label htmlFor='text' className='text-[0.93rem] text-white ml-[2px]'>Numer stolika</label>
                         <select onChange={(e) => {setNumber(e.target.value)}} defaultValue={id} autoComplete='off' className="bg-payment-gray mt-1 block shadow-lg w-full text-gray-400 transition-all rounded-md border-gray-500 p-3 focus:border-gray-300 focus:ring focus:ring-red-burger focus:ring-opacity-50 ">
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
                        </div>
                        <button className="bg-red-burger shadow-red-burger/50 shadow-neon-shadow text-white font-semibold mb-0  rounded-md p-3" id="submit">
                            Zamawiam i płacę przy kasie
                        </button>
                    </form>
                    <button onClick={() => {setPayCash(false)}} className="bg-red-burger text-white mt-6 rounded-md py-3 mx-auto w-[150px]">
                            Cofnij
                        </button>
                </div>
            )
        }
        
    }

    const renderOptions = () => {
        if (id === 'delivery') {
            return (
                <div className="flex m-auto flex-col w-full">
                    <div onClick={() => {setPayCash(true)}} className="w-full flex flex-col p-3 bg-light-gray h-48 shadow-lg rounded-md ">
                        <div className="flex flex-col my-auto">
                        <FaRegMoneyBillAlt className="w-16 h-16 text-red-burger mx-auto" />
                        <div className="text-2xl mt-5 mx-auto text-center text-gray-100 font-semibold">Zapłać przy odbiorze</div>
                        </div>
                    </div>
                    <Link to={lnk} className="w-full flex flex-col mt-6 shadow-lg p-3 h-48 rounded-md bg-light-gray">
                        <div className="flex flex-col my-auto">
                        <BsPhone className="w-16 text-red-burger h-16 mx-auto" />
                        <div className="text-2xl mt-5 mx-auto text-center text-gray-100 font-semibold">Zapłać przez internet</div>
                        </div>
                    </Link>
                    <button onClick={() =>{setAddress(false)}} className="p-2 bg-red-burger text-lg rounded-md text-white font-semibold mt-4">Cofnij</button>
                </div>
            )
        }
        else {
            return(
                <div className="flex m-auto flex-col w-full">
                    <div onClick={() => {setPayCash(true)}} className="w-full flex flex-col p-3 bg-light-gray h-48 shadow-lg rounded-md ">
                        <div className="flex flex-col my-auto">
                        <FaRegMoneyBillAlt className="w-16 h-16 text-red-burger mx-auto" />
                        <div className="text-2xl mt-5 mx-auto text-center text-gray-100 font-semibold">Zapłać przy kasie</div>
                        </div>
                    </div>
                    <Link to={lnk} className="w-full flex flex-col mt-6 shadow-lg p-3 h-48 rounded-md bg-light-gray">
                        <div className="flex flex-col my-auto">
                        <BsPhone className="w-16 text-red-burger h-16 mx-auto" />
                        <div className="text-2xl mt-5 mx-auto text-center text-gray-100 font-semibold">Zapłać przez telefon</div>
                        </div>
                    </Link>
                </div>
            )
        }
       
    }

    const delvstables = () => {
        if (id === 'delivery'){
            return(
                adress ? renderall() : renderaddresses()
            )
            }
        else {
            return(
            renderall()
            )
         }
        
    }

    const renderall = () => {
        if (PayCash) {
            return(
            renderPayCash()
            )
        }
        else {
            return(
            renderOptions()
            )
        }
    }

    return(
        <div className="min-h-screen w-full h-auto">
            <div id='home' className="relative flex flex-col min-h-screen w-full px-[5%] lg:px-[15%] transition-all duration-500 bg-dark-gray">
            <Navbar cartlen={CartLen} />
            {delvstables()}
        </div>
        <Bottom />

        </div>
    )
}