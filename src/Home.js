// src/Home.js
// src/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div>
            <h1>Welcome to the home page.</h1>
            <Link to="/chat">Go to Chat Room</Link>
        </div>
    );
}

export default Home;
