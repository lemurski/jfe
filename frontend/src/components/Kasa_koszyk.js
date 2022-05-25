import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import { Link, useParams } from "react-router-dom";
import {TiShoppingCart} from "react-icons/ti"
import CheckoutForm from "./CheckoutForm";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import {FaHamburger} from "react-icons/fa";


export default function Kasa_koszyk(props) {
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

  const renderNavBar = () => {
    return(
        <div className="fixed top-0 flex z-30 dark:bg-dark-gray dark:backdrop-blur-lg  items-center px-[5%] lg:px-[15%] py-3 left-0 h-[4.25rem] w-full ">
        <Link to='/kasa' className="flex dark:text-red-burger text-dark-gray transition-all cursor-pointer items-center hover:scale-105 ease-in-out duration-500">
            <FaHamburger className="w-10 h-10"/>
            <div className="ml-2 sm:flex hidden transition-all text-2xl font-semibold">Stół Na Wół</div>
        </Link>
        
        <Link to='/kasa_koszyk' className="w-12 h-12 relative ml-auto mr-0 hover:scale-105 transition-all bg-dark-gray text-white duration-300 rounded-lg flex dark:bg-red-burger">
        <TiShoppingCart className="w-7 h-7 text-white dark:text-dark-gray m-auto" />
        <div className="absolute right-0 rounded-tl-lg rounded-br-lg text-lg text-center bg-white text-dark-gray w-5 h-5 flex leading-none bottom-0"><span className="m-auto">{CartLen}</span></div>
        </Link>
    </div>
    )
 }          

  const renderpayment = () => {
    if (CartLen) {
      return (
        <>
          <div
            id="home"
            className="relative flex flex-col w-full h-auto px-[4%] mb-[128px] min-h-full lg:px-[15%] transition-all duration-500 "
          >
            <div className="flex flex-col overflow-scroll mt-[92px] mb-auto">
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
              to='/kasa_platnosc'
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
          className="relative flex flex-col w-full h-auto px-[4%] mb-[128px] min-h-full lg:px-[15%] transition-all duration-500 "
        >
          <div className="w-full m-auto flex flex-col p-3 bg-light-gray h-96 shadow-lg rounded-md ">
          <TiShoppingCart className="w-32 h-32 text-red-burger mt-5 mx-auto" />
          <h2 className="text-gray-200 text-center font-bold mt-3 text-xl">Twój koszyk jest pusty</h2>
          <p className='text-gray-400 text-center font-semibold'>Wygląda na to że nic jeszcze nie zamówiłeś</p>
          <Link to='/kasa' className="flex mx-auto mt-8 bg-red-burger transition-all text-white cursor-pointer w-[150px] h-12 rounded-md items-center hover:scale-105 ease-in-out duration-500">
          <h2 className="mx-auto font-bold">Powrót do menu</h2>
          </Link>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="min-h-screen w-full bg-dark-gray h-auto">
      {renderNavBar()}
      {renderpayment()}
    </div>
  );
}
