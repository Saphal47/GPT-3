import React from 'react'
import Article from '../../components/article/Article'
import { blog01,blog02,blog03,blog04,blog05 } from './import'
import './blog.css';
const Blog = () => {
  return (
    <div className='gpt3__blog section__padding' id='blog'>
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">A lot is happening, 
We are blogging about it.</h1>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container_groupA">
            <Article imgUrl={blog01} date="26 July 2023" title="GPT-3 and OpenAI is the future.Let us explore how it is?"/>
        </div>
        <div className="gpt3__blog-container_groupB">
            <Article imgUrl={blog02} date="24 Feb 2022" title="GPT-3 and OpenAI is the future.Let us explore how it is?"/>
            <Article imgUrl={blog03} date="8 July 2022" title="Revolutionizing AI: The GPT-3 Architecture from OpenAI"/>
            <Article imgUrl={blog04} date="14 March 2023" title="OpenAI GPT-3: Understanding the Architecture"/>
            <Article imgUrl={blog05} date="26 July 2023" title="OpenAI GPT-3 Past, Present and Future of AI and NLP"/>
        </div>
      </div>
    </div>
  )
}

export default Blog

/*Each blog content card will have img,date,time,heading
which will change for each so will render as props */
