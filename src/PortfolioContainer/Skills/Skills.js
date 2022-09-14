import React from 'react'
import './Skills.css'
import  {FaJava} from 'react-icons/fa';
import  {GiSkills} from 'react-icons/gi';
import  {ImHtmlFive, ImDatabase} from 'react-icons/im';
import  {GrJava, GrNode, GrReactjs} from 'react-icons/gr';
import  {RiGitBranchLine} from 'react-icons/ri'

export default function Skills() {
  return (
    <div className='skills-container' id='Skills'>
        <div className='skills-header'>
            <h3>Skills</h3>
            <p>Hands On Experience</p>
            <span className='header-underline'>
                <span className='header-underline1'></span>
            </span>
        </div>
        <div className="skillsDetails">
            <div className="boxContainer">
                <div className='skillBox skillbox1'>
                    <div className='sillIcon'><ImHtmlFive color='red'/></div>
                    <div className='skillTitle'>Web Technologies</div>
                    <div className='skillInfo'>HTML, CSS, JavaScript</div>
                </div>
                <div className='skillBox skillbox2'>
                    <div className='sillIcon'><GrJava /></div>
                    <div className='skillTitle'>Web frameworks</div>
                    <div className='skillInfo'>React,Redux</div>
                </div>
                <div className='skillBox skillbox3'>
                    <div className='sillIcon'><FaJava color='blue'/></div>
                    <div className='skillTitle'>CSS</div>
                    <div className='skillInfo'>Material-UI,Styled-Components,Bootstrap</div> 
                </div>
                <div className='skillBox skillbox4'>
                <div className='sillIcon'><GrNode/></div>
                <div className='node'></div>
                    <div className='skillTitle'>Node Js</div>
                    <div className='skillInfo'>Backend</div> 
                </div>
                <div className='skillBox skillbox5'>
                    <div className='sillIcon'><GiSkills color='rgb(109, 152, 0)'/></div>
                    <div className='skillTitle'>Soft Skills</div>
                    <div className='skillInfo'>Team work, Ready to learn new things, Communication Skills</div> 
                </div>
                <div className='skillBox skillbox6'>
                    <div className='sillIcon'>
                    <RiGitBranchLine color='blue'/>
                    </div>
                    <div className='skillTitle'>Code Version Control</div>
                    <div className='skillInfo'>GitHub, Git</div>
                </div>
            </div>
        </div>
    </div>
  )
}