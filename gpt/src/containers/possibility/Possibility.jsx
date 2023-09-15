import React from 'react'
import './possibility.css'
import possibilityImage from "../../assets/possibility.png"
const Possibility = () => {
  return (
    <div className='gpt3__possibility section__padding ' id='possibility'>
      <p style={{fontSize:'24px'}}>Possibilities 🚀</p>
      <div className="gpt3__possibility-image">
        <img src={possibilityImage} alt="possiblityImage"/>
      </div>
      <div className="gpt3__possibility-content">
        <h4>Request Early Access to Get Started</h4>
        <h1 className='gradient__text'>The possibilities are beyond your imagination</h1>
        <p>Using GPT-3, Viable identifies themes, emotions, and sentiment from surveys, help desk tickets, live chat logs, reviews, and more. It then pulls insights from this aggregated feedback and provides a summary in seconds.</p>
        <h4>Request Early Access to Get Started</h4>
      </div>
    </div>
  )
}

export default Possibility
