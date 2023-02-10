// dependencies:
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

// components:
import About from './About';
import Footer from './Footer';
import Home from './Home';
import NavBar from './NavBar';
import Welcome from "./Welcome";

// styles:
import '../styles/app.scss';

function App() {

    // state:
    const [onWelcomeScreen, setOnWelcomeScreen] = useState(true);

    // render conditions:
    let mainContent;
    // if on welcome screen, show welcome screen :)
    onWelcomeScreen ? 
        mainContent = (
            <Welcome 
                handleWelcomeClick={() => setOnWelcomeScreen(false)} 
            /> 
        ) :
        // otherwise route to the correct main content page:
        mainContent = (
            <>
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
                <Footer />
            </>
        );

    // render:
    return (
        <BrowserRouter>
            <div className="site-wrapper">
                {mainContent}
            </div>
        </BrowserRouter>
    )
}

export default App;