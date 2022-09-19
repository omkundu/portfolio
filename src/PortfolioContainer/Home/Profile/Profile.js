import React from 'react'
import Typical from 'react-typical';
import "./Profile.css";

export default function Profile() {
  return (
    <div className='profile-container'>
        <div className='profile-parent'>
            <div className="profile-details">
                <div className="colz">
                    <div className="colz-icon">
                        <a href="https://github.com/omkundu" target="_blank">
                            <i className="fa fa-github" aria-hidden="true"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/om-kundu-b4b593162/" target="_blank">
                            <i className="fa fa-linkedin" aria-hidden="true"></i>
                        </a>
                        <a href="https://www.instagram.com/mr.omkundu02/" target="_blank">
                            <i className='fa fa-instagram'></i>
                        </a>
                        <a href="https://www.youtube.com/channel/UCXg34gTv4ub1hUGOgfMhjgw" target="_blank">
                            <i className='fa fa-youtube-play'></i>
                        </a>
                        <a href="https://twitter.com/omkundu" target="_blank">
                            <i className='fa fa-twitter'></i>
                        </a>
                    </div>
                </div>
                <div className="profile-details-name">
                    <span className="primary-text">
                        Hello I'm <span className='highlighted-text'>Om Kundu</span>
                    </span>
                </div>
                <div className="profile-details-role">
                    <span className="primary-text">
                        <h1>
                        <Typical
                            loop={Infinity}
                            steps ={[
                                "Enthusiastic Dev 🔴",
                                2000,
                                "Full Stack Fronted developer 🖥",
                                2000,
                                "MERN Devloper 🚀",
                                2000,
                            ]}
                        />
                        </h1>
                        <span className="profile-role-tagline">
                            Knack of building application with frontend operations.
                        </span>
                    </span>
                </div>
                <div className="profile-optins">
                    <a href="https://drive.google.com/file/d/1NBpg7EhM-JnUERqSUTFOekC9036jc3Xe/view?usp=sharing" target="_blank" download="resume.pdf">
                        <button className='resumeButton'>Get Resume</button>
                    </a>
                </div>
            </div>
            <div className="profile-picture">
                <div className="profile-picture-background">
                    <div className='screenSize'></div>
                </div>
            </div>
        </div>
    </div>
  )
}
