import React, {useState, useEffect} from 'react'
import Navbar from './Navbar'
import axios from 'axios'


export default function Order() {

    const [Orders,SetOrders] = useState([])
    
    const GetCart = () => {
        axios.get('/api/get_orders').then((response) => {
            SetOrders(response.data)
        })
    }
    

    useEffect(() => {
        
        const orderSocket = new WebSocket(
            'ws://' + window.location.host + '/ws/order_socket/'
        )
    
        orderSocket.onmessage = (e) => {
            let data = JSON.parse(e.data)
            
            if(data.type === 'addOrder') {
                GetCart()
            }
            else {
                SetOrders(data)
            }            

        }
        
    },[]    )

    

    
    const DeleteOrder = (e) => {

        axios.post('/api/delete_order', {
            'id' : e.target.value
        }).then((response) => {
            GetCart()
        })
    }

    const showMenu = (Orders).map((order,key) => 

        <div key={key} className="mx-auto w-[95%] relative p-3 flex flex-col bg-gray-50 mt-5 h-40 rounded-lg">
            {order.ordered.map((item, key) =>
                <div className='text-xl font-semibold' key={key}>
                    {item.title}
                </div>
            )}
        <div className='w-full flex mt-auto mb-0'>
                <button value={order.id} onClick={DeleteOrder} className='w-1/2 bg-green-400 text-white mx-auto py-3 rounded'>DONE</button>
        
        </div>
        </div>

           
    )
    
    
    
    
    return(
        <div className="min-h-screen w-full h-auto">
            <div id='home' className="dark:bg-dark-gray relative flex flex-col min-h-screen w-full h-auto px-[5%] lg:px-[15%] transition-all duration-500 bg-light-yellow">
            {showMenu}
            
        </div>
        </div>
    )
}