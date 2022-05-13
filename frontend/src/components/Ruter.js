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


export default function Ruter() {

    return (
        <Router>
            <div className='flex flex-col w-screen'>
            <Routes>
                <Route exact path="/" element={<Glowna />} />
                <Route path="/table/:id" element={<Home />} />
                <Route path='cart' element = {<Cart />} />
                <Route path='kontakt' element = {<Kontakt />} />
                <Route path='orders' element= {<Order />} />
                <Route path='checkout' element={<Checkout />} />
                <Route path='complete' element={<Complete />} />
                <Route path='payment' element={<SelectPayment />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
            <Bottom />
            </div>
        </Router>
    )



}