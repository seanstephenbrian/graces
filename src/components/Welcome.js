import React from 'react';

// stylesheet:
import '../styles/welcome.scss';

// assets:
import GracesLogo from '../img/graces-logo.jpg';
import WelcomeDrawing from '../img/welcome-drawing.jpg';


export default function Welcome() {
    return (
        <div className='welcome-screen'>
            <div className='logo-container'>
                <img src={GracesLogo} className='logo-img' alt='graces'></img>
            </div>
            <div className='welcome-drawing-container'>
                <img src={WelcomeDrawing} className='welcome-drawing-img' alt='graces' />
            </div>
        </div>
    )
}