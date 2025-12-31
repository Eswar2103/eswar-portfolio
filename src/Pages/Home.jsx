import { useEffect, useRef, useState } from "react";
import Annotation from "../components/Annotation";
import IndiaMap from "../components/IndiaMap";
import Journey from "../components/Journey";

function Home() {
  const itemsRef = useRef([]);
  const [activeElement, setActiveElement] = useState(null);
  const [annotationHighlight, setAnnotationHighlight] = useState("");
  useEffect(() => {
    const container = document.getElementById("journey");
    function scrollJourney() {
      const scrollDownContainer = document.getElementById("scroll-down");
      const scrollUpContainer = document.getElementById("scroll-up");
      if (container.scrollTop > 0) {
        scrollDownContainer.classList.replace("opacity-100", "opacity-0");
      } else {
        scrollDownContainer.classList.replace("opacity-0", "opacity-100");
      }
      const scolledTotalHeight = container.scrollTop + container.clientHeight;
      if (scolledTotalHeight >= container.scrollHeight) {
        scrollUpContainer.classList.replace("opacity-0", "opacity-100");
      } else {
        scrollUpContainer.classList.replace("opacity-100", "opacity-0");
      }
    }
    container.addEventListener("scroll", scrollJourney);
    return () => container.removeEventListener("scroll", scrollJourney);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log("entry---:", entry.target.classList);
            if (entry.target.classList.contains("schooling")) {
              setAnnotationHighlight("ap");
            } else {
              setAnnotationHighlight("ka");
            }
            const index = itemsRef.current.indexOf(entry.target);
            setActiveElement(index);
          }
        });
      },
      {
        threshold: 0,
        root: document.getElementById("journey"),
        rootMargin: "-40% 0px -40% 0px",
      }
    );
    const elements = itemsRef.current;
    elements.forEach((el) => el && observer.observe(el));
    return () => {
      elements.forEach((el) => el && observer.unobserve(el));
    };
  }, []);
  return (
    <div>
      <div className="flex items-center justify-center mt-8">
        <div className="bg-white w-[800px] h-[300px] grid grid-cols-3 p-4 gap-4">
          <div className="bg-amber-400 flex items-center justify-center">1</div>
          <div className="col-span-2 bg-pink-400 flex items-center justify-center">
            2
          </div>
        </div>
      </div>
      <div className="mt-18 mx-auto max-w-5xl px-6 flex h-[450px]">
        <div className="relative w-[550px] max-w-[550px] text-center">
          <IndiaMap />
          <Annotation
            styles="left-[49%] top-[63%]"
            annotationHighlight={annotationHighlight == "ap"}
          >
            <p className="font-medium text-teal-300">Andhra Pradesh</p>
            <p className="text-gray-300">Born & Schooling</p>
          </Annotation>
          <Annotation
            styles="top-[70%] left-[28%]"
            annotationHighlight={annotationHighlight == "ka"}
          >
            <p className="font-medium text-teal-300">Karnataka</p>
            <p className="text-gray-300">B.E. & IT career</p>
          </Annotation>
        </div>
        <div
          id="journey"
          className="relative flex-1 overflow-y-auto scroll-hidden hover:backdrop-blur-xs"
        >
          <Journey itemsRef={itemsRef} activeElement={activeElement} />
          <p
            id="scroll-down"
            className="absolute opacity-100 transition-opacity duration-100 ease-in-out top-[91%] font-bold text-center bg-linear-to-t from-black/70 via-black/90 to-transparent text-white w-full py-2"
          >
            Scroll down ⬇️
          </p>
          <p
            id="scroll-up"
            className="absolute opacity-0 transition-opacity duration-100 ease-in-out bottom-0 font-bold text-center bg-linear-to-t from-black/70 via-black/90 to-transparent text-white w-full py-2"
          >
            Finished, Scroll Top ⬆️
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
