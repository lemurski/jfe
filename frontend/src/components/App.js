import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';
import Navbar from './Navbar';
import Homepage from './Homepage';


export default function App() {
    return (
        <>
        <Navbar />
        <Homepage />
        </>
    )
}



const appDiv = document.getElementById('app');

render(<App />, appDiv) 