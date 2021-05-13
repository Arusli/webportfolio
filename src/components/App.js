import React from 'react';
import LandingPage from './LandingPage';
import Tetris from './Tetris';
import List from './List';
import Resume from './Resume';
import Contact from './Contact';
import {BiHome} from 'react-icons/bi';

const App = () => {

    return (
        <div className='wrapper'>
            <a id="home-button" href="#home"><BiHome /></a>
            <LandingPage />
            <Tetris />
            <List />
            <Resume />
            <Contact />
        </div>       
    )
}

export default App;