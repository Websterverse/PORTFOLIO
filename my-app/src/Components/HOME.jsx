import React from 'react'
import '../Home.css'
import Hero from '../assert/kartik.jpeg'
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import {Link} from "react-scroll"
const HOME = () => {
  return (
    <div name = "home"  className='  home  h-screen w-full bg-gradient-to-b from-black  via-black to-gray-800' >
    
<div className=' main  max-w-screen-lg mx-auto  text-white flex flex-col items-center justify-center h-full px-4  md:flex-row  ' >  
 
<div   className='flex flex-col h-full justify-center '  >
<h2 className='text-4xl font-bold sm:text-7xl text-white '  >I 'M A FULL STACK WEB DEVELOPER </h2>
<p className='text-gray-500 py-4 max-w-md   ' >
I 'M FRESHER AND BUILDING WEB SITES AND DESIGNS .
CURRENTLY , I LOVE TO WORK ON WEB APPLICATION USING 
TECHNOLOGIES LIKE REACT , TAILWIND , NODEJS AND EXPRESS JS 
</p>
<div className='' >
<Link  to='portfolio' smooth duration={500}  className=' group flex items-center    rounded-md text-white w-fit px-6 py-3 my-2 bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer ' >
    Portfolio <span className='group-hover:rotate-90 duration-300 ' > <MdKeyboardDoubleArrowRight  className='ml-1' size={25} /> </span>
</Link>

</div>

</div>


<div className='kartik_1' >

<img       className='   md:w-full    kartik  rounded-2xl mx-auto w-4/12 '   src={Hero} alt="my profile" />
</div>
</div>
    </div>
  )
}

export default HOME

