import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaMeta } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
function Hero() {
  return (
    <div className='pt-32 flex flex-col gap-16 lg:flex-row lg:justify-between lg:px-16 overflow-hidden'>
        <div className="px-3 lg:px-0 flex flex-col gap-7 lg:w-[55%]">
            <div className='flex flex-col justify-center gap-3'>
                <h2 data-aos="fade-right" data-aos-duration="600" className='text-4xl tracking-wider font-bold'>Marwa <span className='font-bold'>Beihaqi</span></h2>
                <h3 data-aos="fade-right" data-aos-duration="1000" className='text-3xl font-bold tracking-wider'>Web Developer</h3>
                <p data-aos="fade-right" data-aos-duration="1400" className="text-lg tracking-wider font-semibold">I'm React Developer, I've started this journey few years ago, I've faced challenges, obstacles, and I'm still taking them and learn new things, so that improves my skills & my competence in this field 🙂.</p>
            </div>
            <div  data-aos="fade-right" data-aos-duration="1600" className="flex gap-2 items-center">
                <a href="#" className="flex justify-center items-center text-sm font-bold rounded-full px-5 py-1 bg-transparent border-2 border-solid border-white">Download CV</a>
                <a href="mailto:marbei3021@gmail.com" className="flex justify-center items-center text-sm font-bold rounded-full px-5 py-1 bg-transparent border-2 border-solid border-white">Contact Me</a>
            </div>
        </div>
        <div className="flex lg:flex-col justify-center items-center gap-12 text-4xl lg:text-3xl">
            <a href='https://www.linkedin.com/in/marwa-beihaqi-918028293?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BuW787BWwSWmvSewMOufRDg%3D%3D' target="_blank"  data-aos="fade-left" data-aos-duration="600" className="hover:scale-110"><FaLinkedinIn /></a>
            <a href="https://www.instagram.com/marwa__beihaqi/" target="_blank" data-aos="fade-left" data-aos-duration="800" className="hover:scale-110"><FaInstagram/></a>
            <a href="https://www.facebook.com/profile.php?id=61553584292295" target="_blank"  data-aos="fade-left" data-aos-duration="900" className="hover:scale-110"><FaMeta /></a> 
            <a href="https://github.com/marwabei" target="_blank" data-aos="fade-left" data-aos-duration="1000" className="hover:scale-110"><FaGithub /></a>
            </div>
    </div>
  )
}

export default Hero