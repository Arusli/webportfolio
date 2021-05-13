import react from 'react';
import {MdSchool, MdComputer} from 'react-icons/md';

const Resume = () => {
    return (
        <div className='bg-color centered-container'>
            <div className='resume'>
                <div style={{width: '100%', textAlign: 'center'}}><h2>Resume</h2></div>
                <div className='sub-header'>
                    <div style={{width: '100%', textAlign: 'center', fontSize: '2em'}}><MdSchool /></div>
                    <ul>
                        <li>BA English/Music, Tufts University</li>
                        <li>12-week Immersive UX Design Course, General Assembly NYC</li>
                    </ul>
                </div>
                <div className='sub-header'>
                    <div style={{width: '100%', textAlign: 'center', fontSize: '2em'}}><MdComputer /></div>
                    <ul>
                        <li>Javascript, React, MySql, Node/Express, HTML/CSS, Git.</li>
                        <li>Sketch, Photoshop.</li>
                        <li>Currently studying React Redux, Enzyme</li>
                    </ul>
                </div>
            </div>
        </div>     
    )
}

export default Resume;