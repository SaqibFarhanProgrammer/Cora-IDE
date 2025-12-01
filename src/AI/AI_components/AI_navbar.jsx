import React from 'react'
import { RiCloseLargeFill } from "react-icons/ri";

function AI_navbar() {
  return (
    <div className=' flex justify-between items-center p-4 border-b border-gray-800'>
        <RiCloseLargeFill className='text-2xl text-white cursor-pointer'/>
        <h2 className='text-white text-lg font-semibold font:["Inter"] '>AI</h2>
        
    </div>
  )
}

export default AI_navbar