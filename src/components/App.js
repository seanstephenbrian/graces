// dependencies:
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

// components:
import Home from './Home';
import Welcome from "./Welcome";

// styles:
import '../styles/app.scss';

function App() {
    // state:
    const [onWelcomeScreen, setOnWelcomeScreen] = useState(true);

    return (
        <div className="site-wrapper">
            {onWelcomeScreen? <Welcome /> : <Home />}
        </div>
    )
}

export default App;