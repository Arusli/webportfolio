import react from 'react';
import tetris from '../images/tetris.png';
import {GoLogoGithub} from 'react-icons/go';
import {Element} from 'react-scroll';

const Tetris = () => {
    return (
        <div id='tetris' className='bg-image' style={{backgroundImage: `url(${tetris})` }}>
            <div className='bg-blur-container centered-container'>
                
                <div className='project-square'>
                    <div className='inner-div'>
                        <p>A miami-themed version of the classic game.</p>
                        <p>Javascript/html/css.</p>
                    </div>
                    <a target="_blank" href="https://miamitetris.herokuapp.com/"><h2 className='project-name'>Miami Tetris</h2></a>
                    <div className="github-icon-container fixed-github-icon">
                        <a target="_blank" href="https://github.com/Arusli/miamitetris"><GoLogoGithub /></a>
                    </div>         
                </div>
               
            </div>
        </div>     
    )
}

export default Tetris;