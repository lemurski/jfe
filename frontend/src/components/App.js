import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';
import Navbar from './Navbar';
import Ruter from './Ruter';



export default function App() {
    return (
        <>
        <Ruter />
        </ >
    )
}



const appDiv = document.getElementById('app');

render(<App />, appDiv) 