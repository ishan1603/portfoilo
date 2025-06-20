import { useState, useRef } from "react";
import { TiLocationArrow } from "react-icons/ti";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const techLinks = {
  "Next.js": "https://nextjs.org",
  Supabase: "https://supabase.com",
  Stripe: "https://stripe.com",
  TypeScript: "https://www.typescriptlang.org",
  Tailwind: "https://tailwindcss.com",
  React: "https://react.dev",
  "Node.js": "https://nodejs.org",
  MongoDB: "https://www.mongodb.com",
  Express: "https://expressjs.com",
  "Socket.io": "https://socket.io",
  Prisma: "https://www.prisma.io",
  PostgreSQL: "https://www.postgresql.org",
  "AWS S3": "https://aws.amazon.com/s3",
  Zod: "https://zod.dev",
  "Vapi AI": "https://vapi.ai",
  Clerk: "https://clerk.com",
  "React Router": "https://reactrouter.com",
  "Context API": "https://react.dev/learn/passing-data-deeply-with-context",
  Nodemon: "https://nodemon.io",
  Nginx: "https://www.nginx.com",
  Sentry: "https://sentry.io",
  HTML5: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  CSS3: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  Git: "https://git-scm.com",
  Docker: "https://www.docker.com",
  Vercel: "https://vercel.com",
  Netlify: "https://www.netlify.com",
  "GitHub Actions": "https://github.com/features/actions",
  Cloudinary: "https://cloudinary.com",
};

