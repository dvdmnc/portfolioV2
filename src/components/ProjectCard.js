import React from 'react'

import '../ProjectCard.css'


function ProjectCard({href,Src,title,description, link, stack}) {
  return (
    <div id='card-container'>
      <div id='card' >
        <a href={href}>
          <div id='card--display' >
            <Src id='icon'/>
            <h2>{title}</h2>
          </div>
          <div id='card--hover'>
            <h2>{title}</h2>
            <p>{description}</p>
            <p id='link'>{link}</p>
            <div id='stack'>
              {stack.map((tool) => (
                <img src={tool}/>
              ))}
            </div>
          </div>
        </a>
        <div id='card--border'></div>
      </div>
    </div>
  )
}

export default ProjectCard