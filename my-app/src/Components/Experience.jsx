import React from 'react'
import HTML from '../assert/html.png'
import NODEJS from "../assert/nodejs.png"
import CSS from "../assert/css.png"
import JS from "../assert/js.png"
import MONGO from "../assert/mongo.png"
import REACTJS from "../assert/reactjs.png"
import GSAP from "../assert/gsap.png"
import EXPRESS from "../assert/expressjs.png"
import BOOT from "../assert/bootstrap.png"
import WIND from "../assert/wind.png"
import '../Home.css'

const Experience = () => {

const techs = [

{
id : 1 ,
src : HTML ,
title : "HTML" ,
style : "shadow-orange-500"
},

{
id : 2 ,
src : CSS ,
title : "CSS" ,
style : "shadow-blue-500"
},

{
id : 3 ,
src : JS ,
title : "JS" ,
style : "shadow-yellow-500"
},

{
id : 4 ,
src : BOOT ,
title : "BOOTSTRAP" ,
style : "shadow-purple-500"
},

{
id : 5 ,
src : WIND ,
title : "TAILWIND" ,
style : "shadow-sky-400"
},

{
id : 6 ,
src : REACTJS ,
title : "REACTJS" ,
style : "shadow-blue-700"
},

{
id : 7,
src : NODEJS ,
title : "NODEJS" ,
style : "shadow-green-500"
},
{
id : 8,
src : EXPRESS ,
title : "EXPRESSJS" ,
style : "shadow-white"
},
{
id : 9,
src : MONGO ,
title : "MONGODB" ,
style : "shadow-green-700"
},

// {
// id : 10,
// src : GSAP ,
// title : "GSAP" ,
// style : "shadow-green-300"
// },










]








    return (
        <div name = "experience" className=' experience bg-gradient-to-b from-gray-800 to-black 
        w-full h-screen ' >


            <div className='mx-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white  ' >
                <div>

                    <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline' >EXPERIENCE</p>
                    <p className='py-6' >These are the tecnologies I've worked with </p>

                </div>

                <div className='  exp_container   w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12   ' >
                {/* w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0 */}

{
techs.map(({id , src , title , style})=>(


    <div key={id}  className={ `shadow-md  hover:scale-105 duration-500  exp py-2 rounded-lg ${style}` }>
    <img className='w-20 mx-auto' src={src} alt="" />
    <p className='mt-4' >{title}</p>
</div>

))


}




              
                </div>


            </div>


        </div>
    )
}

export default Experience


