import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { LiaCopyrightSolid } from "react-icons/lia";
import { Link } from "react-scroll";

const Footer=()=>{
    return(
        <>
         <section id="footer" className="py-5 bg-black">
            <div className="2xl:container mx-auto w-[100%]">
                <div className="mx-auto w-[90%] grid grid-cols-1 lg:grid-cols-1">
                    <div className="flex flex-col justify-center items-center gap-6">
                        <h1 className="text-white text-[25px] font-[Roboto] font-[700]">Dhirubhai</h1>
                        <div className="flex flex-row justify-center items-center gap-6">
                        <a className="text-[18px] text-white font-[700] font-[Roboto]" href="#">
                        <Link to="about" smooth={true} duration={500}>About</Link>
                        </a>
                        <a className="text-[18px] text-white font-[700] font-[Roboto]" href="#">
                        <Link to="skills" smooth={true} duration={500}>Skills</Link>
                        </a>
                        <a className="text-[18px] text-white font-[700] font-[Roboto]" href="#">
                        <Link to="experience" smooth={true} duration={500}>Experience</Link>
                        </a>
                        <a className="text-[18px] text-white font-[700] font-[Roboto]" href="#">
                        <Link to="experience" smooth={true} duration={500}>Contact</Link>
                        </a>
                        <a className="text-[18px] text-white font-[700] font-[Roboto]" href="#">Education</a>
                        </div>
                        <div className="flex flex-row justify-center items-center gap-6">
                        <a href="https://www.linkedin.com/in/vs-dhirubhai-519848300/"><FaLinkedin className="text-white text-[30px]"/></a>
                        <a href="https://github.com/Dhirubhaidhanush"><FaGithub className="text-white text-[30px]" /></a>
                        <a href=""><FaInstagram className="text-white text-[30px]" /></a>
                        </div>
                        <div className="flex flex-row justify-center items-center gap-3">
                        <LiaCopyrightSolid className="text-white text-[20px]" />
                        <p className="text-white">2024 Dhirubhai.All rights reserved</p>
                        </div>
                    </div>
                </div>
            </div>
         </section>
        </>
    )
}
export default Footer;