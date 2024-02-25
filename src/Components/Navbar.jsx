import React from 'react'

export default function Navbar({Heading}) {
  return (
    <nav className=' h-16 w-screen flex justify-between items-center px-10 py-4 bg-cyan-500 text-white'>
        <h1 className=' font-semibold text-xl'>{Heading}</h1>
        <ul className=' flex items-center gap-8 font-medium text-base'>
            <li><a className=' hover:text-black hover:font-bold transition-all' href="/">Home</a></li>
            <li><a className=' hover:text-black hover:font-bold transition-all' href="/">About</a></li>
            <li><a className=' hover:text-black hover:font-bold transition-all' href="/">Services</a></li>
            <li><a className=' hover:text-black hover:font-bold transition-all' href="/">Contact</a></li>
        </ul>
    </nav>
  )
}
