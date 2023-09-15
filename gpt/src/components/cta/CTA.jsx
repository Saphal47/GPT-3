import React from 'react'
import { BrowserRouter,Link } from 'react-router-dom';
import './cta.css';
const CTA = () => {
  return (
    <div className='gpt3__cta'>
      <div className="gpt3__cta-content">
        <p>Request Early Access to Get Started</p>
        <h3>Register today & start exploring the endless possiblities.</h3>
      </div>
      <BrowserRouter>
      <div className="gpt3__cta-btn">
        <Link to="https://openai.com/">
        <button>Get Started</button>
        </Link>
      </div>
      </BrowserRouter>
    </div>
  )
}

export default CTA
