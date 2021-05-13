import react from 'react';
import tetris from '../images/tetris.png';
import {AiFillGithub} from 'react-icons/ai';
import {Element} from 'react-scroll';

const Tetris = () => {
    return (
        <div  id='tetris' className='bg-image centered-container' style={{backgroundImage: `url(${tetris})`, }}>
            <div className='inner-container centered-container'>
                
                <a target="_blank" href="https://miamitetris.herokuapp.com/"><div className='project-square tetris'>
                    <h2 className='project-header'>Miami Tetris</h2>
                    <div className='inner-div'>
                        <p>A miami-themed version of the classic game.</p>
                        <p>Javascript/html/css.</p>
                    </div>
                </div></a>
                <div className="github-icon-container"><a><AiFillGithub /></a></div>
                
            </div>
        </div>     
    )
}

export default Tetris;