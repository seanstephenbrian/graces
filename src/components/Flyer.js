import React, { useEffect, useState } from 'react';

import '../styles/flyer.scss';

export default function Flyer(props) {

    // state:
    const [eventStatus, setEventStatus] = useState();

    // props:
    const { 
        eventText,
        flyerFilename,
        upcoming } = props;

    // hooks:
    // determine event status:
    useEffect(() => {
        if (upcoming) {
            setEventStatus('upcoming');
        } else if (!upcoming) {
            setEventStatus('previous');
        }
    }, [upcoming]);

    return (
        <div className={`event-flyer ${eventStatus}-event-flyer`}>
            <div className='event-text'>
                {/* only show text description for upcoming events: */}
                {upcoming ? eventText : ''}
            </div>
            <img
                alt='event flyer' 
                className='event-flyer-img'
                src={require(`../img/flyers/${flyerFilename}`)} 
            />
        </div>
    )
}