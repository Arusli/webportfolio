import react from 'react';

const Resume = () => {
    return (
        <div className='resume centered-container'>
            <h2>Resume</h2>
            <p>Education: B.A. English/Music, Tufts University</p>
            <p>Stack: Javascript, React JS, MySql, Node/Express JS, HTML/CSS, Git.</p>
            <p>Currently Studying: React Redux, React Router, Jest</p>
            <div>
                <a>Github</a>
                /
                <a>LinkedIn</a>
                /
                <a>Email</a>
            </div>
        </div>     
    )
}

export default Resume;