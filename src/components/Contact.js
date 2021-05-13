import React from 'react';
import {AiFillGithub, AiFillLinkedin, AiOutlineMail} from 'react-icons/ai';



const Contact = () => {

    return (
        <div className='bg-color centered-container'>
        <div className='contact'>
            <h2>Contact</h2>
            <div className='flex-contact'>
                <div className='sub-contact'>
                    <a><AiFillGithub /></a>
                </div>
                <div className='sub-contact'>
                    <a><AiFillLinkedin /></a>
                </div>
                <div className='sub-contact'>
                    <a><AiOutlineMail /></a>
                </div>
            </div>
        </div>
    </div>   
    )
}

export default Contact;