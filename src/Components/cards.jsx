import React from "react";

const Cards=()=>{
    return(
      <>
        <section className="py-5">
             <div className="2xl:container mx-auto w-[100%]">
                 <div className="mx-auto w-[90%] grid grid-cols-1 lg:grid-cols-2 gap-5">
                   <div className="flex flex-col justify-center items-center lg:items-start gap-3 shadow-lg rounded-lg bg-violet-900 text-white px-4 py-4">
                      <h1 className="text-[25px] font-[Roboto] font-[700]">TechnoHacks EduTechOfficial</h1>
                      <p className="text-[18px] font-[Roboto] font-[400]">Mar-Apr-2024</p>
                      <p className="text-[20px] font-[Roboto] font-[700]">•Gained extensive knowledge and skills through hands-on experience working on real-world projects.</p>
                      <p className="text-[20px] font-[Roboto] font-[700]">•Receiving the certificate symbolizes the hard work and skills acquired during the internship.</p>
                      <p className="text-[20px] font-[Roboto] font-[700]">•Proficient in HTML, CSS, and JavaScript with a solid understanding of front-end development principles.</p>
                      <p className="text-[20px] font-[Roboto] font-[700]">•Experienced in creating responsive and user-friendly web interfaces for diverse clients</p>
                   </div>
                   <div className="flex flex-col justify-center items-center lg:items-start gap-6 shadow-lg rounded-lg bg-violet-900 text-white px-4 py-4">
                      <h1 className="text-[25px] font-[Roboto] font-[700]">CodeBind Technology</h1>
                      <p className="text-[18px] font-[Roboto] font-[400]">July-Aug-2024</p>
                      <p className="text-[20px] font-[Roboto] font-[700]">•Completed a one-month offline internship at CodeBind Technologies in web development.</p>
                      <p className="text-[20px] font-[Roboto] font-[700]">•Gained substantial knowledge and hands-on experience in my respected domain.</p>
                      <p className="text-[20px] font-[Roboto] font-[700]">•The internship was a wonderful journey of learning and growth.</p>
                      <p className="text-[20px] font-[Roboto] font-[700]">•Nowlooking forward to learning more and enhancing my skills further.</p>
                   </div>
                 </div>
             </div>
          </section>
      </>
    )
}
export default Cards;