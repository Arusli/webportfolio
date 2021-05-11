import React from 'react';
import LandingPage from './LandingPage';
import Tetris from './Tetris';
import List from './List';
import Resume from './Resume';

const App = () => {

    return (
        <div className='wrapper'>
            <LandingPage />
            <Tetris />
            <List />
            <Resume />
        </div>       
    )
}

export default App;