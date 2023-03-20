import React, { useEffect, useState } from 'react';
import uniqid from 'uniqid';

import Flyer from '../components/Flyer';
import PreviousText from '../img/previous.png';
import UpcomingText from '../img/upcoming.png';

import '../styles/home.scss';

export default function Home() {

    // state:
    const [isLoading, setIsLoading] = useState();
    const [events, setEvents] = useState([
        {
            date: '2023-04-01',
            flyer: '2023-04-01.jpg',
            text: '4/1: late-night pasta at villa capri in doylestown!'
        }
    ]);

    const [prevEvents, setPrevEvents] = useState([]);
    const [upcomingEvents, setUpcomingEvents] = useState([]);

    // hooks:
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // generate previous/upcoming events arrays:
    useEffect(() => {
        setIsLoading(true);
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
        setIsLoading(false);
    }, [events]);

    return (
        <div className='home-page'>

            <div className='events-title upcoming-events-title'>
                <img
                    alt='upcoming events'
                    src={UpcomingText}
                />
            </div>

            {upcomingEvents.length === 0 && isLoading === false ?
                // text to display if there are no upcoming events:
                <div className='no-upcoming-events helico-blue'>
                    nothing scheduled right now... check back soon!
                </div>
                // otherwise render a Flyer component for each event:
                : upcomingEvents.map((event) => {
                    return (
                        <Flyer
                            eventText={event.text} 
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
                                eventText={event.text}
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