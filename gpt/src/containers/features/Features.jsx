import React from 'react'
import './features.css';
import { Feature } from '../../components';
const featuresData=[
  {
    title:'Conversational AI: ',
    text:' GPT-3 can power chatbots and virtual assistants for natural and human-like interactions.'
  },
  {
    title:'Educational Assistants',
    text:'Design AI-powered educational assistants that help students with homework, explanations, and personalized learning paths.'
  },
  {
    title:'Virtual Simulation',
    text:'Create virtual environments driven by GPT-3 to simulate real-world scenarios for training purposes, such as medical simulations or disaster response training.'
  },
  {
    title:'Legal and Compliance',
    text:'Assist legal professionals with contract review, compliance analysis, and legal document generation, reducing manual workload.'
  },
]

const Features = () => {
  return (
    <div className='gpt3__features section__padding' id="features">
      <div className="gpt3__features-heading">
        <h1 className="gradient__text">The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen.</h1>
        <p>Request Early Access to Get Started</p>
      </div>

    <div className="gpt3__features-container">
      {featuresData.map((item,index)=>(
        <Feature title={item.title} text={item.text} id={item.title+index} />
      ))}

    </div>
    </div>
  )
}

export default Features
