import { FaSquareGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <div className="bg-gray-800 mt-15 p-6 flex justify-center items-center">
      <SocialMediaIcon
        href="https://github.com/Eswar2103"
        ariaLabel="github profile"
      >
        <FaSquareGithub />
      </SocialMediaIcon>
      <SocialMediaIcon
        href="https://www.linkedin.com/in/kummithi-guru-eswar-sainath-reddy-853b22193/"
        ariaLabel="LinkedIn profile"
      >
        <FaLinkedin />
      </SocialMediaIcon>
    </div>
  );
}

function SocialMediaIcon({ children, href, ariaLabel }) {
  return (
    <a
      className="mx-2 text-3xl text-teal-300 hover:text-teal-500 transition-all duration-300 ease-in-out"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
    >
      {children}
      <span className="sr-only">Open in new tab</span>
    </a>
  );
}

export default Footer;
