import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import { Link, useLocation } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

export default function Cart(props) {
  const location = useLocation();
  const [Cart, SetCart] = useState([]);
  const [CartLen, SetCartLen] = useState(0);
  const [Total, SetTotal] = useState(0);

  axios.defaults.xsrfCookieName = "csrftoken";
  axios.defaults.xsrfHeaderName = "X-CSRFToken";

  const GetCart = () => {
    axios.get("/api/get_cart").then((response) => {
      SetCart(response.data);
      console.log(response.data);
      let len = 0;
      var total = 0;
      for (const i of response.data) {
        len += i.num;
        total += parseFloat(i.item.price) * parseFloat(i.num);
      }

      console.log(total);
      SetCartLen(len);
      SetTotal(total);
    });
  };

  useEffect(() => {
    GetCart();
  }, []);

  const increase = (e) => {
    let c = Cart

    c[e].num += 1;       

    axios.post('/api/set_cart', {
        'cart': c,
    }).then((response) => {
        SetCart(response.data)
        let len = 0;
        var total = 0;
        for (const i of response.data) {
            len += i.num;
            total += parseFloat(i.item.price) * parseFloat(i.num);
        }
        SetCartLen(len);
        SetTotal(total);
    })

  }

  const decrease = (e) => {
      let c = Cart

      c[e].num -= 1;

      if (c[e].num === 0) {
          c.splice(e, 1);
      }
         

      axios.post('/api/set_cart', {
        'cart': c,
    }).then((response) => {
        SetCart(response.data)
        let len = 0;
        var total = 0;
        for (const i of response.data) {
            len += i.num;
            total += parseFloat(i.item.price) * parseFloat(i.num);
        }
        SetCartLen(len);
        SetTotal(total);
    })
  }

  const showMenu = Cart.map((food, key) => (
    <div
      key={key}
      className="mx-auto w-[100%] relative p-3 border-2 shadow-lg border-dark-gray mt-5 h-auto rounded-lg"
    >
      <div className="flex w-full">
        <div className="flex flex-col">
          <h1 className="text-base font-bold leading-7 text-gray-900">
            {food.item.title} x {food.num}
          </h1>
          {food.item.note ? (
            <div className="text-sm">{food.item.note}</div>
          ) : null}
        </div>
        <div className="flex flex-col mr-0 ml-auto my-auto">
          <div className="font-semibold text-right text-base">
            {(parseFloat(food.item.price) * parseFloat(food.num)).toFixed(2)} zł
          </div>
          <div className="flex mt-6">
            <AiOutlineMinus onClick={() => {decrease(key)}} className='mr-10 w-6 h-6' />
            <AiOutlinePlus onClick={() => {increase(key)}}className=" w-6 h-6" />
          </div>
        </div>
      </div>
    </div>
  ));

  

  return (
    <div className="min-h-screen w-full h-auto">
      <div
        id="home"
        className="relative flex flex-col min-h-screen w-full h-auto px-[4%] lg:px-[15%] transition-all duration-500 bg-orange-burger"
      >
        <Navbar cartlen={CartLen} />
        <div className="flex flex-col mt-[92px] mb-auto">
          <div className="text-lg font-bold">Twoje Zamówienie</div>
          {showMenu}
        </div>
        <div className="w-full mb-4 mt-4 flex flex-col">
          <div className="flex">
            <div className="text-lg font-semibold mb-3">Podsumowanie</div>
            <div className="text-lg font-semibold ml-auto mr-0">
              {Total.toFixed(2)} zł
            </div>
          </div>
          <Link
            to="/payment"
            className="rounded w-full shadow-lg py-3 text-center tracking-wide bg-dark-gray text-orange-burger font-bold"
          >
            Płatność
          </Link>
        </div>
      </div>
    </div>
  );
}
