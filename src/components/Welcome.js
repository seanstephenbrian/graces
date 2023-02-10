import React from 'react';

// stylesheet:
import '../styles/welcome.scss';

// assets:
import GracesLogo from '../img/graces-logo.jpg';
import WelcomeDrawing from '../img/welcome-drawing.jpg';

export default function Welcome(props) {
    // props:
    const { handleWelcomeClick } = props;

    // render:
    return (
        <div className='welcome-screen'>
            <div className='logo-container'>
                <img 
                    alt='graces' 
                    className='logo-img'
                    onClick={handleWelcomeClick}
                    src={GracesLogo}  
                />
            </div>
            <div className='welcome-drawing-container'>
                <img 
                    alt='graces' 
                    className='welcome-drawing-img'
                    onClick={handleWelcomeClick} 
                    src={WelcomeDrawing} 
                />
            </div>
        </div>
    )
}