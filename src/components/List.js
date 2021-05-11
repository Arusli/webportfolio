import react from 'react';
import list from '../images/list.png'

const List = () => {
    return (

        <div className='bg-image centered-container' style={{backgroundImage: `url(${list})`, }}>
            <div className='inner-container centered-container'>
                <div className='list'>
                    <h2>Fullstack List Maker</h2>
                    <div className='inner-div'>Fullstack CRUD project</div>
                    <div className='inner-div'>Built with React/Node/Express/MySql</div>
                    <div className='inner-div'>Integrated with Google Login.</div>
                    <div className='inner-div'>Users can make personalized lists.</div>
                    <div className='inner-div'>Deployed with Heroku and Netlify</div>
                </div>  
            </div>
        </div>    

          
    )
}

export default List;