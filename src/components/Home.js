import React, { useState } from 'react';

import Flyer from '../components/Flyer';

import '../styles/home.scss';

export default function Home() {

    // state:
    const [upcomingEvents, setUpcomingEvents] = useState([
        {
            flyer: '2023-02-25.jpg'
        }
    ]);

    const [prevEvents, setPrevEvents] = useState([]);

    return (
        <div className='home-page'>
            <div className='upcoming-events-title'>
                upcoming events:
            </div>
            {upcomingEvents.map((event) => {
                return (
                    <Flyer flyerFilename={event.flyer} />
                )
            })}
            <div className='previous-events-title'>
                previous events:
            </div>
            {prevEvents.map((event) => {
                return (
                    <Flyer flyerFilename={event.flyer} />
                )
            })}
        </div>
    )
}