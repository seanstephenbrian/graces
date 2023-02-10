import React from 'react';

import '../styles/flyer.scss';

export default function Flyer(props) {

    // props:
    const { flyerFilename } = props;

    return (
        <div className='event-flyer'>
            <img 
                className='event-flyer-img'
                src={require(`../img/flyers/${flyerFilename}`)} 
            />
        </div>
    )
}