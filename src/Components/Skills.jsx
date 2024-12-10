import React from "react";
import { IoLogoNodejs } from "react-icons/io5";
import { SiMysql } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { SiPython } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";
import { DiFirebase } from "react-icons/di";
import { GrReactjs } from "react-icons/gr";
import { IoLogoHtml5 } from "react-icons/io";
import { FaCss3Alt } from "react-icons/fa";
import { FaJs } from "react-icons/fa6";
import { SiTailwindcss } from "react-icons/si";
import { IoLogoGithub } from "react-icons/io";
import { VscVscode } from "react-icons/vsc";
import { SiPostman } from "react-icons/si";
import { IoLogoFigma } from "react-icons/io5";
import { BiLogoNetlify } from "react-icons/bi";

const Skills=()=>{
    return(
        <>
         <div id="skills" className="flex flex-col justify-center items-center gap-3">
            <h1 className="text-[36px] font-[Roboto] font-[700]">Skills</h1>
            <p className="text-[20px] font-[Roboto] font-[700]">Here are some of my Skills on which i have been working on for the Past 1 Year </p>
         </div>
         <section className="py-10">
            <div className="2xl:container mx-auto w-[100%]">
                <div className="mx-auto w-[90%] grid grid-cols-1 lg:grid-cols-3 gap-9">
                    <div className="flex flex-col justify-center items-center gap-7 shadow-lg rounded-lg px-4 py-4 bg-violet-900">
                        <h1 className="text-white font-[Roboto] font-[700] text-[36px]">FRONT END</h1>
                        <div className="flex flex-row justify-center items-center gap-4">
                        <GrReactjs className="text-white font-[Roboto] font-[900]   text-[90px] rounded-lg px-2 py-1 w-36" />
                        <IoLogoHtml5 className="text-white font-[Roboto] font-[900] text-[90px] rounded-lg px-2 py-1 w-36" />
                        </div>
                        <div className="flex flex-row justify-center items-center gap-4">
                        <FaCss3Alt className="text-white font-[Roboto] font-[900]  text-[90px] rounded-lg px-2 py-1 w-36" />
                        <FaJs className="text-white font-[Roboto] font-[900]       text-[90px] rounded-lg px-2 py-1 w-36" />
                        </div>
                        <SiTailwindcss className="text-white font-[Roboto] font-[900] text-[90px] rounded-lg px-2 py-1 w-36" />
                    </div>
                    <div className="flex flex-col justify-center items-center gap-7 shadow-lg rounded-lg px-4 py-4 bg-violet-900">
                        <h1 className="text-white font-[Roboto] font-[700] text-[36px]">BACK END</h1>
                        <div className="flex flex-row justify-center items-center gap-4">
                        <IoLogoNodejs className="text-white font-[Roboto] font-[900]  text-[90px] rounded-lg px-2 py-1 w-36" />
                        <SiMysql className="text-white font-[Roboto] font-[900]   text-[90px] rounded-lg px-2 py-1 w-36" />
                        </div>
                        <div className="flex flex-row justify-center items-center gap-4">
                        <SiExpress className="text-white font-[Roboto] font-[900]   text-[90px] rounded-lg px-2 py-1 w-36" />
                        <SiPython className="text-white font-[Roboto] font-[900]   text-[90px] rounded-lg px-2 py-1 w-36" />
                        </div>
                        <div className="flex flex-row justify-center items-center gap-4">
                        <SiMongodb className="text-white font-[Roboto] font-[900]  text-[90px] rounded-lg px-2 py-1 w-36" />
                        <SiPostgresql className="text-white font-[Roboto] font-[900] text-[90px] rounded-lg px-2 py-1 w-36" />
                        </div>
                        <DiFirebase className="text-white font-[Roboto] font-[900]  text-[90px] rounded-lg px-2 py-1 w-36" />
                    </div>
                    <div className="flex flex-col justify-center items-center gap-7 shadow-lg rounded-lg px-4 py-4 bg-violet-900">
                        <h1 className="text-white font-[Roboto] font-[700] text-[36px]">TOOLS</h1>
                        <div className="flex flex-row justify-center items-center gap-4">
                        <IoLogoGithub className="text-white font-[Roboto] font-[900]  text-[90px] rounded-lg px-2 py-1 w-36" />
                        <VscVscode className="text-white font-[Roboto] font-[900]   text-[90px] rounded-lg px-2 py-1 w-36" />
                        </div>
                        <div className="flex flex-row justify-center items-center gap-4">
                        <SiPostman className="text-white font-[Roboto] font-[900]  text-[90px] rounded-lg px-2 py-1 w-36" />
                        <IoLogoFigma className="text-white font-[Roboto] font-[900]  text-[90px] rounded-lg px-2 py-1 w-36" />
                        </div>
                        <BiLogoNetlify className="text-white font-[Roboto] font-[900] text-[90px] rounded-lg px-2 py-1 w-36" />
                    </div>
                </div>
            </div>
         </section>
        </>
    )
}
export default Skills;