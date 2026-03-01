import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import React, { useEffect, useRef } from "react";

const Hero = () => {
  const headlineRef = useRef();
  const statsRef = useRef([]);
  const imageRef = useRef();
  const sectionRef = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.from(headlineRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      gsap.to([imageRef.current], {
        x: () => window.innerWidth - imageRef.current.offsetWidth,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=1500",
          scrub: 1,
          pin: true,
        },
      });

      gsap.from(".stat-card", {
        x: -50,
        opacity: 0,
        stagger: 0.2,
        duration: 0.8,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="race relative h-screen overflow-hidden "
    >
      <div className="h-full flex flex-col items-center relative z-10">
        <h1
          ref={headlineRef}
          className="w-full text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-bold  text-center tracking-[0.1em] md:tracking-normal mt-20 lg:mt-10 text-white"
        >
          Ready, Set, <span className="text-green gone-bg-fill">Gone</span>!
        </h1>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-40 lg:mt-10 px-10 md:px-0">
          <div
            ref={statsRef}
            className="stat-card rounded-xl p-6 bg-yellow-300 text-black"
          >
            <h2 className="text-4xl font-semibold mb-3">1,284 / 1,500</h2>
            <p className="text-xl">Total Registrations</p>
          </div>
          <div
            ref={statsRef}
            className="stat-card rounded-xl p-6 bg-green-300 text-black"
          >
            <h2 className="text-4xl font-semibold mb-3">92%</h2>
            <p className="text-xl"> Check-in Rate</p>
          </div>
          <div
            ref={statsRef}
            className="stat-card rounded-xl p-6 bg-blue-300 text-black"
          >
            <h2 className="text-4xl font-semibold mb-3">3:45:12</h2>
            <p className="text-xl">Average Finish Time</p>
          </div>
          <div
            ref={statsRef}
            className="stat-card rounded-xl p-6 bg-orange-300 text-black"
          >
            <h2 className="text-4xl font-semibold mb-3">88%</h2>
            <p className="text-xl">Net Promoter Score (NPS)</p>
          </div>
        </div>

        <div className="race-track absolute bottom-0 left-0 flex items-center w-full h-[150px] ">
          <div className="absolute left-4 bottom-0 h-full flex items-center">
            <span className="vertical-text h-full text-center text-white bg-black font-bold">
              START
            </span>
          </div>
          <div className="absolute right-4 bottom-0 h-full flex items-center">
            <span className="vertical-text h-full text-center text-white bg-black font-bold">
              FINISH
            </span>
          </div>
          <img
            ref={imageRef}
            src="/img/car.png"
            className="w-[200px] will-change-transform"
            alt="visual"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
