import React from "react";

const About=()=>{
    return(
        <>
            <section id="about" className="py-5">
            <div className="2xl:container mx-auto w-[100%]">
                <div className="mx-auto w-[90%] grid grid-cols-1 lg:grid-cols-2 gap-3">
                   <div className="flex flex-col justify-center items-center lg:items-start gap-3">
                      <h1 className="text-[40px] font-[700] font-[Roboto]">Hi,I am</h1>
                      <h2 className="text-[40px] font-[700] font-[Roboto]">Dhirubhai</h2>
                      <p className="text-[30px] font-[700] font-[Roboto]">I am a Web Developer</p>
                      <p className="text-[20px] font-[500] font-[Roboto]"> As a final-year Engineering student at Meenakshi College of Engineering, I specialize in web development, proficient in Python, HTML, CSS, and JavaScript, with foundational knowledge of ReactJS. Passionate about front-end development and continuously improving my skills, I blend technical expertise with creativity in UI/UX design, Utilizing tools such as Figma and Miro.</p>
                      <a className="text-white font-[Roboto] font-[900] text-[20px] bg-violet-900 px-2 py-1 rounded-lg" href="https://drive.google.com/file/d/1LmeYH56U-cc2SfRgy_svgifSpypZuUXr/view?usp=drive_link">Check Resume</a>
                   </div>
                   <div>
                      <img src="./src/Images/img1.avif" alt="" />
                   </div>
                </div>
            </div>
         </section>
        </>
    )
}
export default About;