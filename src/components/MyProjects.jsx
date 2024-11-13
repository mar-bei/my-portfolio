import proj1 from './imgs/project1.png';
import proj2 from './imgs/project2.png';
import proj3 from './imgs/project3.png';
import proj4 from './imgs/project4.png';
import proj5 from './imgs/project5.png';
import proj6 from './imgs/project6.png';
import proj7 from './imgs/project7.png';
// import mixitup from 'mixitup';

import React, { useState, useEffect } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, EffectCoverflow } from 'swiper/modules';

function MyProjects() {
  
  const projects_1 = [
    {
      id: 1,
      name: 'Coffee Website',
      img: proj4,
      demoLink: 'https://66f2effafba9b61f0b3311b6--jovial-fudge-d5e8c5.netlify.app/',
      category: 'reacttailwind',
      des: "Coffee website was created by Reactjs and tailwind css, it's a multi-pages website, contains «about-us» section, «coffee» section, «menu» section, and «profile» section"
    },
    {
      id: 2,
      name: 'Shoes Website',
      img: proj5,
      demoLink: 'https://candid-froyo-a8d570.netlify.app/',
      category: 'reacttailwind',
      des: "Shoes website was created by Reactjs and tailwind css, it's a landing page website, it's e-commerce website you can add product to cart or remove it, and also there's filtering by «category», «price», «colors», «brand», or filtering by «name»."

    },
    {
      id: 3,
      name: 'Cars Website',
      img: proj6,
      demoLink: 'https://fascinating-griffin-489d40.netlify.app/',
      category: 'reacttailwind',
      des: "Cars website was created by Reactjs and tailwind css, it's a multi-pages website, contains «home» section, «about-us» section, «our-cars» section, and «services» section."
    },
    {
      id: 4,
      name: 'Watch Website',
      img: proj3,
      demoLink: 'https://reliable-kulfi-ba078b.netlify.app/',
      category: 'htmlcss',
      des: "Watch website was created by Html5, Css3, and JS, it's a  multi-pages website, it's e-commerce website you can add product to cart or remove it, you can add quantity, there's also checkhout page, where you pay."

    },
    {
      id: 5,
      name: 'Headphones Website',
      img: proj2,
      demoLink: 'https://66db3fad360369cdb1b83938--profound-beignet-70f3dc.netlify.app/',
      category: 'htmlcss',
      des: "Headphones website was created by Html5, Css3, and JS, it's a landing page website, contains «home» section, «specs» section, «case» section, and «products» section."
    },
    {
      id: 6,
      name: 'Chips Website',
      img: proj1,
      demoLink: 'https://capable-gumption-5ed277.netlify.app/',
      category: 'htmlcss',
      des: "Chips website was created by Html5, Css3, and JS, it's a landing page website, contains «home» section, «favorites» section, «care» section, «products» section, and «contact» section."

    },

    {
      id: 7,
      name: 'Portfolio Website',
      img: proj7,
      demoLink: 'https://effervescent-axolotl-97df83.netlify.app/',
      category: 'reacttailwind',
      des: "My portfolio website was created by ReactJs and Tailwind css, it's a landing page website, contains «AboutMe» section, «MyProjects» section, «MySkills» section, and «ContactMe» section."

    },
    
  ];

  

  const breakpoint = {
    600:{
      slidesPerView: 3,
    }
  }
  const [project,setProjects] = useState(projects_1);
  const filterProjects = (cat) => {
    const newProjectList = projects_1.filter(i => i.category === cat);
    setProjects(newProjectList);
  }


  const buttons = document.querySelectorAll('button');
  buttons.forEach(e => {
    e.onclick = () => {
      buttons.forEach(i => i.classList.remove('active'));
      e.classList.add('active');
    }
  })

  return (
    <div id='projects' className='px-3 pt-20 flex flex-col gap-5 overflow-hidden lg:px-16'>
        <div className='flex flex-col gap-4'>
            <div>
                <h3 data-aos="fade-right" data-aos-duration="600" className='text-3xl font-bold border-b-[5px] pb-1 border-solid w-fit pr-1 rounded-r-lg'>My Projects</h3>
            </div>
            <div data-aos="fade-right" data-aos-duration="900" className='flex gap-3 items-center'>
                <button className='active bg-transparent border-2 border-solid border-white px-3 py-1 rounded-lg font-bold' onClick={() => setProjects(projects_1)}>All</button>
                <button className='bg-transparent border-2 border-solid border-white px-3 py-1 rounded-lg font-bold' onClick={() => filterProjects('htmlcss')}>Html & Css</button>
                <button className='bg-transparent border-2 border-solid border-white px-3 py-1 rounded-lg font-bold' onClick={() => filterProjects('reacttailwind')}>React & Tailwind</button>
            </div>
        </div>
        
      
          <Swiper
            breakpoints={breakpoint}
            slidesPerView={1}
            spaceBetween={30}
            speed={3000}
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            autoplay={{delay: 1}}            
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            modules={[Autoplay, EffectCoverflow]}
            className='ease-linear w-[100%] flex justify-center  items-center lg:mt-7'
          >
            {project.map(item => (
            <SwiperSlide className='lg:py-1' key={item.id} >
              <div data-aos='fade-left' data-aos-duration='1000' className='w-[100%] lg:w-[100%] bg-[#2C5364] flex flex-col gap-2 p-3 rounded-lg shadow-3xl border-2 border-solid z-0 py-2'>
                <div>
                  <img className='w-[100%] rounded-lg' src={item.img} alt={item.name} />
                </div>
                <p className='text-xl font-extrabold tracking-wider'>{item.name}</p>
                <p className='text-lg lg:text-base font-semibold'>{item.des}</p>
                <a target="_blank" className='w-[100%] flex justify-center items-center bg-transparent border-2  py-1 mt-2 font-bold rounded-full lg:hover:bg-white lg:hover:text-black' href={item.demoLink} >Demo</a>
              </div>
            </SwiperSlide>
            ))}
            
            
          </Swiper>
          
          {/* <Swiper
            breakpoints={breakpoint}
            slidesPerView={1}
            spaceBetween={30}
            speed={3000}
            autoplay={true}
            modules={[Autoplay]}
            className='ease-linear w-[100%] grid grid-cols-3 justify-center  items-center'
          >
            {projects_2.map(item => (
            <SwiperSlide key={item.id} >
              <div data-aos='fade-left' data-aos-duration='1000' className='w-[100%] bg-[#2C5364] flex flex-col gap-2 p-3 rounded-lg shadow-3xl border-2 border-solid z-0'>
                <div>
                  <img className='w-[100%] rounded-lg' src={item.img} alt={item.name} />
                </div>
                <p className='text-xl font-extrabold tracking-wider'>{item.name}</p>
                <p className='text-lg font-semibold'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic voluptas saepe recusandae dolorum ut non culpa perferendis eos corporis natus?</p>
                <a className='w-[100%] flex justify-center items-center bg-transparent border-2  py-1 mt-2 font-bold rounded-full' href={item.demoLink} target='_blank'>Demo</a>
              </div>
            </SwiperSlide>
            ))}
            
            
          </Swiper> */}
    </div>
  )
}

export default MyProjects

