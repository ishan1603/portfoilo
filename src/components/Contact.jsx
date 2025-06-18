import { useState, useEffect } from "react";
import AnimatedTitle from "./AnimatedTitle";
import Button from "./Button";
import EmailDialog from "./EmailDialog";

const Contact = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
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

  return (
    <div id="contact" className="my-20 min-h-96 w-screen px-5 sm:px-10">
      <div className="relative rounded-lg overflow-hidden py-24 text-blue-50">
        <video
          src="videos/contact.mp4"
          className="absolute left-0 top-0 size-full object-cover"
          muted
          autoPlay
          loop
        />
        <div className="relative flex flex-col items-center text-center">
          <p className="mb-10 font-general text-[10px] uppercase">
            Work Together
          </p>

          {isMobile ? (
            <h1 className="font-pixelify-sans text-4xl sm:text-5xl md:text-[6.2rem] w-full font-black leading-[.9]">
              Let's b<b>u</b>ild the <br /> future <br /> t<b>o</b>gether.
            </h1>
          ) : (
            <AnimatedTitle
              title="let&#39;s b<b>u</b>ild the <br /> future <br /> t<b>o</b>gether."
              containerClass="font-pixelify-sans !text-4xl sm:!text-5xl md:!text-[6.2rem] w-full !font-black !leading-[.9]"
            />
          )}

          <Button
            title="contact me"
            containerClass="mt-10 cursor-pointer"
            onClick={() => setIsDialogOpen(true)}
          />
        </div>
      </div>
      <EmailDialog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
      />
    </div>
  );
};

export default Contact;
