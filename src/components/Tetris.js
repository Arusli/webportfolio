import react from 'react';
import tetris from '../images/tetris.png';

const Tetris = () => {
    return (
        <div className='bg-image centered-container' style={{backgroundImage: `url(${tetris})`, }}>
            <div className='inner-container centered-container'>
                <div className='tetris'>
                    <h2 className='tetris-header'>Tetris</h2>
                    <div className='inner-div'>
                        <p>The classic computer game.</p>
                        <p>Built with javascript/html/css.</p>
                    </div>
                </div>
                
            </div>
        </div>     
    )
}

export default Tetris;