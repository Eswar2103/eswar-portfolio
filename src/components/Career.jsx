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
    <div className="mt-18 mx-auto max-w-5xl flex flex-col sm:flex-row sm:h-[450px]">
      <div className="flex flex-col sm:flex-row relative w-[350px] sm:w-[450px] max-w-[550px] text-center">
        <IndiaMap />
        <Annotation
          styles="left-[57%] top-[58%] sm:left-[49%] sm:top-[63%]"
          annotationHighlight={annotationHighlight == "ap"}
        >
          <p className="font-medium text-teal-300">Andhra Pradesh</p>
          <p className="text-gray-300">Born & Schooling</p>
        </Annotation>
        <Annotation
          styles="top-[70%] left-[24%]"
          annotationHighlight={annotationHighlight == "ka"}
        >
          <p className="font-medium text-teal-300">Karnataka</p>
          <p className="text-gray-300">B.E. & IT career</p>
        </Annotation>
      </div>
      <div
        id="journey"
        className="relative flex-1 overflow-auto scroll-hidden hover:backdrop-blur-xs"
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
