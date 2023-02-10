// dependencies:
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

// components:
import About from './About';
import Home from './Home';
import NavBar from './NavBar';
import Welcome from "./Welcome";

// styles:
import '../styles/app.scss';

function App() {

    // state:
    const [onWelcomeScreen, setOnWelcomeScreen] = useState(true);

    return (
        <BrowserRouter>
            <div className="site-wrapper">
                {
                    onWelcomeScreen ? 
                    <Welcome 
                        handleWelcomeClick={() => setOnWelcomeScreen(false)} 
                    /> :
                    ''
                }
                <NavBar />
                <Routes>
                    <Route 
                        element={<Home />} 
                        path='/' 
                    />
                    <Route 
                        element={<About />} 
                        path='/about' 
                    />
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default App;