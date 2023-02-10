import React from 'react';

import { Link } from 'react-router-dom';

import '../styles/nav-bar.scss';

import GracesLogo from '../img/graces-logo-white-nobg.png';
import NavDrawing from '../img/drawings/delicata.png';

export default function NavBar() {
    return (
        <nav className='nav-bar'>
            <Link to='/'>
                <div className='logo-container'>
                    <img 
                        alt='graces' 
                        className='logo-img'
                        src={GracesLogo}  
                    />
                </div>
            </Link>
            <div className='nav-drawing'>
                <img 
                    alt='welcome to our website' 
                    className='nav-drawing-img'
                    src={NavDrawing} 
                />
            </div>
            <Link className='about-link' to='/about'>
                about
            </Link>
        </nav>
    )
}