import { useEffect, useRef, useState } from "react";

function LazyScrolling({ children }) {
  const scrollRef = useRef();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
          obs.unobserve(scrollRef.current);
        }
      },
      {
        threshold: 0.2,
        rootMargin: "50px 0px",
      },
    );

    let current = scrollRef.current;
    if (current) {
      obs.observe(scrollRef.current);
    }
    return () => obs.unobserve(current);
  }, []);
  return (
    <div ref={scrollRef} style={{ minHeight: `300px` }}>
      {show ? children : null}
    </div>
  );
}

export default LazyScrolling;
