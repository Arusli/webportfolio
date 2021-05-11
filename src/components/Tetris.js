import react from 'react';
import tetris from '../images/tetris.png';

const Tetris = () => {
    return (
        <div className='bg-image centered-container' style={{backgroundImage: `url(${tetris})`, }}>
            <div className='inner-container centered-container'>
                <div className='tetris'>
                    <h2>Tetris</h2>
                    <div className='inner-div'>The classic arcade game.</div> 
                    <div className='inner-div'>Built with javascript/html/css.</div> 
                </div>
            </div>
        </div>     
    )
}

export default Tetris;