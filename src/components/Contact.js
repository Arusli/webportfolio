import React from 'react';
import {AiFillGithub, AiFillLinkedin, AiOutlineMail} from 'react-icons/ai';



const Contact = () => {

    return (
        <div id='contact' className='bg-color centered-container'>
        <div className='contact'>
            <h2>Contact</h2>
            <div className='flex-contact'>
                <div className='sub-contact'>
                    <a target="_blank" href="https://github.com/Arusli"><i className='icon'><AiFillGithub /></i></a>
                </div>
                <div className='sub-contact'>
                    <a target="_blank" href="https://linkedin.com/in/andrew-rusli-6299a824"><i className='icon'><AiFillLinkedin /></i></a>
                </div>
                <div className='sub-contact'>
                    <a target="_blank" href="mailto:andreworusli@gmail.com"><i className='icon'><AiOutlineMail /></i></a>
                </div>
            </div>
        </div>
    </div>   
    )
}

export default Contact;