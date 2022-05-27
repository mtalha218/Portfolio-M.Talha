import React from 'react'

import "./Skills.css"

function Skills() {
  const skills = ["React.js","HTML5/CSS3","JavaScript","Node.js","Express.js","MongoDB","REST API","Bootstrap","SCSS","Redux","AdobeXD/Figma","Git/Github",]
  const familiar=["Material Ui","Styled Components","Tailwind CSS","ReactNative","Firebase","NEXT.js"]
  return (
    <div className='skills-container'>
        <p className='general-heading'>MY SKILLS</p>

<div className='skills-left'>
      <p className='skills-heading'>Technologies I’ve been working with</p>
      <div className='techs'>
      {skills.map(i=>{
return <div className='tech'>{i}</div>
      })}
      </div>
</div>
<div className='skills-right'>

      <p className='skills-detail'>Here are a few technologies I'm familiar with</p>
      <div className='techs'>
      {familiar.map(i=>{
return <div className='tech'>{i}</div>
      })}
      </div>
    </div>
    </div>
  )
}

export default Skills