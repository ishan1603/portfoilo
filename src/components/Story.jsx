import { BentoTilt, BentoCard } from "./Features";
import AnimatedTitle from "./AnimatedTitle";

const techCategories = [
  {
    title: "Frontend",
    description: "Modern UI frameworks and styling solutions",
    techStack: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind",
      "HTML5",
      "CSS3",
      "React Router",
      "Context API",
    ],
    src: "videos/frontend.mp4",
  },
  {
    title: "Backend",
    description: "Robust server-side technologies",
    techStack: [
      "Node.js",
      "Express",
      "MongoDB",
      "PostgreSQL",
      "Prisma",
      "Socket.io",
      "Supabase",
      "Nodemon",
    ],
    src: "videos/backend.mp4",
  },
  {
    title: "DevOps & Tools",
    description: "Development and deployment tools",
    techStack: [
      "Git",
      "AWS S3",
      "Docker",
      "Vercel",
      "Netlify",
      "GitHub Actions",
      "Nginx",
    ],
    src: "videos/devops.mp4",
  },
  {
    title: "APIs & Services",
    description: "Third-party integrations and services",
    techStack: ["Stripe", "Clerk", "Vapi AI", "Cloudinary", "Zod", "Sentry"],
    src: "videos/api.mp4",
  },
];

const Story = () => {
  return (
    <div id="skills" className="min-h-dvh w-screen bg-black text-blue-50">
      <div className="container mx-auto px-3 py-32 md:px-10">
        <div className="px-5">
          <div className="flex flex-col items-center">
            <p className="font-general text-sm uppercase md:text-[10px] mb-10">
              Skill-Set
            </p>
            <AnimatedTitle
              title="Technologies I <b>W</b>ork <br /> <b>W</b>ith"
              containerClass="mt-5 font-pixelify-sans !md:text-[12rem] w-full !text-8xl !font-black !leading-[.9] "
            />
            <p className="mt-3 max-w-md mx-auto text-center font-circular-web text-lg text-blue-50 opacity-50">
              A comprehensive toolkit for building modern web applications.
            </p>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-7 md:grid-cols-2">
          {techCategories.map((category, index) => (
            <BentoTilt key={index} className="bento-tilt_1">
              <BentoCard
                src={category.src}
                title={category.title}
                description={category.description}
                techStack={category.techStack}
                textColor="text-white"
              />
            </BentoTilt>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Story;
