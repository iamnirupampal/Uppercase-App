import React, { useState } from 'react'

export default function Uppercase() {
  const[text,update] =  useState('Enter Your Text')
   const handleupclick = ()=>{
    let newtext = text.toUpperCase()
    update(newtext)
   }
   const onchagehandle= (event)=>{
    update(event.target.value)
   }

  return (
    <div className='w-screen h-screen flex items-center justify-center'>
        <div className=' h-2/3 w-2/3 bg-green-700 rounded-2xl p-8'>
            <h1 className=' font-semibold text-2xl text-white'>Enter Your Text Here</h1>
            <textarea className=' outline-none rounded-xl font-medium text-black text-base p-4 my-4' value={text} onChange={onchagehandle} id="texthere" cols='100' rows="10"></textarea>
            <button onClick={handleupclick} className=' py-2 px-8 bg-white text-green-700 rounded-3xl text-lg font-semibold'>Uppercase</button>
        </div>
    </div>
  )
}
