import { FaSquareGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <div className="bg-gray-800 mt-15 p-6 flex justify-center items-center">
      <FaSquareGithub className="mx-2 text-3xl text-teal-300 hover:text-teal-500 transition-all duration-300 ease-in-out" />
      <FaLinkedin className="mx-2 text-3xl text-teal-300 hover:text-teal-500 transition-all duration-300 ease-in-out" />
    </div>
  );
}

export default Footer;
