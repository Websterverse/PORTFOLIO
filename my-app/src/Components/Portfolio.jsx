import React from 'react'
// import Rayban from "../assert/Rayban.png"
// import Landing_Page from "../assert/Landing_Page.png"
import SIDCLUB from "../assert/SIDCLUB.png"
// import Weather from "../assert/Weather.png"
import Retrorr from "../assert/retrorr.png"
import Cynthia from "../assert/Cynthia.png"
import tracker from "../assert/tr.png"
import IMDB from "../assert/imdb.png"
import { Link } from 'react-scroll'
import CHATS from "../assert/chit.png"
import track from "../assert/trrr.png"
// import CHAT from "../assertcrwom.png"
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {BrowserRouter as Router , Routes , Route } from 'react-router-dom'
// import More from "../Components/More"
import Hills from "../assert/z.png"
import Ball from "../assert/we.png"
import Ship from "../assert/ship.png"
import TOKYO from "../assert/kor.png"
import Research from "../assert/research.png"


import '../Home.css'
import chat from "../assert/crwom.png"


const Portfolio = () => {

    const portfolios = [
        {
            id: 1,
            scr: track,
            demo: "https://trackker-1.onrender.com/",
            code : "https://github.com/Websterverse/TRACKKER",
            intro : "REAL TIME TRACKING APP"

            
        },
        {
            id: 2,
            scr: SIDCLUB,

            demo: "https://sidcupgolf--websterverse.repl.co/",
            code : "https://github.com/Websterverse/TRACKKER" ,
             intro : "SIDCUP-GOLF WEBSITE"

        },
        {
            id: 3,
            scr: CHATS,
            demo: "https://crown-talk.onrender.com/",
            code : "https://github.com/Websterverse/CROWN-TALK" ,
            intro : "REAL TIME CHATING APP" 
            
        },
        {
            id: 4,
            scr: Retrorr,
            demo: "https://miranda--websterverse.repl.co/",
            code : "https://github.com/Websterverse/TRACKKER",
             intro : "MIRANDA WEBSITE"
            
        },
        {
            id: 5,
            scr: Cynthia,
            demo: "https://neglectedtemporalopposites.websterverse.repl.co/",
            code : "https://github.com/Websterverse/Cynthia_Clone",
             intro : "CYNTHIA WEBSITE"
            
        },
        {
            id: 6,
            scr: IMDB,
            demo: "https://k1ngk4rr-imdb.netlify.app/",
            code : "https://github.com/Websterverse/IMDB",
             intro : "IMDB CLONE"

        },
        // {
        //     id: 7,
        //     scr: Rayban,
        //     demo: "https://god--websterverse.repl.co/",
        //     code : "https://github.com/Websterverse/TRACKKER"
        // },
        
    ]


    const portfolioss = [
        {
            id: 1,
            scr: TOKYO,
            demo: "https://k-pop.onrender.com/",
            code : "https://github.com/Websterverse/Animation",
            intro : "3D SCROLLING ANIMATION"

            
        },
        {
            id: 2,
            scr: Hills,

            demo: "https://zong-hills.onrender.com/",
            code : "https://github.com/Websterverse/ZONG_HILLS" ,
             intro : "3D PARALLAX EFFECT"
            //  3D Parallax Effect:
        },
        {
            id: 3,
            scr: Ball,
            demo: "https://we-have-balls.onrender.com/",
            code : "https://github.com/Websterverse/WE-HAVE-BALLS" ,
            intro : "SCROLLING ANIMATION " 
            // Scrolling Animation with Canvas
        },
        {
            id: 4,
            scr: Ship,
            demo: "https://cruise-39br.onrender.com/",
            code : "https://github.com/Websterverse/CRUISE",
             intro : "DRAGGABLE EFFECT"
            
        },
        {
            id: 5,
            scr: Ship,
            demo: "https://neglectedtemporalopposites.websterverse.repl.co/",
            code : "https://github.com/Websterverse/Cynthia_Clone",
             intro : "CYNTHIA WEBSITE"
            
        },
        {
            id: 6,
            scr: Ship,
            demo: "https://k1ngk4rr-imdb.netlify.app/",
            code : "https://github.com/Websterverse/IMDB",
             intro : "IMDB CLONE"

        },
        // {
        //     id: 7,
        //     scr: Rayban,
        //     demo: "https://god--websterverse.repl.co/",
        //     code : "https://github.com/Websterverse/TRACKKER"
        // },
        
    ]












    return (
<>
        <div  id='ppt' name="portfolio" className=' portfolio w-100  h-screen text-white bg-gradient-to-b from-gray-800 to-black  '   >
            {/* md:h-screen  */}
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center 
            w-full h-full    pcon  ' >

                <div className=' mt-16 pb-8' >
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500' > PROJECTS</p>
                    <p className='py-6' > Check some of my work right here</p>
                </div>



                <div className='  container   grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12  ' >
                {/* grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 */}

                    {portfolios.map(({ id, scr, demo , code  , intro}) => (



                        <div key={id} className='  shadow-md shadow-gray-500 rounded-lg   content    ' >
                  <center>          <p className='font-bold text-xl ' >{intro}         </p></center>

<div  className='con' >

                            <img src={scr} alt="" className='rounded-md duration-200 hover:scale-105 ' />
                            <div className='flex items-center justify-center   ' >
                                <a href={demo} target='blank' className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105' >DEMO</a>
                                <a href={code} target='blank' className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105' >CODE</a>
                            </div>
                            </div>
                        </div>


                    ))}

                </div>



                <center> <div className='  mb-8  p-8' >
                   

                                     <a href=""  target='_blank' className='cursor-pointer' >More</a>


                </div>
                </center>

            </div>


            
        </div>

        <div  id='ppt' name="portfolio" className=' portfolio w-100 pb-10  h-screen text-white bg-gradient-to-b from-gray-800 to-black  '   >
            {/* md:h-screen  */}
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center 
            w-full h-full    pcon  ' >

                <div className=' mt-16 pb-8' >
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500' > ANIMATIONS</p>
                    <p className='py-6' > Check some of my work right here</p>
                </div>



                <div className='  container   grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12  ' >
                {/* grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 */}

                    {portfolioss.map(({ id, scr, demo , code  , intro}) => (



                        <div key={id} className='  shadow-md shadow-gray-500 rounded-lg   content     ' >
                  <center>          <p className='font-bold text-xl ' >{intro}         </p></center>

<div  className='con' >

                            <img src={scr} alt="" className='rounded-md duration-200 hover:scale-105 ' />
                            <div className='flex items-center justify-center   ' >
                                <a href={demo} target='blank' className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105' >DEMO</a>
                                <a href={code} target='blank' className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105' >CODE</a>
                            </div>
                            </div>
                        </div>


                    ))}

                </div>



            

            </div>


            
        </div>






        <div  id='ppt' name="portfolio" className=' portfolio w-100 h-30 text-white bg-gradient-to-b from-gray-800 to-black  '   >
            {/* md:h-screen  */}
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center 
            w-full h-full    pcon  ' >

                <div className=' mt-16 pb-8' >
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500' >DOCUMENTATION ON PROJECTS</p>
                    <p className='py-6' > Check some of my work right here</p>
                </div>



                <div className='  container    h-30 ' >
           


                        <div  className='  shadow-md shadow-gray-500 rounded-lg   content    ' >
                  <center>          <p className='font-bold text-xl ' >PEOPLE CARE : HOSPITAL MANAGEMENT SYSTEM</p></center>

<div  className='con' >

                            <img src={Research} alt="" className='rounded-md ' />
                            <div className='flex items-center justify-center   ' >
                                <a href="https://drive.google.com/file/d/1crgu2QNOLBwfFsb5Of6DxxZYdo1RHitq/view?usp=sharing" target='blank' className=' px-6 py-3 m-4 duration-200 hover:scale-105' >READ</a>
                                {/* <a href={code} target='blank' className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105' >CODE</a> */}
                            </div>
                            </div>
                        </div>


                    

                </div>



             
            </div>


            
        </div>


        </>

    )
}

export default Portfolio
