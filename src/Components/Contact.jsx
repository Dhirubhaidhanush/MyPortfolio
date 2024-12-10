import React from "react";

const Contact=()=>{
    return(
        <>
         <div className="flex flex-row justify-center items-center py-5">
            <h1 className="text-[25px] font-[Roboto] font-[700]">CONTACT ME</h1>
         </div>
         <section id="contact" className="py-5">
            <div className="2xl:container mx-auto w-[100%]">
               <div className="mx-auto w-[90%] grid grid-cols-1 lg:grid-cols-2 gap-5">
                  <div className="flex flex-col justify-center items-center gap-5">
                     <h1 className="font-[Roboto] font-[700] text-[25px]">Email Me</h1>
                     <input className="bg-violet-900 px-2 py-2 rounded-lg w-96 text-white" type="text" placeholder="Your Email" />
                     <input className="bg-violet-900 px-2 py-2 rounded-lg w-96 text-white" type="text" placeholder="Your Name" />
                     <input className="bg-violet-900 w-96 py-12 rounded-lg text-white" type="text" placeholder="Message" />
                     <button className="bg-violet-900 w-96 text-white px-2 py-2 rounded-lg">Send</button>
                  </div>
                  <div className="flex flex-col justify-center items-center lg:items-start gap-6">
                    <h1 className="text-[30px] font-[700]">Feel free to reach out to me through the form or using the details below.</h1>
                    <p className="text-[20px] font-[500]">dhirubhaisairaj@gmail.com</p>
                    <a className="text-[20px] font-[500]" href="https://www.linkedin.com/in/vs-dhirubhai-519848300/">Linkedin</a>
                    <p className="text-[20px] font-[500]">+91 7305419024</p>
                    <p className="text-[20px] font-[500]">Chennai, Tamil Nadu, India</p>
                  </div>
               </div>
            </div>
         </section>
        </>
    )
}
export default Contact;