import React from 'react';
import LandingPage from './LandingPage';
import Tetris from './Tetris';
import List from './List';
import Resume from './Resume';
import Contact from './Contact';

const App = () => {

    return (
        <div className='wrapper'>
            <LandingPage />
            <Tetris />
            <List />
            <Resume />
            <Contact />
        </div>       
    )
}

export default App;