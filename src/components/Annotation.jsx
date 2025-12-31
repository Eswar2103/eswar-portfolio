function Annotation({ children, styles, annotationHighlight }) {
  return (
    <div
      className={`absolute annotation-box -translate-x-1/2 -translate-y-full  bg-black/80 backdrop-blur text-[0.7rem] text-gray-200 px-2 py-1.5 rounded-md shadow-lg border border-teal-400/50 z-50 ${styles} ${annotationHighlight ? "border-teal-400 scale-120" : ""}`}
    >
      {children}
    </div>
  );
}

export default Annotation;
