import react from 'react';
import list from '../images/list.png'
import {AiFillGithub} from 'react-icons/ai';
import {Element} from 'react-scroll';

const List = () => {
    return (

        <div id='list' className='bg-image centered-container' style={{backgroundImage: `url(${list})`, }}>
            <div className='inner-container centered-container'>
                <a target="_blank" href="https://arusli-listmaker.netlify.app/"><div className='project-square list'>
                    <h2 className='project-header'>List Maker</h2>
                    <div className='inner-div'>
                        <p>A simple, fullstack, CRUD web app for making lists.</p>
                        <p>React/node/express/mysql.</p>  
                    </div>
                </div></a>  
                <div className="github-icon-container" ><a><AiFillGithub /></a></div>
            </div>
        </div>    

          
    )
}

export default List;