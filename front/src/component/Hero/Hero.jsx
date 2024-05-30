import React from 'react'
import './Hero.css'
export default function Hero() {
  return (
    <header className='sm:px-44 px-6 text-center items-center mt-16 relative'>
        <div className='px-48 content'>
          <h1 className='text-[40px]'>Discover the <span className='pop-text font-bold'>🎨 Colors</span> and <span className='pop-text font-bold'>📰 Fonts</span> of Any Website</h1>
          <p className='text-slate-500 mt-8'>Instantly retrieve the color palettes and fonts used on any website. Whether you're a designer, developer, or simply curious, our solution helps you decode the style of top websites for your projects.</p>
          
          <div className='flex flex-row mt-24'>
              <input type="text" placeholder='Paste the url here' className='pl-8 h-12 w-[75%] rounded-l-full'/>
              <button className='cta-btn w-[25%] rounded-r-full'>Set Sail <span className='text-[20px]'>⛵</span></button>
          </div>
        </div>
        <div class="shapes -z-10">
            <div class="shape shape1"></div>
            <div class="shape shape3"></div>
            <div class="shape shape6"></div>
            <div class="shape shape7"></div>
            <div class="shape shape7 top-52 bg-fuchsia-400"></div>
        </div>
    </header>
  )
}
