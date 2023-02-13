import React, { useEffect } from 'react';

import { Link } from 'react-router-dom';

import '../styles/about.scss';

import AboutDrawing1 from '../img/drawings/arugula.jpg';
import AboutDrawing2 from '../img/drawings/fennel.jpg';

export default function About() {
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className='about-page'>
            <img 
                alt='drawing of arugula'
                className='about-drawing about-drawing-1'
                src={AboutDrawing1} 
            />
            <p>
                graces is a food pop-up in bucks county, PA,
                specializing in fresh pasta.
            </p>
            
            <p>
                we cook with the seasons and love using
                local ingredients and produce.
            </p>
            
            <p>
                click <Link to='/'>here</Link> to see where we'll be next!
            </p>
            <img 
                alt='drawing of fennel'
                className='about-drawing about-drawing-2'
                src={AboutDrawing2} 
            />
        </div>
    )
}