import ScrollTrigger from "react-scroll-trigger";
import { useEffect, useState } from "react";
function Skills() {
    let [counterOn, setCounterOn] = useState(false);   

    const skills = [
        {name: 'Html', percentage: 97,},
        {name: 'Css', percentage: 99,},
        {name: 'Javascript', percentage: 95,},
        {name: 'ReactJs', percentage: 85,},
        {name: 'Tailwind', percentage: 98,},
        {name: 'GitHub', percentage: 30,},
        {name: 'Problem Solving', percentage: 50,},
    ]
    let [values, setValue] = useState(skills.map(() => 0));    
    let speed = 50;
                
    useEffect(() => {
        
        skills.forEach((skill,index) => {
            let currentValue = 0;
            const interval =  setInterval(() => {
                if(currentValue < skill.percentage) {
                    currentValue++
                    setValue(prev => {
                    let newValues = [...prev];
                    newValues[index] = currentValue;
                    return newValues;
                    })
                }
                else{
                    clearInterval(interval);
                }
        }, speed);
        
        })

    },[counterOn])
  return (
    <div id="skills" className="pt-32 px-3 lg:px-16">
        <div>
            <h3 data-aos="fade-right" data-aos-duration="600" className='text-3xl font-bold border-b-[5px] pb-1 border-solid w-fit pr-1 rounded-r-lg'>My Skills</h3>
        </div>
            <ScrollTrigger onExit={() => setCounterOn(false)} onEnter={() => setCounterOn(true)}>
            <div className="pt-2 grid grid-cols-2 lg:grid-cols-4 lg:gap-y-3">
                {skills.map((skill,index) => (
                    <div className="flex flex-col gap-2 justify-center items-center" key={skill.name}>
                        <div className="relative mt-9 w-[7em] h-[7em] lg:w-[8em] lg:h-[8em] flex justify-center items-center rounded-full border-2 border-solid before:content-[''] before:border-2 before:border-solid before:w-[6em] before:h-[6em]  before:lg:w-[7em] before:lg:h-[7em] before:bg-[#2C5364] before:rounded-full"
                            style={{background: `conic-gradient(#fff ${values[index] * 3.6}deg, #2C5364 0deg)`}}>
                            <h4 className="text-lg lg:text-xl font-bold absolute">{counterOn && values[index]}%</h4>
                        </div>
                        <p className='text-2xl font-bold text-center lg:text-lg'>{skill.name}</p>

                    </div>
                ))}
            </div>
          
        </ScrollTrigger>
    </div>
  )
}

export default Skills

   
