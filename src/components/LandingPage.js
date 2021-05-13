import react from 'react';

const LandingPage = () => {
    
    return (
        <div className='landingpage centered-container'>
            <div className='title'>
                <h1>andrew rusli</h1>
                <h1 style={{color: 'grey', opacity: '.4'}}>web developer</h1>
            </div>
            <ul style={{marginTop: '20px', paddingTop: '10px', borderTop: 'solid 2px black'}}>
                <li>miami tetris</li>
                <li>react listmaker</li>
                <li>resume</li>
                <li>contact</li>
            </ul>
        </div>
    )
}

export default LandingPage;