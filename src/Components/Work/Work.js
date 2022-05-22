import React from 'react'
import { FaExternalLinkAlt } from "react-icons/fa";
import "./Work.css"
function Work() {
  return (
    <div className='work-container'>
    <div>
   <div className='work-top'>
   <p className='general-heading'>MY WORK</p>
    <p className='work-header'>Some of the projects i've worked on recently</p>
   </div>
    <div className='works'>
      <div className='work1'>
        <div className='image'></div>
        <div className='work-detail'>
          <p>Career Building Platform (FYP)</p>
          <p>Coming Soon</p>
        </div>
        <div className='tools'>
        <p>Tools: React.js, Node.js, Express.js, MongoDB, Bootstrap...</p>
        </div>
      </div>
      <div className='work2'>
        <div className='image'></div>
        <div className='work-detail'>
        <p>First Ecommerce App</p>
          <p>2020</p>
        </div>
        <div className='tools'>
          <p>Tools: React.js, Bootstrap</p>
          <a className='link' href='https://talha-smartphone-online-shop.netlify.app/' target="_blank"><FaExternalLinkAlt/></a>
        </div>
      </div>

    </div>
    </div>
    </div>
  )
}

export default Work