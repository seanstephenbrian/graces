import React from 'react';

import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div>
            home page
            <Link to='/about'>about</Link>
        </div>
    )
}