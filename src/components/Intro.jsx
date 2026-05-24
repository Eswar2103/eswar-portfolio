import { useEffect, useState } from "react";
import { SocialMediaIcon } from "../components/Utils";
import { FaLinkedin, FaSquareGithub } from "react-icons/fa6";
import { FaRegEye } from "react-icons/fa";
import IntroText from "./IntroText";

function Intro() {
  return (
    <>
      <MobileIntro />
      <DesktopIntro />
    </>
  );
}

function MobileIntro() {
  return (
    <div className="block lg:hidden relative bg-gray-900 py-5">
      <div className="absolute inset-0 bg-linear-to-b from-[#0c8f98] via-black to-transparent h-[500px]" />
      <div className="relative flex flex-col justify-center items-center gap-6">
        <div className="relative mt-20 w-[220px] h-[220px] rounded-full border-3 overflow-hidden">
          <Image />
        </div>
        <div className="flex justify-center items-center">
          <SocialMediaButtons />
        </div>
        <div className="px-5 text-center tracking-wider min-h-[700px]">
          <IntroText />
        </div>
      </div>
    </div>
  );
}

function DesktopIntro() {
  return (
    <div className="hidden lg:block">
      <div className="relative w-full min-h-dvh grid grid-cols-4">
        <div className="col-span-1 bg-[#0a5257] relative">
          <div className="bg-gray-800 absolute inset-x-0 bottom-0 p-6 flex justify-center items-center">
            <SocialMediaButtons />
          </div>
        </div>
        <div className="col-span-3 bg-[#1A1A1A]">
          <div className="flex flex-col justify-center items-center h-full gap-5">
            <div className="w-[60%] text-center font-bold text-lg ml-20 tracking-wider">
              <IntroText />
            </div>
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
        src="https://resume-guru-eswar-sainath-reddy-k.s3.ap-south-2.amazonaws.com/Eswar.jpg"
        className={`w-full h-full ${loaded ? "opacity-100" : "opacity-0"}`}
      />
    </>
  );
}

export default Intro;
