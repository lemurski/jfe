import React, {useState, useEffect} from 'react'
import Navbar from './Navbar'
import axios from 'axios'

var es = new ReconnectingEventSource('/events/');



export default function Order() {

    const [Orders,SetOrders] = useState([])
    const [UnPaid,SetUnPaid] = useState([])

    
    
    

    
    const GetCart = () => {
        axios.get('/api/get_orders').then((response) => {

            let data = response.data

            const payed = data.filter(item => item.payed === true)
            const unpaid = data.filter(item => item.payed === false)

            SetOrders(payed)
            SetUnPaid(unpaid)
            console.log(response.data)
        })
    }

    const changePaid = (e) => {
        axios.post('/api/set_paid',{'id': e.target.value}).then(response => {
            console.log(response.data)  
            GetCart()
        })
    }

    useEffect(() => {
        es.addEventListener('message', function (e) {
            GetCart();
            console.log('uno')
        }, false);
        GetCart()

    },[] )

    

    
    const DeleteOrder = (e) => {

        axios.post('/api/delete_order', {
            'id' : e.target.value
        }).then((response) => {
            GetCart()
        })
    }

    const rendertable = (e) => {
        return (
            <>
            <div>Nr stolika - {e.table}</div>
            <div>Nr zamówienia - {e.code}</div>
            </>
        )
    }

    const renderdelivery = (e) => {
        return (
            <>
            <div>Ulica - {e.ulica} {e.budynek}</div>
            <div>Kod Pocztowy - {e.kod}</div>
            </>
        )
    }

    const rendervs = (e) => {
        if (e.delivery === true) {
            return (
                renderdelivery(e)
            )
        }
        else {
            return (
                rendertable(e)
            )
        }
    }

    const showMenu = (Orders).map((order,key) => 

        <div key={key} className="w-[50%] relative p-3 flex flex-col bg-gray-50 mt-5 min-h-64 rounded-lg">
            
            {order.ordered.map((item, key) =>
                <div className='text-xl font-semibold' key={key}>
                    {item.number} x {item.item} {item.note ? ('- ' + item.note) : null} {item.dodatkowe_mieso ? ('- Turbo') : null} {item.frytki ? ('Frytki,') : null} {item.kulki ? ('Kulki serowe') : null} {item.krazki ? ('Krazki') : null} {item.bataty ? ('Bataty') : null}
                </div>
            )}
            
            <div className="flex flex-col mt-3 w-fit border-2 border-black rounded-sm text-base px-2">
                {rendervs(order)}
            </div>    
        <div className='w-full mt-3 flex mb-0'>
                <button value={order.id} onClick={DeleteOrder} className='w-full bg-lime-500 text-white mx-auto py-3 rounded'>DONE</button>
        
        </div>
        
        </div>

           
    )


    const showUnpaid = (UnPaid).map((order,key) => 

        <div key={key} className="w-[80%] relative p-3 flex flex-col bg-gray-50 mt-5 min-h-64 rounded-lg">  
            {order.ordered.map((item, key) =>
                <div className='text-xl font-semibold' key={key}>
                    {item.number} x {item.item} {item.note ? ('- ' + item.note) : null} {item.dodatkowe_mieso ? ('- Turbo,') : null} {item.frytki ? ('Frytki,') : null} {item.kulki ? ('Kulki serowe,') : null} {item.krazki ? ('Krazki,') : null} {item.bataty ? ('Bataty,') : null}
                </div>
            )}
        <div className="flex flex-col mt-3 w-fit border-2 border-black rounded-sm text-base px-2">
                {rendervs(order)}
            </div>    
        <div className='w-full mt-3 flex mb-0'>
                <button value={order.id} onClick={changePaid} className='w-full bg-lime-500 text-white mx-auto py-3 rounded'>Zmień na zapłacone</button>
        
        </div>
        </div>

           
    )
    
    
    
    
    return(
        <div className="min-h-screen flex px-6 bg-dark-gray w-full h-auto">
            <div className="w-1/2 min-h-screen border-red-burger border-r-4 h-auto">
            {showUnpaid}
            </div>
            <div id='home' className="relative justify-items-center items-center flex flex-col min-h-screen w-full h-auto px-[5%] transition-all duration-500">
            
            {showMenu}
            
        </div>
        </div>
    )
}