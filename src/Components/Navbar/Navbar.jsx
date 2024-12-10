import React from "react";
import { Link } from "react-scroll";
import "./Navbar.css";

const Navbar=()=>{
    return(
        <>
         <section className="py-5 shadow-lg">
            <div className="2xl:container mx-auto w-[100%]">
                <div className="mx-auto w-[90%] grid grid-cols-1 lg:grid-cols-3">
                    <div>
                    <h1 className="text-violet-900 text-[36px] font-[Roboto] font-[700]">Portfolio</h1>
                    </div>
                    <div className="flex flex-row justify-end items-center gap-7">
                            <a className="text-[18px] font-[700] font-[Roboto]" href="#">
                            <Link to="about" smooth={true} duration={500}>About</Link>
                            </a>
                            <a className="text-[18px] font-[700] font-[Roboto]" href="#">
                            <Link to="skills" smooth={true} duration={500}>Skills</Link>
                            </a>
                            <a className="text-[18px] font-[700] font-[Roboto]" href="#">
                            <Link to="experience" smooth={true} duration={500}>Experience</Link>
                            </a>
                            <a className="text-[18px] font-[700] font-[Roboto]" href="#">
                            <Link to="contact" smooth={true} duration={500}>Contact</Link>
                            </a>
                    </div>
                    <div className="flex flex-row justify-end items-center">
                    <a className="text-white font-[Roboto] font-[900] text-[20px] bg-violet-900 px-2 py-1 rounded-lg hero-1" href="https://github.com/Dhirubhaidhanush">Github Profile</a>
                    </div>
                </div>
            </div>
         </section>
        </>
    )
}
export default Navbar;