import { motion } from 'framer-motion';
import html from '../components/imgs/html.png';
import java from '../components/imgs/java.png';
import ubunto from '../components/imgs/Ubuntu.png';
import css from '../components/imgs/css.png';
import js from '../components/imgs/js.png';
import react from '../components/imgs/react.png';
import tailwind from '../components/imgs/tailwind.svg';
import vsc from '../components/imgs/vs-code.png';
import r from '../components/imgs/Redux.png';
import lang_c from '../components/imgs/C.png';
import ecl from '../components/imgs/eclipse-img.png';
import framer_motion from '../components/imgs/framer-motion.png';
import React, { useEffect, useRef } from 'react';

function Skills() {
    const icons = [html, css, js, java, lang_c, react, tailwind, r, framer_motion, ubunto, vsc, ecl];


    const lang = [
       {
            id: 1,
            name: "Html",
            img: html,
        },

        {
            id: 2,
            name: "Css",
            img: css,
        },

        {
            id: 3,
            name: "Javascript",
            img: js,
        },

        {
            id: 4,
            name: "C",
            img: lang_c,
        },

        {
            id: 5,
            name: "Java",
            img: java,
        },
    ]

    const framwork = [
        {
             id: 1,
             name: "Tailwind",
             img: tailwind,
         },
 
         {
             id: 2,
             name: "React",
             img: react,
         },
 
         {
             id: 3,
             name: "Redux",
             img: r,
         },

         {
            id: 4,
            name: "Framer Motion",
            img: framer_motion,
        },
     ]

     const tools = [
        {
            id: 1,
            name: "VS Code",
            img: vsc,
        },

        {
            id: 2,
            name: "Eclipse",
            img: ecl,
        },

        {
            id: 3,
            name: "Ubuntu",
            img: ubunto,
        },
     ]


     const numOfRepeat = 500;
     const langList = Array(numOfRepeat).fill(lang).flat();
     const frameworkList = Array(numOfRepeat).fill(framwork).flat();
     const toolsList = Array(numOfRepeat).fill(tools).flat();




  return (
        <div id="skills" className="mt-[10em] lg:mt-[17em] px-8 lg:px-[0] lg:mx-[13em] relative">
        <div className="">
                <h3 className="text-3xl font-bold border-b-[6px] pb-1 lg:mb-1 border-solid w-fit pr-1 rounded-r-lg">
                My_Skills
                </h3>
            </div>                
                <div className='flex flex-col gap-9'>
                    <div className='w-[100%] lg:w-[45%]'>
                        <h2 className='text-xl font-bold mt-7'>Programming Languages</h2>
                        <div className='flex flex mt-5 mr-5 My-gradient w-[100%] overflow-hidden'>
                            <motion.div 
                            initial={{x: "-80%"}}
                            animate={{x: 0}}
                            transition={{duration: 3000, repeat: Infinity, ease:"linear"}}
                            className='w-fit flex items-center gap-20 flex-shrink-0'>
                                {langList.map((l,i) => (
                                    <img className="w-12 h-12 object-contain" src={l.img} alt={l.name} key={i}/>
                                ))}
                            </motion.div>
                        </div>
                    </div>
                
                    <div className='w-[100%] lg:w-[45%]'>
                        <h2 className='text-xl font-bold mt-7'>Framworks and Libraries</h2>
                        <div className='flex flex mt-5 mr-5 My-gradient w-[100%] overflow-hidden'>
                            <motion.div 
                            initial={{x: 0}}
                            animate={{x: "-80%"}}
                            transition={{duration: 3000, repeat: Infinity, ease:"linear"}}
                            className='w-fit flex items-center gap-20 flex-shrink-0'>
                                {frameworkList.map(l => (
                                    <img className="w-12 h-12 object-contain" src={l.img} alt={l.name}/>
                                ))}
                            </motion.div>

                        
                        </div>
                    </div>

                    <div className='w-[100%] lg:w-[45%]'>
                        <h2 className='text-xl font-bold mt-7'>Tools</h2>
                        <div className='flex flex mt-5 mr-5 My-gradient w-[100%] overflow-hidden'>
                            <motion.div 
                            initial={{x: "-80%"}}
                            animate={{x: 0}}
                            transition={{duration: 3000, repeat: Infinity, ease:"linear"}}
                            className='w-fit flex items-center gap-20 flex-shrink-0'>
                                {toolsList.map(l => (
                                    <img className="w-12 h-12 object-contain" src={l.img} alt={l.name}/>
                                ))}
                            </motion.div>
                        </div>
                    </div>
                </div>  

             
    </div>
    
  )
}

export default Skills


