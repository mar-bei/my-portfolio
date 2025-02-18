import proj1 from './imgs/project1.png';
import proj2 from './imgs/project2.png';
import proj3 from './imgs/project3.png';
import proj4 from './imgs/project4.png';
import proj5 from './imgs/project5.png';
import proj6 from './imgs/project6.png';
import proj7 from './imgs/project7.PNG';
import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// import required modules
import { EffectCoverflow, Autoplay } from 'swiper/modules';


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
      demoLink: 'https://peppy-lamington-de94c4.netlify.app/',
      category: 'reacttailwind',
      des: "My portfolio website was created by ReactJs and Tailwind css, it's a landing page website, contains «AboutMe» section, «MyProjects» section, «MySkills» section, and «ContactMe» section."

    },
    
  ];

  

  const breakpoint = {
    600:{
      slidesPerView: 3,
    }
  }


 
  return (
    <div className='lg:mt-[17em] mt-[10em]' id='projects'>
      <div>
        <h3 data-aos="fade-right" data-aos-duration="600" className='text-3xl font-bold border-b-[5px] pb-1 border-solid w-fit pr-1 rounded-r-lg ml-[1em] lg:ml-[7em]'>My_Projects</h3>
      </div>


        <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={1}
        loop={true}
        speed={1000}
        breakpoints={breakpoint}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        modules={[EffectCoverflow, Autoplay]}
        className="w-[90%] lg:w-[80%] mt-[2em] lg:mt-[3em]"
      >
        {projects_1.map((p,i) => (
          <SwiperSlide className="z-[8] lg:w-[50%] bg-gradient-to-r from-black to-purple-800 h-fit pb-7 lg:pb-9 rounded-xl shadow-xl">
            <div className="flex flex-col gap-5 lg:gap-3 " key={i}>
              <div>
                <img className='lg:w-[100%] object-contain rounded-t-xl' src={p.img}/>
              </div>
              <h3 className='lg:text-2xl text-xl lg:pl-3 lg:pr-5 font-bold' alt="img">{p.name}</h3>
              <p className="lg:text-lg text-lg pl-3 pr-5 lg:pl-3 lg:pr-5 tracking-wide">{p.des}</p>
              <a 
              href={p.demoLink} 
              target='_blank'
              className='w-[100%] flex justify-center items-center'>
                <button 
                className="w-[90%] py-1 bg-transparent border-2 text-white font-semi-bold rounded-2xl relative hover:bg-white hover:text-purple-950 transition-all duration-[.3s] hover:scale-100 hover:font-bold"
                >
                  Demo
                </button>
              </a>
            </div>
          </SwiperSlide>
          
        ))}
        
       
        </Swiper>

    </div>
   
  )
}

export default MyProjects

