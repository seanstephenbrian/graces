import React, { useEffect, useState } from 'react';
import uniqid from 'uniqid';

import Flyer from '../components/Flyer';
import PreviousText from '../img/previous.jpg';
import UpcomingText from '../img/upcoming.jpg';

import '../styles/home.scss';

export default function Home() {

    // state:
    const [events, setEvents] = useState([
        {
            date: '2023-02-25',
            flyer: '2023-02-25.jpg'
        }
    ]);

    const [prevEvents, setPrevEvents] = useState([]);
    const [upcomingEvents, setUpcomingEvents] = useState([]);

    // hooks:
    // generate previous/upcoming events arrays:
    useEffect(() => {
        let today = new Date();
        let futureEvents = [];
        let pastEvents = [];
        events.forEach(event => {
            const eventDate = new Date(event.date);
            if (eventDate >= today) {
                futureEvents.push(event);
            } else if (eventDate < today) {
                pastEvents.push(event);
            }
        });
        // sort future events array in chronological order:
        futureEvents.sort(function(a, b) {
            return new Date(a.date) - new Date(b.date);
        });
        // sort past events array in reverse chronological order:
        pastEvents.sort(function(a, b) {
            return new Date(b.date) - new Date(a.date);
        });
        setPrevEvents(pastEvents);
        setUpcomingEvents(futureEvents);
    }, [events]);

    return (
        <div className='home-page'>

            <div className='events-title upcoming-events-title'>
                <img
                    alt='upcoming events'
                    src={UpcomingText}
                />
            </div>

            {upcomingEvents.length === 0 ?
                // text to display if there are no upcoming events:
                <div className='no-upcoming-events helico-blue'>
                    nothing scheduled right now, but check back soon!
                </div>
                // otherwise render a Flyer component for each event:
                : upcomingEvents.map((event) => {
                    return (
                        <Flyer 
                            flyerFilename={event.flyer}
                            key={uniqid()}
                            upcoming={true}
                        />
                    )
                })
            }
           
           {/* only render the previous events section if there are actually previous events: */}
           {prevEvents.length > 0 ? 
                <>
                    <div className='events-title previous-events-title'>
                        <img
                            alt='previous events'
                            src={PreviousText}
                        />
                    </div>
                    {prevEvents.map((event) => {
                        return (
                            <Flyer 
                                flyerFilename={event.flyer}
                                key={uniqid()}
                                upcoming={false} 
                            />
                        )
                    })}
                </>
                : '' 
            }
    
        </div>
    )
}