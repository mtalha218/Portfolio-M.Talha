import React from 'react'
import "./Shapeback.css"
import { motion } from "framer-motion";
import square from "../../Images/Group 1.svg"
import tri from "../../Images/Group 2.svg"
import circle from "../../Images/Group 3.svg"
import cylinder1 from "../../Images/Group 5.svg"

function Shapeback() {
  return (
    <div className='shape'>
<motion.img 
          animate={{ x: 6, y: 7, scale: 1, rotate: 0 }}
          transition={{
            yoyo: Infinity,
            duration: 3,
          }}
           src={square} alt="glass-shape" className="square1"></motion.img>
        
        <motion.img 
          animate={{ x: 6, y: 7, scale: 1, rotate: 0 }}
          transition={{
            yoyo: Infinity,
            duration: 3,
          }}
           src={square} alt="glass-shape" className="square2"></motion.img>
       

       
          <motion.img 
          animate={{ x: -5, y: -7, scale: 1, rotate: 0 }}
          transition={{
            yoyo: Infinity,
            duration: 3,
          }}
           src={tri} alt="spiral-shape" className="tri1"></motion.img>
 <motion.img 
          animate={{ x: -5, y: -7, scale: 1, rotate: 0 }}
          transition={{
            yoyo: Infinity,
            duration: 3,
          }}
           src={tri} alt="spiral-shape" className="tri2"></motion.img>

      
        <motion.img 
          animate={{ x: 7, y: -2, scale: 1, rotate: 0}}
          transition={{
            yoyo: Infinity,
            duration: 3,
          }}
         src={circle} alt="cone-shape" className="circle1"></motion.img>

<motion.img 
          animate={{ x: 7, y: -2, scale: 1, rotate: 0}}
          transition={{
            yoyo: Infinity,
            duration: 3,
          }}
         src={circle} alt="cone-shape" className="circle2"></motion.img>
        
        <motion.img 
         animate={{ x: -7, y: 8, scale: 1, rotate: 0}}
          transition={{
            yoyo: Infinity,
            duration: 3
          }}
         src={cylinder1} alt="torus-shape" className="cylinder1"></motion.img>
       <motion.img 
         animate={{ x: -7, y: 8, scale: 1, rotate: 0}}
          transition={{
            yoyo: Infinity,
            duration: 3
          }}
         src={cylinder1} alt="torus-shape" className="cylinder2"></motion.img>

    </div>
  )
}

export default Shapeback