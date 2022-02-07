import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './Homepage';
import NotFound from './NotFound';
import Cart from './Cart';
import Order from './Orders';
import Checkout from './CheckOut';


export default function Ruter() {

    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Homepage />} />
                <Route path='cart' element = {<Cart />} />
                <Route path='orders' element= {<Order />} />
                <Route path='checkout' element={<Checkout />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </Router>
    )



}