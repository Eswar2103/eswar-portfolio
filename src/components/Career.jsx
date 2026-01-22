import { useEffect, useRef, useState } from "react";
import Annotation from "../components/Annotation";
import IndiaMap from "../components/IndiaMap";
import Journey from "../components/Journey";

function Career() {
  const itemsRef = useRef([]);
  const [activeElement, setActiveElement] = useState(null);
  const [annotationHighlight, setAnnotationHighlight] = useState("");

  useEffect(() => {
    const container = document.getElementById("journey");
    function scrollJourney() {
      const scrollDownContainer = document.getElementById("scroll-down");
      if (container.scrollTop > 0) {
        scrollDownContainer.classList.replace("opacity-100", "opacity-0");
      } else {
        scrollDownContainer.classList.replace("opacity-0", "opacity-100");
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
      },
    );
    const elements = itemsRef.current;
    elements.forEach((el) => el && observer.observe(el));
    return () => {
      elements.forEach((el) => el && observer.unobserve(el));
    };
  }, []);

  return (
    <div className="mt-18 mx-auto max-w-5xl flex flex-col sm:flex-row h-auto sm:h-[450px] justify-center gap-8">
      <div className="flex flex-col sm:flex-row relative flex-1 max-w-[550px] text-center justify-center items-center">
        <IndiaMap />
        <Annotation
          styles="left-[56%] top-[59%] sm:left-[53%] sm:top-[62%]"
          annotationHighlight={annotationHighlight == "ap"}
          type="left"
        >
          <p className="font-medium text-teal-300">Andhra Pradesh</p>
          <p className="text-gray-300">Born & Schooling</p>
        </Annotation>
        <Annotation
          styles="top-[62%] left-[22%] sm:top-[63%] sm:left-[24%]"
          annotationHighlight={annotationHighlight == "ka"}
          type="right"
        >
          <p className="font-medium text-teal-300">Karnataka</p>
          <p className="text-gray-300">B.E. & IT career</p>
        </Annotation>
      </div>
      <div
        id="journey"
        className="relative sm:flex-1 overflow-auto scroll-hidden sm:hover:backdrop-blur-xs h-[450px] sm:h-auto"
      >
        <Journey itemsRef={itemsRef} activeElement={activeElement} />
        <p
          id="scroll-down"
          className="absolute opacity-100 transition-opacity duration-100 ease-in-out top-[91%] font-bold text-center bg-linear-to-t from-black/70 via-black/90 to-transparent text-white w-full py-2"
        >
          Scroll down ⬇️
        </p>
      </div>
    </div>
  );
}

export default Career;
