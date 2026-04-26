import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaRocket, FaPaintBrush, FaCode } from "react-icons/fa";

export default function GsapPage() {
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Hero Section Animation
      gsap.from(".hero-item", {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.3,
        ease: "bounce"
      });

      // About Section Animation
      gsap.from(".about-item", {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.3,
         ease: "bounce",
        scrollTrigger: {
          trigger: ".about-section",
          start: "top 40%",
          markers: true,
        },
      });

      gsap.from(".card-item", {
          y: 150,
          opacity: 0,
          scale: 0.8,
          duration: 1,
          delay:1,
           ease: "linear",
          stagger: 0.8,
          scrollTrigger: {
            trigger: ".card-section",
            start: "top 60%",
            end: "top 20%",
            scrub: true, // 👈 scroll ke sath move karega
            markers: true,
          },
        });


      gsap.from(".contact-item", {
          y: 100,
          opacity: 0,
          duration: 1,
          stagger: 0.3,
          scrollTrigger: {
            trigger: ".contact-item",
            start: "top 40%",
            markers: true,
          },
        });
    });

    
    gsap.to(".orbit", {
     rotate: 720,
     ease: "none",
     scrollTrigger: {
       trigger: ".orbit-section",
       start: "top center",
       end: "bottom center",
       scrub: true, // 👈 scroll ke sath rotate
       markers: true,
     },
   });

    return () => ctx.revert();
  }, []);

  return (
     <div className="font-sans text-gray-800">

     {/* HERO */}
     <section className="flex flex-col items-center justify-center h-screen px-6 text-center text-white bg-gradient-to-r from-blue-500 to-indigo-600">
       <h1 className="mb-6 text-6xl font-bold hero-item">
         Build Modern UI 🚀
       </h1>
       <p className="max-w-xl mb-8 text-xl hero-item">
         Create smooth animations and premium interfaces using GSAP & React.
       </p>
       <button className="px-8 py-3 text-blue-600 bg-white rounded-full shadow-lg cursor-pointer hover:scale-110 hero-item">
         Get Started
       </button>
       
     </section>

     {/* ABOUT */}
     <section className="flex flex-col items-center justify-center h-screen px-6 text-center bg-white about-section">
       <h2 className="mb-6 text-4xl font-bold about-item">
         About This Project
       </h2>
       <p className="max-w-2xl mb-6 text-lg about-item">
         This project demonstrates how to use GSAP animations with React to
         build smooth, interactive and modern UI experiences.
       </p>

       <ul className="space-y-3 text-lg about-item">
         <li>✨ Smooth Animations</li>
         <li>⚡ High Performance</li>
         <li>📱 Responsive Design</li>
       </ul>
     </section>

     {/* SERVICES */}
     <section className="py-20 text-center bg-gray-800 card-section">
       <h2 className="mb-12 text-4xl font-bold card-item">
         Our Services
       </h2>

       <div className="grid gap-8 px-10 md:grid-cols-3 ">
         <div className="p-8 transition bg-black bg-white shadow-lg card-item rounded-2xl hover:scale-105">
           <FaPaintBrush className="mx-auto mb-4 text-4xl text-blue-500" />
           <h3 className="mb-2 text-xl font-semibold">UI/UX Design</h3>
           <p>Modern and user-friendly interface designs.</p>
         </div>

         <div className="p-8 transition bg-black bg-white shadow-lg card-item rounded-2xl hover:scale-105">
           <FaCode className="mx-auto mb-4 text-4xl text-green-500" />
           <h3 className="mb-2 text-xl font-semibold">Frontend Dev</h3>
           <p>React, Next.js and scalable frontend solutions.</p>
         </div>

         <div className="p-8 transition bg-black bg-white shadow-lg card-item rounded-2xl hover:scale-105">
           <FaRocket className="mx-auto mb-4 text-4xl text-purple-500" />
           <h3 className="mb-2 text-xl font-semibold">GSAP Animation</h3>
           <p>Smooth and high-performance animations.</p>
         </div>
       </div>
     </section>

     {/* CONTACT */}
     <section className="flex flex-col items-center justify-center h-screen px-6 text-black contact-section bg-gradient-to-r from-orange-100 to-green-4200">
       <h2 className="mb-6 text-4xl font-bold contact-item">
         Contact Us
       </h2>

       <p className="mb-8 text-lg contact-item">
         Let’s build something amazing together.
       </p>

       <form className="flex flex-col w-full max-w-md gap-4 bg-">
         <input
           type="text"
           placeholder="Your Name"
           className="p-3 text-black border-2 border-black rounded-lg contact-item"
         />
         <input
           type="email"
           placeholder="Your Email"
           className="p-3 text-black border-2 border-black rounded-lg contact-item"
         />
         <textarea
           placeholder="Your Message"
           className="p-3 text-black border-2 border-black rounded-lg contact-item"
         ></textarea>

         <button className="py-3 text-white transition bg-black rounded-lg contact-item hover:scale-105">
           Send Message
         </button>
       </form>
     </section>

     {/* ORBIT SECTION */}
     <section className="flex items-center justify-center h-screen bg-black">
       <div className="relative w-96 h-96 orbit">
         
         {/* Circle Line */}
         <svg className="absolute w-full h-full">
           <circle
             cx="50%"
             cy="50%"
             r="150"
             stroke="white"
             strokeWidth="2"
             fill="none"
             strokeDasharray="5,5"
           />
         </svg>

         {/* Orbit Boxes */}
         <div className="absolute top-0 -translate-x-1/2 bg-blue-500 left-1/2 w-14 h-14 rounded-xl"></div>
         <div className="absolute right-0 -translate-y-1/2 bg-red-500 top-1/2 w-14 h-14 rounded-xl"></div>
         <div className="absolute bottom-0 -translate-x-1/2 bg-green-500 left-1/2 w-14 h-14 rounded-xl"></div>
         <div className="absolute left-0 -translate-y-1/2 bg-yellow-500 top-1/2 w-14 h-14 rounded-xl"></div>

         {/* Center */}
         <div className="absolute flex items-center justify-center w-20 h-20 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full top-1/2 left-1/2">
           ⚙️
         </div>
       </div>
     </section>

   </div>
  );
}