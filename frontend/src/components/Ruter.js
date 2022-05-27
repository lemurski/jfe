import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './Homepage';
import NotFound from './NotFound';
import Cart from './Cart';
import Order from './Orders';
import Checkout from './CheckOut';
import Complete from './Complete';
import SelectPayment from './SelectPayment';
import Home from './Home';
import Glowna from './Glowna';
import Kontakt from './Kontakt';
import Bottom from './Bottom'
import Wybor from './Wybor';
import Kasa from './Kasa';
import Kasa_koszyk from './Kasa_koszyk';
import Klient from './Klient';
import Kasa_platnosc from './Kasa_platnosc';
import ScrollToTop from './ScrollToTop';


export default function Ruter() {

    return (
        <Router>
            <ScrollToTop />
            <div className='flex flex-col w-screen'>
            <Routes>
                <Route exact path="/" element={<Glowna />} />
                <Route path="/table/:id" element={<Home />} />
                <Route path='/cart/:id' element = {<Cart />} />
                <Route path="/kasa" element={<Kasa />} />
                <Route path='/kasa_koszyk' element = {<Kasa_koszyk />} />
                <Route path='/kasa_platnosc' element= {<Kasa_platnosc />} />
                <Route path='/klient' element={<Klient />} />
                <Route path='kontakt' element = {<Kontakt />} />
                <Route path='orders' element= {<Order />} />
                <Route path='/checkout/:id' element={<Checkout />} />
                <Route path='complete' element={<Complete />} />
                <Route path='/payment/:id' element={<SelectPayment />} />
                <Route path='choice' element={<Wybor />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
            </div>
        </Router>
    )



}