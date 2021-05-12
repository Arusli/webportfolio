import react from 'react';
import list from '../images/list.png'

const List = () => {
    return (

        <div className='bg-image centered-container' style={{backgroundImage: `url(${list})`, }}>
            <div className='inner-container centered-container'>
                <div className='list'>
                    <h2 className='list-header'>List Maker</h2>
                    <div className='inner-div'>
                        <p>A simple, fullstack, CRUD web app for making lists.</p>
                        <p>Built with React/node/express/mysql.</p>  
                        <p>Mobile-responsive.</p>
                        <p>Integrated with Google Login.</p>  
                        <p>Deployed via Heroku and Netlify.</p>
                    </div>
                </div>  
            </div>
        </div>    

          
    )
}

export default List;