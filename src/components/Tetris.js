import react from 'react';
import tetris from '../images/tetris.png';

const Tetris = () => {
    return (
        <div className='bg-image centered-container' style={{backgroundImage: `url(${tetris})`, }}>
            <div className='inner-container centered-container'>
                <a target="_blank" href="https://miamitetris.herokuapp.com/"><div className='tetris'>
                    <h2 className='tetris-header'>Miami Tetris</h2>
                    <div className='inner-div'>
                        <p>A miami-themed version of the classic game.</p>
                        <p>Built with javascript/html/css.</p>
                    </div>
                </div></a>
                
            </div>
        </div>     
    )
}

export default Tetris;