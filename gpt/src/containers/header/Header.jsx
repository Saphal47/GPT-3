import React from 'react';
import people from "../../assets/people.png";
import ai from "../../assets/ai.png";
import './header.css';
import { BrowserRouter,Routes,Link } from "react-router-dom";
const Header = () => {

  return(
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">
          Let’s Build Something amazing with GPT-3 OpenAI
        </h1>
        <p>
        Building something amazing with GPT-3 from OpenAI can be an exciting and innovative endeavor. GPT-3, with its natural language understanding and generation capabilities, opens up a world of possibilities for creative and practical applications. 
        Either an individual developer, part of a startup, or working in a large organization, GPT-3 is there to inspire you in your journey to harness its power.
        </p>

        <BrowserRouter>
        <div className="gpt3__header-content__input">
          <input type="email" placeholder="Your Email Address" />
          <Link to="https://openai.com/blog/gpt-3-apps">
            <button type="button" >Get Started</button>
          </Link>
        </div>
        </BrowserRouter>

        <div className="gpt3__header-content__people">
          <img src={people} />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>

      <div className="gpt3__header-image">
        <img src={ai} />
      </div>
    </div>    
  );
}

export default Header
