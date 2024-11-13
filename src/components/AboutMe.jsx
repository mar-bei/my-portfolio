import React, { useState } from 'react'
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
function AboutMe() {
   const [counterOn, setCounterOn] = useState(false);
  return (
    <div id='aboutme' className='pt-32 h-screen px-3 flex flex-col gap-3 lg:gap-12 lg:px-16 overflow-hidden scroll-smooth'>
        <div className='flex flex-col gap-3 lg:gap-4 w-[100%]'>
           <div>
                <h3 data-aos="fade-right" data-aos-duration="600" className='text-3xl font-bold border-b-[5px] pb-1 border-solid w-fit pr-1 rounded-r-lg'>AboutMe</h3>
            </div>
            <div>
                <p data-aos="fade-left" data-aos-duration="800" className='text-lg font-semibold tracking-wider lg:tracking-wider lg:leading-loose'>I'm React Developer, I've started this journey when I was studying in high school, I've studied this field by my own, I discover this field in informatics subject in 1st year at high school, then I search more about specializations and I choosed web developement, and I still want to improve my skills, I want to learn new technologies and frameworks that fit the trends.</p>
            </div> 
        </div>
            
            <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                <div className='flex flex-col lg:flex-row lg:justify-between lg:items-center text-2xl lg:text-3xl gap-2 font-bold'>
                    <h3 data-aos="fade-right" data-aos-duration="1000">+{counterOn && <CountUp start={0} end={1} duration={3} delay={0} />}  Year experience</h3>
                    <h3 data-aos="fade-left" data-aos-duration="1200">+{counterOn && <CountUp start={0} end={5} duration={3} delay={0} />}  projects</h3>
                    <h3 data-aos="fade-right" data-aos-duration="1400">+{counterOn && <CountUp start={0} end={3} duration={3} delay={0} />}  languages</h3>
                </div>
            </ScrollTrigger>
            
        
    </div>
  )
}

export default AboutMe