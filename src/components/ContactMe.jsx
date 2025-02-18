import { FaArrowRight } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { PiMessengerLogoBold } from "react-icons/pi";
import { FaWhatsapp } from "react-icons/fa";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
function ContactMe() {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_vbbxuds', 'template_9j9lz2j', form.current, {
        publicKey: 'DaxafGPB64OtQd6Fr',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <div id="contactme" className='mx-[1em] mt-[10em] lg:mt-[16em] px-3 lg:px-[13em] overflow-hidden'>
        <div>
            <h3 data-aos="fade-right" data-aos-duration="600" className='text-3xl font-bold border-b-[5px] pb-1 border-solid w-fit pr-1 rounded-r-lg'>ContactMe</h3>
        </div>
        <div className="flex flex-col gap-9 lg:flex-row lg:justify-between mt-3 lg:mt-0">
            <form ref={form} onSubmit={sendEmail} className='pt-5 w-[100%] lg:w-[50%] flex flex-col gap-y-2'>
                <div className='w-[100%] flex items-center gap-2'>
                    <input 
                    data-aos="fade-right" 
                    data-aos-duration="800"  
                    className='w-[100%] bg-transparent border-[3px] border-solid py-2 lg:py-3 lg:tracking-wider lg:text-xs lg:font-semibold px-2 font-extrabold text-white rounded-lg text-sm outline-none z-[8]' 
                    type="text" 
                    name="from_firstname" 
                    placeholder='FirstName'
                    />

                    <input 
                    data-aos="fade-right" 
                    data-aos-duration="1000"  
                    className='w-[100%] bg-transparent border-[3px] border-solid py-2 lg:py-3 lg:tracking-wider lg:text-xs lg:font-semibold px-2 font-extrabold text-white rounded-lg text-sm outline-none z-[8]' 
                    type="text" 
                    name="from_lastname" 
                    placeholder='LastName'
                    />
                </div>

                <div className='flex flex-col gap-2'>
                    <input 
                    data-aos="fade-right" 
                    data-aos-duration="1200"  
                    className='w-[100%] bg-transparent border-[3px] border-solid py-2 lg:py-3 lg:tracking-wider lg:text-xs lg:font-semibold px-2 font-extrabold text-white rounded-lg text-sm outline-none z-[8]' 
                    type="email"
                     name="from_email" 
                     placeholder='Email'
                     />

                    <input 
                    data-aos="fade-right" 
                    data-aos-duration="1400"  
                    className='w-[100%] bg-transparent border-[3px] border-solid py-2 lg:py-3 lg:tracking-wider lg:text-xs lg:font-semibold px-2 font-extrabold text-white rounded-lg text-sm outline-none z-[8]' 
                    type="text" 
                    name="subject" 
                    placeholder='Subject'
                    />

                    <textarea 
                    data-aos="fade-right" 
                    data-aos-duration="1600"  
                    className='w-[100%] pt-1 bg-transparent border-[3px] border-solid h-[17em] px-2 lg:pt-1 rounded-lg text-sm outline-none z-[8]' 
                    name="message" 
                    placeholder='Message'
                    >
                    </textarea>
                </div>

                <div className='w-[100%]'>
                    <input 
                    data-aos="fade-right" 
                    data-aos-duration="1700"  
                    className='w-[100%] py-2 lg:py-2 lg:text-base text-lg bg-white flex justify-center items-center text-black font-bold rounded-full lg:cursor-pointer z-[8]' 
                    type="submit" 
                    value="Send" 
                    />
                </div>
            </form>

             <div className="flex lg:flex-col justify-center lg:items-start lg:justify-center items-center gap-16 lg:gap-24 text-4xl lg:text-3xl">
                <a 
                href="https://www.linkedin.com/in/marwa-beihaqi-918028293/" 
                target="_blank"  
                data-aos="fade-left" 
                data-aos-duration="600" 
                className="hover:scale-110 z-[8]"
                >
                  <FaLinkedinIn />
                </a>

                <a 
                href="https://www.instagram.com/marwa__beihaqi/" 
                target="_blank"  
                data-aos="fade-left" 
                data-aos-duration="800" 
                className="hover:scale-110 z-[8]"
                >
                  <FaInstagram/>
                </a>

                <a 
                href="https://www.facebook.com/profile.php?id=61553584292295" 
                target="_blank"  
                data-aos="fade-left" 
                data-aos-duration="900" 
                className="hover:scale-110 z-[8]"
                >
                  <PiMessengerLogoBold />
                </a>

                <a 
                href="https://wa.link/6mr2q4" 
                target="_blank"  
                data-aos="fade-left" 
                data-aos-duration="1000" 
                className="hover:scale-110 z-[8]"
                >
                  <FaWhatsapp />
                </a>

             </div>
        </div>
       
    </div>
  )
}

export default ContactMe