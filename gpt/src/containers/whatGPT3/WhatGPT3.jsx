import React from 'react'
import {Feature } from '../../components'
import './whatgpt3.css';

const WhatGPT3 = () => {
  return (
    <div className="gpt3__whatgpt3 section__margin" id='wgpt3'>
      <div className="gpt3__whatgpt3-feature">
        <Feature title="What is GPT3" 
                  text="GPT-3, short for Generative Pre-trained Transformer 3, is a cutting-edge natural language processing (NLP) model developed by OpenAI. It is the third iteration of the GPT series and represents one of the most advanced AI language models available as of my last knowledge update in September 2021."/>
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">
        The possibilities are beyond your imagination
        </h1>
        <p>Explore The Library</p>
      </div>

      {/* //for cards below */}
      <div className="gpt3__whatgpt3-container">
        <Feature title="Generative Model" text=" it can generate text, answer questions, translate languages, summarize documents, and perform various other language-related tasks by predicting and generating text based on the input it receives. "/>
        <Feature title="Multilingual Capability" text="GPT-3 has demonstrated the ability to work with multiple languages and perform translation tasks between them. Its versatility makes it a valuable tool for cross-lingual applications."/>
        <Feature title="Massive Scale" text="It's a massive neural network with 175 billion parameters, making it significantly larger and more powerful than its predecessors. This vast scale allows it to generate human-like text and comprehend a wide range of natural language tasks."/>
      </div>
    </div>


  )
}

export default WhatGPT3
