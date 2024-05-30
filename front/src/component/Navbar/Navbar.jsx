import React from 'react'
import {FaGithub} from 'react-icons/fa'

export default function Navbar() {
  return (
    <div className='text-[12px] sm:px-16 px-6 py-8 flex flex-row items-center'>
      <div className='flex-1'>
        <p className='text-[14px] font-bold'>HueHarbor</p>
      </div>
      <nav className=''>
        <ul className='flex flex-row items-center gap-8'>
            <li className='navLink text-[30px]'><FaGithub /></li>   
            <li className='navLink border-[2px] border-stone-950 rounded-full px-4 py-2'>Buy me a coffee ☕</li>   
        </ul>
      </nav>
    </div>
  )
}
