import { experience } from "../Utils";
import { SocialMediaIcon } from "../components/Utils";
import { FaLinkedin, FaSquareGithub } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { IoIosMail, IoMdDownload } from "react-icons/io";
import { FaRegEye } from "react-icons/fa";
import { useEffect, useState } from "react";

function Intro() {
  const exp = experience();

  return (
    <>
      <MobileIntro exp={exp} />
      <DesktopIntro exp={exp} />
    </>
  );
}

function Introtext({ exp }) {
  const [showText, setShowText] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setShowText(true), 0);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div
      className={`transition-all duration-700 ease-in ${showText ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
    >
      Hello, I'm{" "}
      <span className="text-3xl text-teal-400">
        Guru Eswar Sainath Reddy Kummithi (Eswar)
      </span>{" "}
      , a Bengaluru-based software developer with{" "}
      <span className="text-orange-400">{exp}</span> of professional experience.{" "}
      <br />
      <br />I specialize in building scalable web applications using{" "}
      <span className="text-orange-400">
        React JS, JavaScript, Node.js, and MongoDB
      </span>
      , with additional expertise in{" "}
      <span className="text-orange-400">Rust</span> for systems programming. My
      work spans both front-end and back-end development, making me a versatile
      full-stack engineer. I also have hands-on experience with AWS services
      such as{" "}
      <span className="text-orange-400">
        Lambda, S3, API Gateway, CloudFront, and DynamoDB
      </span>
      , enabling me to design and deploy cloud-native solutions.
    </div>
  );
}

function MobileIntro({ exp }) {
  return (
    <div className="block md:hidden relative bg-gray-900 py-5">
      <div className="absolute inset-0 bg-linear-to-b from-[#0c8f98] via-black to-transparent h-[500px]" />
      <div className="relative flex flex-col justify-center items-center gap-6">
        <div className="relative mt-20 w-[220px] h-[220px] rounded-full border-3 overflow-hidden">
          <Image />
        </div>
        <div className="flex justify-center items-center">
          <SocialMediaButtons />
        </div>
        <div className="text-white px-5 text-center tracking-wider">
          <Introtext exp={exp} />
        </div>
        <AdditionalButtons />
      </div>
    </div>
  );
}

function DesktopIntro({ exp }) {
  return (
    <div className="hidden md:block">
      <div className="relative w-full min-h-dvh grid grid-cols-4">
        <div className="col-span-1 bg-[#0a5257] relative">
          <div className="bg-gray-800 absolute inset-x-0 bottom-0 p-6 flex justify-center items-center">
            <SocialMediaButtons />
          </div>
        </div>
        <div className="col-span-3 bg-[#1A1A1A]">
          <div className="flex flex-col justify-center items-center h-full gap-5">
            <div className="w-[60%] text-white text-center font-bold text-lg ml-20 tracking-wider">
              <Introtext exp={exp} />
            </div>
            <AdditionalButtons />
          </div>
        </div>
        <div className="absolute w-[20vw] h-[20vw] rounded-full left-1/4 top-1/2 -translate-x-1/2 -translate-y-1/2 border-3 z-50 overflow-hidden">
          <Image />
        </div>
      </div>
    </div>
  );
}

function SocialMediaButtons() {
  return (
    <>
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
    </>
  );
}

function Image() {
  const [loaded, setLoaded] = useState(false);
  return (
    <>
      {!loaded && (
        <div
          className="absolute inset-0 
                        animate-pulse 
                        bg-gray-500"
        />
      )}
      <img
        onLoad={() => setLoaded(true)}
        src="./Eswar.jpg"
        className={`w-full h-full ${loaded ? "opacity-100" : "opacity-0"}`}
      />
    </>
  );
}

function AdditionalButtons() {
  return (
    <>
      <div className="flex gap-4 tracking-wider capitalize md:ml-20">
        <a
          href="./kummithi-guru-eswar-sainath-reddy-resume.pdf"
          download
          className="px-3 py-2 border-2 border-[#0c8f98] rounded-2xl text-[#0c8f98] font-bold text-md hover:text-teal-400 hover:border-teal-400 cursor-pointer transition-all duration-300"
        >
          <div className="flex justify-center items-center gap-1.5">
            <IoMdDownload /> Resume
          </div>
        </a>
        <div className="px-3 py-2 border border-none rounded-2xl bg-[#0c8f98] hover:bg-teal-500 font-bold text-md cursor-pointer transition-all duration-300">
          <Link to="/view-resume">
            <div className="flex justify-center items-center gap-1.5">
              <FaRegEye /> Resume
            </div>
          </Link>
        </div>
      </div>
      <div className="capitalize px-3 py-2 border border-none rounded-2xl bg-[#0c8f98] hover:bg-teal-500 font-bold text-md cursor-pointer md:ml-20 transition-all duration-300">
        <Link to="/getintouch">
          <div className="flex justify-center items-center gap-1.5">
            <IoIosMail className="text-xl" />
            Get in touch
          </div>
        </Link>
      </div>
    </>
  );
}

export default Intro;
