import React, { useState, useEffect } from 'react';
import axios from 'axios'

var es = new ReconnectingEventSource('/events/');



export default function Klient() {
    
    const [Cart,SetCart] = useState([])
    const [Total, SetTotal] = useState(0);


    useEffect(() => {
        es.addEventListener('kasa', function (e) {
            GetCart();
            console.log('uno')
        }, false);
        GetCart()

    },[] )

    
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
          SetTotal(total);
        })
    }

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
          {food.item.frytki ? (
            <div className="text-sm text-gray-400">Fytki</div>
          ) : null}
          {food.item.kulki ? (
            <div className="text-sm text-gray-400">Kulki serowe</div>
          ) : null}
          {food.item.krazki ? (
            <div className="text-sm text-gray-400">Krazki cebulowe</div>
          ) : null}
          {food.item.bataty ? (
            <div className="text-sm text-gray-400">Bataty</div>
          ) : null}
        </div>
            <div className="flex flex-col mr-0 ml-auto my-auto">
              <div className="text-center mr-0 text-gray-100 ml-auto py-1 px-2 bg-red-burger rounded-lg text-base">
              {(food.price_combined.toFixed(2))} zł
              </div>
            </div>
          </div>
        </div>
      ));

    return(
        <div className="w-full min-h-screen flex flex-col bg-dark-gray p-10">
            <div className="text-red-burger font-Coustard text-4xl mb-5 text-center">Twoje Zamówienie</div>
            {showMenu}
            <div className="flex text-white mt-auto mb-0">
              <div className="text-lg  font-semibold mb-3">Podsumowanie</div>
              <div className="text-lg font-semibold ml-auto mr-0">
                {Total.toFixed(2)} zł
              </div>
            </div>
        </div>
    )
}