import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaMeta } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
function Hero() {
  return (
    <div className="flex justify-center items-center mr-3 z-50">
      <div className='lg:w-[100%] pt-[13em] flex flex-col gap-16 lg:flex-row lg:justify-between ml-[1em] lg:ml-0 lg:pl-[12em] lg:pr-[7em] lg:pt-[13em] overflow-hidden'>
              <div className="px-3 lg:px-0 flex flex-col gap-9 lg:w-[100%]">
                  <div className='flex flex-col justify-center gap-3 lg:w-[100%]'>
                      <h2 data-aos="fade-right" data-aos-duration="600" className='text-4xl lg:text-5xl tracking-wider font-bold'>Marwa <span className='font-bold'>Beihaqi</span></h2>
                      <h3 data-aos="fade-right" data-aos-duration="1000" className='text-3xl lg:text-4xl font-bold tracking-wider'>Web Developer</h3>
                      <p data-aos="fade-right" data-aos-duration="1400" className="text-lg lg:text-xl tracking-wider font-semibold lg:w-[55%] lg:leading-10">I'm React Developer, I've started this journey few years ago, I've faced challenges, obstacles, and I'm still taking them and learn new things, so that improves my skills & my competence in this field 🙂.</p>
                  </div>
                  <div  data-aos="fade-right" data-aos-duration="1600" className="flex gap-5 items-center">
                      <a href="#"
                        onClick={() => document.getElementById('resumeDialog').showModal()}
                        className="flex justify-center items-center text-sm font-bold rounded-full px-9 py-2 bg-transparent border-2 border-solid border-white lg:text-base z-[8] relative after:content-[''] after:absolute after:h-[100%] after:w-0 after:left-0 after:bg-gradient-to-r after:from-black after:to-purple-800 after:transition-all after:duration-[.3s] after:z-[-1] after:rounded-full hover:after:w-[100%] hover:font-bold">Download CV</a>
                      <a 
                      href="mailto:marbei3021@gmail.com" 
                      className="flex justify-center items-center text-sm font-bold rounded-full px-9 py-2 bg-transparent border-2 border-solid border-white lg:text-base z-[8] relative after:content-[''] after:absolute after:h-[100%] after:w-0 after:left-0 after:bg-gradient-to-r after:from-black after:to-purple-800 after:transition-all after:duration-[.3s] after:z-[-1] after:rounded-full hover:after:w-[100%] hover:font-bold">Contact Me</a>
                  </div>
              </div>
              <div className="flex lg:flex-col justify-center items-center gap-16 lg:gap-20 text-3xl lg:text-3xl lg:mr-20">
                  <a 
                  href='https://www.linkedin.com/in/marwa-beihaqi-918028293?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BuW787BWwSWmvSewMOufRDg%3D%3D' 
                  target="_blank"  
                  data-aos="fade-left" 
                  data-aos-duration="600" 
                  className="z-[8]"
                  >
                    <FaLinkedinIn />
                  </a>

                  <a 
                  href="https://www.instagram.com/marwa__beihaqi/" 
                  target="_blank" 
                  data-aos="fade-left" 
                  data-aos-duration="800" 
                  className="z-[8]"
                  >
                    <FaInstagram/>
                  </a>

                  <a 
                  href="https://www.facebook.com/profile.php?id=61553584292295" 
                  target="_blank"  
                  data-aos="fade-left" 
                  data-aos-duration="900" 
                  className=" z-[8]"
                  >
                    <FaMeta className="block" />
                  </a>

                  <a 
                  href="https://github.com/mar-bei" 
                  target="_blank" 
                  data-aos="fade-left" 
                  data-aos-duration="1000"
                   className="z-[8]"
                   >
                    <FaGithub />
                  </a>

                </div>

                <dialog 
                  id="resumeDialog" 
                  className="z-50 w-[95%] lg:w-[40%] h-[50%] flex justify-center items-center bg-white/10 backdrop-blur-sm text-white rounded-xl"
                >
                  <form className="flex flex-col justify-center items-center gap-8" method="dialog">
                    <h3 className="text-2xl font-bold text-center">Choose the language of the Resume</h3>
                    <div className="flex items-center justify-center gap-5">
                      <a 
                      className="flex justify-center items-center px-8 py-1 bg-transparet border rounded-2xl z-[5]  relative after:content-[''] after:absolute after:h-[100%] after:w-0 after:left-0 after:bg-gradient-to-r after:from-black after:to-purple-800 after:transition-all after:duration-[.3s] after:z-[-1] after:rounded-2xl hover:after:w-[100%] hover:font-bold" 
                      href="/my_resumes/my_resume.pdf" 
                      target="_blank" 
                      download
                      >
                        English
                      </a>

                      <a 
                      className="flex justify-center items-center px-8 py-1 bg-transparent border rounded-2xl z-[5]  relative after:content-[''] after:absolute after:h-[100%] after:w-0 after:left-0 after:bg-gradient-to-r after:from-black after:to-purple-800 after:transition-all after:duration-[.3s] after:z-[-1] after:rounded-2xl hover:after:w-[100%] hover:font-bold" 
                      href="/my_resumes/mio_curriclum.pdf" 
                      target="_blank" 
                      download
                      >
                        Italian
                      </a>

                      <button 
                      onClick={() => document.getElementById('resumeDialog').close()}
                      className="flex justify-center items-center px-8 py-1 bg-transparent border rounded-2xl z-[5]  relative after:content-[''] after:absolute after:h-[100%] after:w-0 after:left-0 after:bg-gradient-to-r after:from-black after:to-purple-800 after:transition-all after:duration-[.3s] after:z-[-1] after:rounded-2xl hover:after:w-[100%] hover:font-bold"
                      >
                        Close
                      </button>
                    </div>
                    
                   
                  </form>
                </dialog>





          </div>
    </div>
    
  )
}

export default Hero