export const BentoTilt = ({ children, className = "" }) => {
  const [transformStyle, setTransformStyle] = useState("");
  const itemRef = useRef(null);

  const handleMouseMove = (event) => {
    if (!itemRef.current) return;

    const { left, top, width, height } =
      itemRef.current.getBoundingClientRect();

    const relativeX = (event.clientX - left) / width;
    const relativeY = (event.clientY - top) / height;

    const tiltX = (relativeY - 0.5) * 5;
    const tiltY = (relativeX - 0.5) * -5;

    const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(.95, .95, .95)`;
    setTransformStyle(newTransform);
  };

  const handleMouseLeave = () => {
    setTransformStyle("");
  };

  return (
    <div
      ref={itemRef}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: transformStyle }}
    >
      {children}
    </div>
  );
};

export const BentoCard = ({
  src,
  title,
  description,
  textColor = "text-blue-50",
  websiteLink,
  sourceCodeLink,
  techStack = [],
  isWIP = false,
}) => {
  return (
    <div className="relative size-full">
      <video
        src={src}
        loop
        muted
        autoPlay
        className="absolute left-0 top-0 size-full object-cover object-center"
      />
      <div
        className={`relative z-10 flex size-full flex-col justify-between p-3 md:p-5 ${textColor}`}
      >
        <div>
          <h1 className="bento-title font-pixelify-sans text-xl md:text-2xl lg:text-3xl">
            {title}
          </h1>
          {description && (
            <p className="mt-2 md:mt-3 max-w-64 text-[10px] sm:text-xs md:text-sm lg:text-base">
              {description}
            </p>
          )}
          {techStack.length > 0 && (
            <div className="mt-2 md:mt-4 flex flex-wrap gap-1 md:gap-2">
              {techStack.map((tech, index) =>
                tech === "|" ? (
                  <div key={index} className="w-full" />
                ) : (
                  <a
                    key={index}
                    href={techLinks[tech]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer rounded-full bg-black/20 px-2 md:px-4 py-1 md:py-2 text-[10px] sm:text-xs md:text-sm lg:text-base text-white transition-all duration-300 hover:bg-black/40 hover:scale-110"
                  >
                    {tech}
                  </a>
                )
              )}
            </div>
          )}
        </div>

        <div className="flex gap-2 md:gap-3">
          {websiteLink && (
            <a
              href={isWIP ? undefined : websiteLink}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-1 rounded-full px-2 md:px-4 py-1 md:py-2 text-[10px] sm:text-xs md:text-sm text-white transition-all ${
                isWIP
                  ? "cursor-not-allowed bg-black/10"
                  : "cursor-pointer bg-black/20 hover:bg-black/40"
              }`}
            >
              <FaExternalLinkAlt className="text-xs md:text-sm" />
              <span>{isWIP ? "WIP" : "Website"}</span>
            </a>
          )}
          {sourceCodeLink && (
            <a
              href={isWIP ? undefined : sourceCodeLink}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-1 rounded-full px-2 md:px-4 py-1 md:py-2 text-[10px] sm:text-xs md:text-sm text-white transition-all ${
                isWIP
                  ? "cursor-not-allowed bg-black/10"
                  : "cursor-pointer bg-black/20 hover:bg-black/40"
              }`}
            >
              <FaGithub className="text-xs md:text-sm" />
              <span>{isWIP ? "WIP" : "Source"}</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const Features = () => (
  <section className="bg-black pb-52">
    <div className="container mx-auto px-3 md:px-10">
      <div className="px-5 py-32">
        <p className="font-circular-web text-lg text-blue-50" id="projects">
          Curated Work
        </p>
        <p className="max-w-md font-circular-web text-lg text-blue-50 opacity-50">
          Where vision meets execution <br /> Designed with intent.
        </p>
      </div>

      <BentoTilt className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
        <BentoCard
          src="videos/feature-1.mp4"
          title={
            <>
              Neur<b>a</b>Nest
            </>
          }
          description="An LMS SaaS platform built from scratch using Next.js, Supabase, and Stripe. It features secure user authentication, flexible subscription plans, and seamless payment integration."
          textColor="text-black"
          websiteLink="https://neura-nest.vercel.app"
          sourceCodeLink="https://github.com/ishan1603/NeuraNest"
          techStack={[
            "Next.js",
            "Supabase",
            "Stripe",
            "TypeScript",
            "Tailwind",
            "|",
            "Zod",
            "Vapi AI",
            "Clerk",
          ]}
        />
      </BentoTilt>

      <div className="grid h-[135vh] w-full grid-cols-2 grid-rows-3 gap-7">
        <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2">
          <BentoCard
            src="videos/feature-2.mp4"
            title={
              <>
                Ac<b>a</b>dBond
              </>
            }
            description="A collaborative platform connecting professors and students for research paper development. Features real-time collaboration, mentorship tracking, and seamless document sharing to streamline academic research workflows."
            websiteLink="https://acadbond.com"
            sourceCodeLink="https://github.com/ishan1603/AcadBond"
            techStack={["React", "Node.js", "MongoDB", "Express", "Socket.io"]}
            isWIP={true}
          />
        </BentoTilt>

        <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1">
          <BentoCard
            src="videos/feature-3.mp4"
            title={
              <>
                Ch<b>a</b>tApp
              </>
            }
            description="A feature-rich real-time messaging platform with video and voice calling capabilities. Includes media sharing, user authentication, and real-time notifications. Built with modern web technologies for seamless communication."
            websiteLink="https://tweevee.vercel.app"
            sourceCodeLink="https://github.com/ishan1603/TweeVee"
            techStack={[
              "React",
              "Next.js",
              "Tailwind",
              "Socket.io",
              "Cloudinary",
              "Supabase",
            ]}
            isWIP={true}
          />
        </BentoTilt>

        <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1">
          <BentoCard
            src="videos/pixelart.mp4"
            title={
              <>
                W<b>i</b>P
              </>
            }
            description="A Web3 platform leveraging blockchain technology to revolutionize digital interactions. Coming soon with innovative features and decentralized solutions."
            textColor="text-white"
            isWIP={true}
          />
        </BentoTilt>

        <BentoTilt className="bento-tilt_2">
          <div className="flex size-full flex-col justify-between bg-violet-300 p-5">
            <h1 className="bento-title font-pixelify-sans max-w-64 text-black">
              M<b>o</b>re co<b>m</b>ing s<b>o</b>on.
            </h1>

            <TiLocationArrow className="m-5 scale-[5] self-end" />
          </div>
        </BentoTilt>

        <BentoTilt className="bento-tilt_2">
          <video
            src="videos/feature-5.mp4"
            loop
            muted
            autoPlay
            className="size-full object-cover object-center"
          />
        </BentoTilt>
      </div>
    </div>
  </section>
);

export default Features;
