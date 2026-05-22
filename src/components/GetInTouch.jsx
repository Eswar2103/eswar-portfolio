import { FaLinkedin, FaSquareGithub } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

function GetInTouch() {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;
  return (
    <div
      id="getintouch"
      className="min-h-dvh flex flex-col items-center justify-center gap-8 bg-gray-900 px-4 relative"
    >
      {isActive("/getintouch") && (
        <Link
          to="/"
          className="text-stone-400 flex items-center gap-2 underline underline-offset-2 hover:text-stone-300 absolute top-10 right-5"
        >
          <FaArrowLeft className="text-sm" />
          back to main page
        </Link>
      )}
      <div className="text-teal-400 flex justify-center items-center gap-x-2 border border-stone-600 bg-black/40 px-3 py-1 rounded-lg text-lg uppercase font-bold tracking-widest">
        <IoIosMail className="text-2xl" />
        <p className="tracking-wider">Get in Touch</p>
      </div>

      <p className="text-white/60 text-center max-w-md tracking-wider leading-relaxed">
        Open to new opportunities, collaborations, or just a conversation.
        <br />
        Feel free to reach out.
      </p>

      <a
        href="mailto:kummithi.sai00@gmail.com"
        className="flex items-center gap-2 px-6 py-3 bg-[#0c8f98] hover:bg-teal-500 text-white font-bold rounded-2xl tracking-wider transition-all duration-300"
      >
        <IoIosMail className="text-xl" />
        kummithi.sai00@gmail.com
      </a>

      <div className="flex gap-4">
        <a
          href="https://www.linkedin.com/in/kummithi-guru-eswar-sainath-reddy-853b22193/"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 px-4 py-2 border border-stone-600 text-white/70 hover:text-teal-400 hover:border-teal-400 rounded-2xl tracking-wider transition-all duration-300"
        >
          <FaLinkedin /> LinkedIn
        </a>
        <a
          href="https://github.com/Eswar2103"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 px-4 py-2 border border-stone-600 text-white/70 hover:text-teal-400 hover:border-teal-400 rounded-2xl tracking-wider transition-all duration-300"
        >
          <FaSquareGithub /> GitHub
        </a>
      </div>
    </div>
  );
}

export default GetInTouch;
