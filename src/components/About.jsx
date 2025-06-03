import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { useEffect, useState } from "react";

import AnimatedTitle from "./AnimatedTitle";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.matchMedia("(max-width: 768px)").matches);
    };

    // Initial check
    checkMobile();

    // Add event listener for window resize
    window.addEventListener("resize", checkMobile);

    // Cleanup
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=800 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });

    clipAnimation.to(".mask-clip-path", {
      width: "100%",
      height: "100vh",
      borderRadius: 0,
    });
  });

  return (
    <div id="about" className="min-h-screen w-full">
      <div className={`${isMobile ? "hidden" : "block"}`}>
        <div className="relative mb-0 mt-4 flex flex-col items-center gap-0.5 md:mb-8 md:mt-36 md:gap-5">
          <p className="font-general text-sm uppercase md:text-[10px]">
            Welcome to My Portfolio
          </p>

          <AnimatedTitle
            title="Bri<b>d</b>ging the art <br /> a<b>n</b>d science <b>o</b>f web"
            containerClass="!mt-0 md:mt-5 !text-black text-center"
          />

          <div className="about-subtext px-4 md:px-0">
            <p className="text-base text-gray-800 md:text-base">
              I am Ishan Misra, a dedicated undergraduate student at Manipal
              Institute of Technology, Bangalore.
            </p>
            <p className="mt-0.5 md:mt-4 text-sm text-gray-600 md:text-base">
              My journey in web development began during high school, where I
              focused on web architecture and security. This foundation has
              evolved into specialized expertise, enabling me to build robust
              solutions and create impactful digital experiences.
            </p>
          </div>
        </div>

        <div className="h-[50vh] md:h-dvh w-full" id="clip">
          <div className="mask-clip-path about-image">
            <video
              src="videos/about.mp4"
              alt="Background"
              className="absolute left-0 top-0 size-full object-cover"
              muted
              autoPlay
              loop
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
