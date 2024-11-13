import { FaRegCopyright } from "react-icons/fa";

function Footer() {
  return (
    <div className="mt-32 pt-5 bg-gradient-to-b from-[#0F2027] to-[#2C5364] overflow-hidden">
    <div className=' flex flex-col lg:flex-row lg:item-center lg:justify-between lg:px-32 px-3 gap-9'>
        <div>
            <a href="#" data-aos="fade-right" data-aos-duration="600" className='text-2xl lg:text-2xl font-bold'>.Portfolio</a>
        </div>
        <div>
            <h3 data-aos="fade-right" data-aos-duration="700" className='text-2xl lg:text-2xl font-bold'>Links</h3>
            <ul data-aos="fade-right" data-aos-duration="800" className='flex flex-col gap-1 tracking-wider lg:text-sm'>
                <li data-aos="fade-right" data-aos-duration="600"><a href="#aboutme">AboutMe</a></li>
                <li data-aos="fade-right" data-aos-duration="700"><a href="#projects">MyProjects</a></li>
                <li data-aos="fade-right" data-aos-duration="800"><a href="#skills">MySkills</a></li>
                <li data-aos="fade-right" data-aos-duration="900"><a href="#contactme">ContactMe</a></li>
            </ul>
        </div>
        <div>
            <h3 data-aos="fade-right" data-aos-duration="800" className='text-2xl lg:text-2xl font-bold'>Social-media</h3>
            <ul data-aos="fade-right" data-aos-duration="900" className='flex flex-col gap-1 tracking-wider lg:text-sm'>
                <li data-aos="fade-right" data-aos-duration="600"><a href="https://www.linkedin.com/in/marwa-beihaqi-918028293?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BuW787BWwSWmvSewMOufRDg%3D%3D" target="blank">LinkedIn</a></li>
                <li data-aos="fade-right" data-aos-duration="700"><a href="https://www.instagram.com/marwa__beihaqi/" target="_blank">Instagram</a></li>
                <li data-aos="fade-right" data-aos-duration="800"><a href="https://www.facebook.com/profile.php?id=61553584292295" target="_blank">Meta</a></li>
                <li data-aos="fade-right" data-aos-duration="900"><a href="https://github.com/mbeihaqi" target="_blank">GitHub</a></li>
            </ul>
        </div>

    </div>
    <div data-aos="fade-left" data-aos-duration="800" className="flex items-center text-xs justify-center pt-7 lg:pt-20 pb-20 lg:pb-12 gap-1 font-semibold lg:tracking-wider">
        <FaRegCopyright/>
        <h4>copyright developed by | All rights reserved</h4>
    </div>
    </div>
  )
}

export default Footer