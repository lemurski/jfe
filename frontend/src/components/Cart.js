import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import { Link, useParams } from "react-router-dom";
import {TiShoppingCart} from "react-icons/ti"
import CheckoutForm from "./CheckoutForm";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import {FaFacebookSquare, FaInstagram, FaPhoneAlt, FaMapMarkerAlt} from 'react-icons/fa';

export default function Cart(props) {
  const [Cart, SetCart] = useState([]);
  const [CartLen, SetCartLen] = useState(0);
  const [Total, SetTotal] = useState(0);
  let {id} = useParams()

  const lnk = ('/payment/' + id.toString())
  const men = ('/table/' + id.toString())

  axios.defaults.xsrfCookieName = "csrftoken";
  axios.defaults.xsrfHeaderName = "X-CSRFToken";

  const GetCart = () => {
    axios.get("/api/get_cart").then((response) => {
      SetCart(response.data);
      console.log(response.data);
      let len = 0;
      var total = 0;
      for (const i of response.data) {
        total += i.price_combined
        len += i.num;
        console.log(total)
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
    let c = Cart;

    c[e].num += 1;
    c[e].price_combined = (c[e].num * c[e].price)

    axios
      .post("/api/set_cart", {
        cart: c,
      })
      .then((response) => {
        SetCart(response.data);
        let len = 0;
        var total = 0;
        for (const i of response.data) {
          total += i.price_combined
          len += i.num;
          console.log(total)
        }
        console.log(total)
        SetCartLen(len);
        SetTotal(total);
      });
  };

  const decrease = (e) => {
    let c = Cart;

    c[e].num -= 1;

    if (c[e].num === 0) {
      c.splice(e, 1);
    }
    else {
      c[e].price_combined = (c[e].num * c[e].price)
    }
    console.log(c)
    axios
      .post("/api/set_cart", {
        cart: c,
      })
      .then((response) => {
        SetCart(response.data);
        let len = 0;
        var total = 0;
        for (const i of response.data) {
          total += i.price_combined
          len += i.num;
        }
        SetCartLen(len);
        SetTotal(total);
      });
  };

  const showMenu = Cart.map((food, key) => (
    <div
      key={key}
      className="mx-auto w-[100%] relative p-3 border-2 shadow-lg bg-light-gray border-dark-gray mt-5 h-auto rounded-lg"
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
          <div className="text-center mr-0 ml-auto py-1 px-2 bg-red-burger rounded-lg text-base">
            {(food.price_combined.toFixed(2))} zł
          </div>
          <div className="flex mt-6">
            <AiOutlineMinus
              onClick={() => {
                decrease(key);
              }}
              className="mr-10 w-6 h-6"
            />
            <AiOutlinePlus
              onClick={() => {
                increase(key);
              }}
              className=" w-6 h-6"
            />
          </div>
        </div>
      </div>
    </div>
  ));

  const renderpayment = () => {
    if (CartLen) {
      return (
        <>
          <div
            id="home"
            className="relative flex flex-col w-full h-auto px-[4%] min-h-full lg:px-[15%] transition-all duration-500 "
          >
            <div className="flex flex-col overflow-scroll mt-[92px]">
              <div className="text-lg text-gray-200 font-bold">
                Twoje Zamówienie
              </div>
              {showMenu}
            </div>
          </div>
          <div className="w-full px-[4%] bottom-0 py-4 bg-dark-gray fixed text-gray-200 flex flex-col">
            <div className="flex">
              <div className="text-lg font-semibold mb-3">Podsumowanie</div>
              <div className="text-lg font-semibold ml-auto mr-0">
                {Total.toFixed(2)} zł
              </div>
            </div>
            <Link
              to={lnk}
              className="rounded w-full shadow-lg py-3 text-center tracking-wide bg-red-burger text-white font-bold"
            >
              Płatność
            </Link>
          </div>
        </>
      );
    } else {
      return (
        <div
          id="home"
          className="relative flex flex-col w-full h-auto px-[4%] min-h-screen   m-auto lg:px-[15%] transition-all duration-500 "
        >
          <div className="w-full m-auto flex flex-col p-3 bg-light-gray h-96 shadow-lg rounded-md ">
          <TiShoppingCart className="w-32 h-32 text-red-burger mt-5 mx-auto" />
          <h2 className="text-gray-200 text-center font-bold mt-3 text-xl">Twój koszyk jest pusty</h2>
          <p className='text-gray-400 text-center font-semibold'>Wygląda na to że nic jeszcze nie zamówiłeś</p>
          <Link to={men} className="flex mx-auto mt-8 bg-red-burger transition-all text-white cursor-pointer w-[150px] h-12 rounded-md items-center hover:scale-105 ease-in-out duration-500">
          <h2 className="mx-auto font-bold">Powrót do menu</h2>
          </Link>
          </div>
        </div>
      );
    }
  };

  const bot = () => {
    return (
      <div className='w-full text-gray-200 font-semibold mb-28 flex flex-col h-60 pt-6 px-6 bg-light-gray'>
                <div className='flex'>
                <div className='flex flex-col'>
                    <div className="flex"><FaFacebookSquare className="w-6 my-auto h-6 text-red-burger" />
                    <h3 className=" my-auto ml-2 ">Wół Na Stół</h3>
                    </div>
                    <div className="mt-6 flex"><FaMapMarkerAlt className="w-6 my-auto h-6 text-red-burger" />
                    <h3 className=" my-auto ml-2 ">ul.Ptasia 16b <br/> Zielona Góra</h3>
                    </div>
                </div>
                <div className='flex mr-0 ml-auto flex-col'>
                    <div className='flex'>
                    <h3 className=" my-auto mr-2">@wolnastol</h3>
                    <div className="flex mr-0 ml-auto"><FaInstagram className="w-6 h-6 my-auto text-red-burger" /></div>
                    </div>
                    <div className='flex mt-6'>
                        <h3 className=" my-auto ml-auto mr-2 ">657425870</h3>
                        <div className="mr-0 flex"><FaPhoneAlt className="w-6 my-auto h-6 text-red-burger" /></div>
                    </div>
                </div>
                </div>
                <div className='flex flex-col my-auto'>
                <h3>Godziny otwarcia:</h3>
                <p className='text-sm mt-2'>Poniedziałek-piątek: 13:00-21:00</p>
                <p className='text-sm mt-2'>Sobota-Niedziela: 12:00-19:00</p>
                </div>

            </div> 
    )
  }

  return (
    <div className="min-h-screen w-full flex flex-col bg-dark-gray mb-10">
      <Navbar cartlen={CartLen} />
      {renderpayment()}
      <div>
      {bot()}

      </div>
    </div>
  );
}
