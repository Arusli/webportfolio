import react from 'react';
import list from '../images/list.png'
import {AiFillGithub} from 'react-icons/ai';
import {GoLogoGithub} from 'react-icons/go';
import {Element} from 'react-scroll';

const List = () => {
    return (

        <div id='list' className='bg-image centered-container' style={{backgroundImage: `url(${list})`, }}>
            <div className='inner-container centered-container'>
                <div className='project-square listmaker'>
                    <div className='inner-div'>
                        <p>A simple, fullstack, CRUD web app for making lists.</p>
                        <p>React/node/express/mysql.</p>  
                    </div>
    
                    <a target="_blank" href="https://arusli-listmaker.netlify.app/"><h2 className='project-header'>List Maker</h2></a>
                    <div className="github-icon-container fixed-github-icon"><a target="_blank" href="https://github.com/Arusli/reactlistmakerclient"><GoLogoGithub /></a></div>
                 
                </div>
                
            </div>
        </div>    

          
    )
}

export default List;