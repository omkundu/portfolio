import React from "react";
// import emailjs from "@emailjs/browser";
import "./Contact.css";
import { MdEmail } from "react-icons/md";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { useState } from "react";
import  { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // const [user_name,setUser_name]=useState("")



  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // var templateParams = {
    //   name: name,
    //   email: email,
    //   message: message,
    // };
    // console.log(form.current)
    emailjs.sendForm('service_3c0oigr', 'template_pnjjhc8', form.current, '2Qowuf2uPNuVz2jcl')
      .then((result) => {
          console.log(result.text);
          setName("")
          setEmail("")
          setMessage("")
          // console.log('SUCCESS!', result.status, result.text);
                        alert('Message sent successfully');
      }, (error) => {
          console.log(error.text);
          // console.log('FAILED...', error.text);
           alert('Some technical error');
      });

  };

 

  // const sendEmail = (e) => {
  //   e.preventDefault();
    
  //   emailjs.send('service_rn02dwu', 'template_0axsrhn', templateParams,'O8hyd5yOHHItAfktQ')
  //           .then((response) => {
  //               console.log('SUCCESS!', response.status, response.text);
  //               alert('Message sent successfully');
  //               setMessage('');
  //               setName('');
  //               setEmail('');
  //               setSubject('');
  //               e.target.reset();
  //           },(error) => {
  //               console.log('FAILED...', error);
  //               alert('Some technical error');
  //           });
  // };

  return (
    <div className="contact-container" id="Contact">
      <div className="contact-header">
        <h3>Contact Me</h3>
        <p>Let's Keep In Touch</p>
        <span className="header-underline">
          <span className="header-underline1"></span>
        </span>
      </div>

      <div className="contactDetails">
        <div className="contactForm">
          <div className="topCtn">
            <div className="callBtn btnTp">
              <FaPhoneAlt />
              <p>PHONE</p>
              <span>Contact me </span>
              <p className="contactNo">
                <a href="tel:7004398824" target="_blank">
                  7004398824
                </a>
              </p>
            </div>
            <div className="emailBtn btnTp">
              <MdEmail />
              <p>EMAIL</p>
              <span>Contact me on email address</span>
              <p className="contactNo">
                <a href="mailto: omkundu156@gmail.com" target="_blank">
                 omkundu156@gmail.com
                </a>
              </p>
            </div>
            <div className="addrBtn btnTp">
              <FaMapMarkerAlt />
              <p>LOCATION</p>
              <span>Dist-Seraikela Kharsawan, Jharkhand 832401 </span>
              <p className="contactNo">
                <a href="https://maps.app.goo.gl/U3kTrkdqwGRRzwpC8" target="_blank">
                  View on Google Map
                </a>
              </p>
            </div>
          </div>
          {/* <form onSubmit={sendEmail}>
            <div className="formInput">
              <div className="leftForm">
                <div className="rows">
                  <input
                    type="text"
                    name="name"
                    pattern="[A-Za-z]{3,}"
                   
                    id="name"
                    value={name}
                    onInput={(e) => setName(e.target.value)}
                    placeholder="Full Name: "
                    required={true}
                  />
                </div>
                <div className="rows">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    pattern="[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                    value={email}
                    onInput={(e) => setEmail(e.target.value)}
                    placeholder="Your Email:"
                    required={true}
                  />
                </div>
                <div className="rows">
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    value={subject}
                    onInput={(e) => setSubject(e.target.value)}
                    placeholder="Your Subject:"
                    required={true}
                  />
                </div>
              </div>
              <div className="rightForm">
                <div className="rows">
                  <textarea
                    name="message"
                    id="inputMessage"
                    cols="0"
                    rows="9"
                    value={message}
                    onInput={(e) => setMessage(e.target.value)}
                    placeholder="Your Message:"
                    required={true}
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="formSubmit">
              <div className="sendButton" colSpan="2">
                <button type="submit" value="Submit">Send Message</button>
              </div>
            </div>
          </form> */}


    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name"  onChange={(e)=>setName(e.target.value)} value={name}/>
      <label>Email</label>
      <input type="email" name="user_email"   onChange={(e)=>setEmail(e.target.value)} value={email}/>
      <label>Message</label>
      <textarea name="message"  onChange={(e)=>setMessage(e.target.value)} value={message} />
      <input type="submit" value="Send" />
    </form>
        </div>
      </div>
    </div>
  );
}
