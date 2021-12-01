import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './Homepage';
import NotFound from './NotFound';

export default function Ruter() {

    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Homepage />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </Router>
    )



}