import React,{useState} from "react";
import "./Contact.css";
import gmail from "../../Images/gmail.svg";
import linkedin from "../../Images/linkedin.svg";


function Contact() {

  const timeOut = new Date();

  const hour = timeOut.getHours();
  const min = timeOut.getMinutes();

const [time,setTime] = useState(`${hour}:${min}`)


const updateTime =()=>{
  const timeOut = new Date();

  const hour = timeOut.getHours();
  const min = timeOut.getMinutes();
  
  setTime(`${hour}:${min}`)
}

setInterval(updateTime, 1000)



  return (
    <div className="contact-container">
          <p className="general-heading">CONTACT ME</p>

      <h1 className="contact-header">
        You can reach <br />
        me here
      </h1>
      <div className="contacts">
        <div className="contact">
          <img src={gmail} alt="gmail" className="gmail-logo" />
          <p className="contact-text">muhammadtalha218218@gmail.com</p>
        </div>
        <a href="https://www.linkedin.com/in/muhammad-talha-896465212/" target="_blank" className="contact">
          <img src={linkedin} alt="linkedin" className="linkedin-logo" />
          <p className="contact-text">Muhammad Talha</p>
        </a>
      </div>
<div className="time-div">

<p className="local-time">Local Time</p>
<p className="time">{time} {hour<12?"AM":"PM"} (GMT+5)</p>

</div> 

   </div>
   
  );
}

export default Contact;
