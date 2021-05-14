import react, {useEffect} from 'react';
import tetris from '../images/tetris.png';
import {GoLogoGithub} from 'react-icons/go';
import {Element} from 'react-scroll';
// import Aos from 'aos';
// import "aos/dist/aos.css";
import emergence from 'emergence.js';


const Tetris = () => {

    // useEffect( () => {
    //     Aos.init({});
    // })

     useEffect( () => {
        emergence.init();
    }, [])

    return (
        <div id='tetris' className='bg-image' style={{backgroundImage: `url(${tetris})` }}>
            <div className='bg-blur-container centered-container'>
                
                <div data-emergence='hidden' className='project-square'>
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