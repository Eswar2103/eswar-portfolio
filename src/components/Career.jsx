import { useEffect, useRef, useState } from "react";
import Annotation from "../components/Annotation";
import IndiaMap from "../components/IndiaMap";
import Journey from "../components/Journey";

function Career() {
  const itemsRef = useRef([]);
  const [activeElement, setActiveElement] = useState(null);
  const [annotationHighlight, setAnnotationHighlight] = useState("");
  const [positions, setPositions] = useState({});

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

  useEffect(() => {
    const svg = document.getElementById("india-map");
    const apPoint = document.getElementById("ap-point");
    const annotationAp = document.getElementById("annotation-box-ap");
    const kaPoint = document.getElementById("ka-point");
    const annotationKa = document.getElementById("annotation-box-ka");
    const parent = svg.parentElement;

    function calculatePosition() {
      if (
        !svg ||
        !parent ||
        !apPoint ||
        !annotationAp ||
        !kaPoint ||
        !annotationKa
      )
        return;

      function calculateStateBasedPosition(statePoint, annotation) {
        const pt = svg.createSVGPoint();
        pt.x = statePoint.cx.baseVal.value;
        pt.y = statePoint.cy.baseVal.value;

        const screenPoint = pt.matrixTransform(svg.getScreenCTM());

        const parentRect = parent.getBoundingClientRect();

        const top = screenPoint.y - parentRect.top - annotation.offsetHeight;
        const left =
          screenPoint.x - parentRect.left - annotation.offsetWidth / 2;
        return { left, top };
      }

      let apPositions = calculateStateBasedPosition(apPoint, annotationAp);
      let kaPositions = calculateStateBasedPosition(kaPoint, annotationKa);

      setPositions({
        ap: { left: apPositions.left + 20, top: apPositions.top },
        ka: { left: kaPositions.left - 40, top: kaPositions.top },
      });
    }

    calculatePosition();

    // Recalculate on resize
    window.addEventListener("resize", calculatePosition);

    return () => {
      window.removeEventListener("resize", calculatePosition);
    };
  }, []);

  return (
    <div className="mt-18 mx-auto max-w-6xl flex flex-col md:flex-row h-auto md:h-[450px] justify-center gap-4 md:gap-8 px-4">
      <div className="flex relative md:w-2/5 md:flex-shrink-0 text-center justify-center items-center min-h-[300px] md:min-h-0">
        <IndiaMap />
        <Annotation
          extraStyles={{
            left: `${positions?.ap?.left || 0}px`,
            top: `${positions?.ap?.top || 0}px`,
          }}
          annotationHighlight={annotationHighlight == "ap"}
          type="left"
          state="ap"
        >
          <p className="font-medium text-teal-300">Andhra Pradesh</p>
          <p className="text-gray-300">Born & Schooling</p>
        </Annotation>
        <Annotation
          extraStyles={{
            left: `${positions?.ka?.left || 0}px`,
            top: `${positions?.ka?.top || 0}px`,
          }}
          annotationHighlight={annotationHighlight == "ka"}
          type="right"
          state="ka"
        >
          <p className="font-medium text-teal-300">Karnataka</p>
          <p className="text-gray-300">B.E. & IT career</p>
        </Annotation>
      </div>
      <div
        id="journey"
        className="relative md:flex-1 overflow-auto scroll-hidden sm:hover:backdrop-blur-xs h-[450px]"
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
