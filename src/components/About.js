import React from 'react';

import { Link } from 'react-router-dom';

import '../styles/about.scss';

export default function About() {
    return (
        <div className='about-page'>
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
        </div>
    )
}