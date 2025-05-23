import AnimatedTitle from "./AnimatedTitle";
import Button from "./Button";

const Contact = () => {
  return (
    <div id="contact" className="my-20 min-h-96 w-screen px-10">
      <div className="relative rounded-lg overflow-hidden py-24 text-blue-50">
        <video
          src="videos/hero-1.mp4"
          className="absolute left-0 top-0 size-full object-cover"
          muted
          autoPlay
          loop
        />
        <div className="relative flex flex-col items-center text-center">
          <p className="mb-10 font-general text-[10px] uppercase">
            Work Together
          </p>

          <AnimatedTitle
            title="let&#39;s b<b>u</b>ild the <br /> future <br /> t<b>o</b>gether."
            className="font-pixelify-sans !md:text-[6.2rem] w-full !text-5xl !font-black !leading-[.9]"
          />

          <Button
            title="contact me"
            containerClass="mt-10 cursor-pointer"
            href="mailto:ishanm1603@gmail.com"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
