import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { TiDocumentText } from "react-icons/ti";

const socialLinks = [
  {
    href: "https://www.linkedin.com/in/ishanm1603",
    icon: <FaLinkedin className="text-xl" />,
    label: "LinkedIn",
  },
  {
    href: "https://github.com/ishan1603",
    icon: <FaGithub className="text-xl" />,
    label: "GitHub",
  },
  {
    href: "https://leetcode.com/u/IshanM1603/",
    icon: <SiLeetcode className="text-xl" />,
    label: "LeetCode",
  },
  {
    href: "#",
    icon: <TiDocumentText className="text-xl" />,
    label: "Resume",
  },
];

const Footer = () => {
  return (
    <footer className="w-screen bg-[#5542ff] py-4 text-black">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
        <p className="text-center text-base font-light md:text-left">
          © Ishan Misra 2025. All rights reserved
        </p>

        <div className="flex justify-center gap-6 md:ml-auto">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black transition-colors duration-500 ease-in-out hover:text-white"
              title={link.label}
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
