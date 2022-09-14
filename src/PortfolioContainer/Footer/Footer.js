import React from 'react'
import './Footer.css';
import {ImHeart} from 'react-icons/im';
export default function Footer() {
    let date = new Date().getFullYear();
  return (
    <footer className="site-footer">
        <div className="container-footer">
                <div className="">
                    <div className=" footer-toop">
                        <h3 id='NameFooter'>OM KUNDU</h3>
                        <p>A Passionate aspiring Full Stack web Developer skilled in React,Redux,JavaScript,NodeJS,Express,MongoDB about building excellent Fronted Web Page that improves the lives of those around me. Look forward to joining a company where I will  be able to contribute towards individual and company growth.</p>
                        <div className='footer-social'>
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
                </div>
            </div>


            <div className="container-footer-text">
                <p>©{date}. Design with {<ImHeart color='red'/>} by Om Kundu.</p>
            </div>
    </footer>
  )
}
