import React from 'react'
import './About.css';

function About(props) {
    console.log(props);
    return (
        <div className="about_container">
            <span>"A JavaScript library for building user interfaces"</span>
            <span>- React -</span>
        </div>
    )
}

export default About
