import React, { useState, useEffect } from 'react';
import './Project.css';
import instacartProject from '../../assets/instacart.png';
import sugarcosmeticProject from '../../assets/sugarcosmetic.png';
import {AiOutlineGithub} from 'react-icons/ai';
import {TbExternalLink} from 'react-icons/tb';
import html5 from '../../assets/icons8-html-5-144.png';
import css3 from '../../assets/icons8-css3-144.png';
import js from '../../assets/icons8-javascript-144.png';
import GoDaday from "../../assets/GoDaday.png"
import UrbanCompany from "../../assets/UrbanCompany.png"
import react from "../../assets/react-40.png"
import redux from "../../assets/redux-96.png"
import chakra from "../../assets/chakra-ui.png"
import Api from "../../assets/Api.png"


export default function Project() {
    
  return (
    <div className='project-container' id='Projects'>
    <div className='project-header'>
        <h3>Projects</h3>
        <p>Tech Stack and Projects</p>
        <span className='header-underline'>
            <span className='header-underline1'></span>
        </span>
    </div>

    <div className="projectDetails">
        <div className="projectCard">
        <div className="project-card">
            <div className='projectName'>
                <h3>Uboric clone</h3>
            </div>
            <div className='projectImg'>
                <img src={instacartProject} alt="" />
            </div>
            <div className='projectInfo'>
                <div className="contentProject">
                This was our Second collaborative project, there were four members assigned for the project. It took around 4 days to complete the task. In this project, my contribution was I had to build the signup page with full functionality.
                </div>
                <div className='techStack'>
                    <img src={html5}/>
                    <img src={css3}/>
                    <img src={js}/>
                </div>
                <div className='projectLinks'>
                    <a className='projectbtn1' href="https://github.com/Anmolkumar1996/Uboric_clone" target='_blank'><AiOutlineGithub/> GitHub</a>
                    <a className='projectbtn2' href="https://ubiquitous-sundae-f0f425.netlify.app/" target='_blank'>Demo <TbExternalLink/></a>
                </div>
            </div>
        </div>







        



        <div className="project-card">
            <div className='projectName'>
                <h3>Messho clone</h3>
            </div>
            <div className='projectImg'>
                <img src={sugarcosmeticProject} alt="" />
            </div>
            <div className='projectInfo'>
                <div className="contentProject">
                This was our first collaborative project, there were  six members assigned for the project. It took around 5 days to complete the task. In this project, my contribution was I had to build the navbar page and also signup page with full functionality.
                </div>
                <div className='techStack'>
                    <img src={html5}/>
                    <img src={css3}/>
                    <img src={js}/>
                </div>
                <div className='projectLinks'>
                    <a className='projectbtn1' href="https://github.com/Chadharyyogi/Meesho-Project" target='_blank'><AiOutlineGithub/> GitHub</a>
                    <a className='projectbtn2' href="https://courageous-piroshki-871c96.netlify.app/" target='_blank'>Demo <TbExternalLink/></a>
                </div>
            </div>
        </div>




        <div className="project-card">
            <div className='projectName'>
                <h3>GoDaday clone</h3>
            </div>
            <div className='projectImg'>
                <img src={GoDaday} alt="" />
            </div>
            <div className='projectInfo'>
                <div className="contentProject">
                This was my first react individual project, It took me around 5 days to complete the task. In this project,  I had to build the homepage and also subscription page with full functionality.
                </div>
                <div className='techStack'>
               
                    <img src={react}/>
                    <img src={chakra}/>
                    <img src={ Api}/>
                    
                </div>
                <div className='projectLinks'>
                    <a className='projectbtn1' href="https://github.com/omkundu/spotted-lamp-2366/tree/master/my-app" target='_blank'><AiOutlineGithub/> GitHub</a>
                    <a className='projectbtn2' href="https://rad-bonbon-6d8883.netlify.app/" target='_blank'>Demo <TbExternalLink/></a>
                </div>
            </div>
        </div>



        <div className="project-card">
            <div className='projectName'>
                <h3>Urban Company clone</h3>
            </div>
            <div className='projectImg'>
                <img src={UrbanCompany} alt="" />
            </div>
            <div className='projectInfo'>
                <div className="contentProject">
                This was our first react collaborative project, there were  five members assigned for the project. It took around 5 days to complete the task. In this project, my contribution was I had to build the homepage and also login/signup page with full functionality.
                </div>
                <div className='techStack'>
           
                    <img src={react}/>
                    <img src={chakra}/>
                    <img src={redux}/>
                </div>
                <div className='projectLinks'>
                    <a className='projectbtn1' href="https://github.com/sonuprasad66/tense-visitor-349/tree/main/urban_company" target='_blank'><AiOutlineGithub/> GitHub</a>
                    <a className='projectbtn2' href="https://jocular-babka-8a3ec0.netlify.app/" target='_blank'>Demo <TbExternalLink/></a>
                </div>
            </div>
        </div>



        </div>
    </div>
</div>
  )
}
