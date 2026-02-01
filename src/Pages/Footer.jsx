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

export default Footer;
