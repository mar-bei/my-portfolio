import React, { useState } from 'react'
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
function AboutMe() {
   const [counterOn, setCounterOn] = useState(false);
  return (
    <div id='aboutme' className='mt-[16em] lg:mt-[10em] h-fit px-3 flex w-[90%] lg:w-[100%] flex-col lg:flex-row lg:justify-between lg:items-center gap-3 lg:gap-16 lg:px-[12em] overflow-hidden scroll-smooth'>
        <div className='flex flex-col gap-3 lg:gap-4 w-[100%] lg:w-[60%] ml-[1em] lg:ml-0'>
           <div>
                <h3 data-aos="fade-right" data-aos-duration="600" className='text-3xl font-bold border-b-[5px] pb-1 border-solid w-fit pr-1 rounded-r-lg'>AboutMe</h3>
            </div>
            <div>
                <p data-aos="fade-left" data-aos-duration="800" className='w-[100%] text-lg pt-3 font-semibold tracking-wider lg:tracking-wider lg:leading-loose'>I'm React Developer, I've started this journey when I was studying in high school, I've studied this field by my own, I discover this field in informatics subject in 1st year at high school, then I search more about specializations and I choosed web developement, and I still want to improve my skills, I want to learn new technologies and frameworks that fit the trends.</p>
            </div> 
        </div>
            
            <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                <div className='flex flex-col lg:flex-col lg:justify-center lg:items-start text-xl lg:text-2xl gap-4 lg:gap-12 pt-3 lg:pt-5 font-bold relative lg:before:content-[""] lg:before:w-[0.1em] lg:before:h-[100%] lg:before:absolute lg:before:-left-[5.5em] lg:before:bg-white'>
                    <h3 data-aos="fade-right" data-aos-duration="1000">+{counterOn && <CountUp start={0} end={1} duration={3} delay={0}/>}  Year experience</h3>
                    <h3 data-aos="fade-left" data-aos-duration="1200">+{counterOn && <CountUp start={0} end={5} duration={3} delay={0} />}  projects</h3>
                    <h3 data-aos="fade-right" data-aos-duration="1400">+{counterOn && <CountUp start={0} end={3} duration={3} delay={0} />}  languages</h3>
                </div>
            </ScrollTrigger>
            
        
    </div>
  )
}

export default AboutMe