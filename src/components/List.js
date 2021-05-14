import react from 'react';
import list from '../images/list.png'
import {GoLogoGithub} from 'react-icons/go';
import {Element} from 'react-scroll';

const List = () => {
    return (
        <div id='list' className='bg-image' style={{backgroundImage: `url(${list})` }}>
            <div className='bg-blur-container centered-container'>

                <div className='project-square'>
                    <div className='inner-div'>
                        <p>A fullstack, CRUD list-making web app, integrated with Google OAuth/Login.</p>
                        <p>React/node/express/mysql.</p>  
                    </div>
                    <a target="_blank" href="https://arusli-listmaker.netlify.app/"><h2 className='project-name'>List Maker</h2></a>
                    <div className="github-icon-container fixed-github-icon">
                        <a target="_blank" href="https://github.com/Arusli/reactlistmakerclient"><GoLogoGithub /></a>
                    </div>   
                </div>
                
            </div>
        </div>              
    )
}

export default List;