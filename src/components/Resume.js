import react from 'react';

const Resume = () => {
    return (
        <div className='bg-color centered-container'>
            <div className='resume'>
                <h2>Resume</h2>
                <div className='sub-header'>
                    <h4>Education</h4>
                    <ul>
                        <li>BA English/Music, Tufts University</li>
                        <li>12-week Immersive UX Design Course, General Assembly NYC</li>
                    </ul>
                </div>
                <div className='sub-header'>
                    <h4>Technology Stack</h4>
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