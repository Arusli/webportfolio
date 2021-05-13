import react from 'react';
import {Link} from 'react-scroll';

const LandingPage = () => {
    
    return (
        <div id='home' className='landingpage centered-container'>
            <div className='title'>
                <h1>andrew rusli</h1>
                <h1 style={{color: 'grey', opacity: '.4'}}>web developer</h1>
            </div>
            <ul style={{marginTop: '20px', paddingTop: '10px', borderTop: 'solid 2px black'}}>
                <li><a href='#tetris'>miami tetris</a></li>
                <li><a href='#list'>react listmaker</a></li>
                <li><a href='#resume'>resume</a></li>
                <li><a href='#contact'>contact</a></li>
            </ul>
        </div>
    )
}

export default LandingPage;