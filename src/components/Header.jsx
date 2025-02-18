// import { Link } from "react-router-dom";
import { CgMenuRight } from "react-icons/cg";
import { IoClose } from "react-icons/io5";
import Particle from "../Particle";
import { useState } from "react";
function Header() {
    const [open,setOpen] = useState(false);
    const closeNavList = () => {
        setOpen(false);
    }
  return (
    <div className="w-[100%] bg-gradient-to-r from-black to-purple-800 overflow-hidden fixed top-0 flex flex-col lg:flex-row lg:items-center lg:justify-between lg:px-[11em] lg:py-2 z-50 shadow-xl">
        <Particle />
        <div className="w-[100%] flex justify-between items-center p-3 text-xl font-bold shadow-2xl">
            <a data-aos="fade-right" data-aos-duration="600" className='font-["Oswald", sans-serif] lg:font-bold'>.Portfolio</a>
           {open ? <IoClose data-aos="fade-left" data-aos-duration="600" className="font-extrabold text-2xl lg:hidden" onClick={() => setOpen(false)}  /> : <CgMenuRight data-aos="fade-left" data-aos-duration="600" className="font-extrabold text-2xl lg:hidden" onClick={() => setOpen(true)} />}
        </div>
        <div>
            <ul data-aos="fade-left" data-aos-duration="600" className={open ? "w-[100%] flex flex-col items-center gap-20 h-screen pt-20 text-xl font-bold  bg-gradient-to-r from-black to-purple-800 translate-y-0 duration-[.3s] " : "translate-y-[300em] duration-[.3s] h-0 lg:translate-y-0 lg:h-fit lg:flex lg:gap-9 lg:text-sm font-bold pr-9 lg:pr-5"}>
                <li><a href="#aboutme" className="lg:cursor-pointer" onClick={() => closeNavList()}>AboutMe</a></li>
                <li><a href="#education" className="lg:cursor-pointer" onClick={() => closeNavList()}>Education</a></li>
                <li><a href="#projects" className="lg:cursor-pointer" onClick={() => closeNavList()}>MyProjects</a></li>
                <li><a href="#skills" className="lg:cursor-pointer" onClick={() => closeNavList()}>MySkills</a></li>
                <li><a href="#contactme" className="lg:cursor-pointer" onClick={() => closeNavList()}>ContactMe</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Header