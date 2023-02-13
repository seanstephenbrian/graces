import React from 'react';

import '../styles/footer.scss';

import FooterDrawing1 from '../img/drawings/apple.png';
import FooterDrawing2 from '../img/drawings/apple-2.png';

export default function Footer() {
    return (
        <footer className='footer'>
            <img 
                alt='drawing of an apple'
                className='footer-drawing footer-drawing-1'
                src={FooterDrawing1} 
            />
            <div className='email helico-blue'>
                letsgotograces@gmail.com
            </div>
            <img 
                alt='drawing of an apple'
                className='footer-drawing footer-drawing-2'
                src={FooterDrawing2} 
            />
        </footer>
    )
}