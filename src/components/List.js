import react from 'react';
import list from '../images/list.png'

const List = () => {
    return (

        <div className='bg-image centered-container' style={{backgroundImage: `url(${list})`, }}>
            <div className='inner-container centered-container'>
                <a target="_blank" href="https://arusli-listmaker.netlify.app/"><div className='project-square list'>
                    <h2 className='project-header'>List Maker</h2>
                    <div className='inner-div'>
                        <p>A simple, fullstack, CRUD web app for making lists.</p>
                        <p>React/node/express/mysql.</p>  
                    </div>
                </div></a>  
            </div>
        </div>    

          
    )
}

export default List;