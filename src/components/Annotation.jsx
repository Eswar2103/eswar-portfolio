function Annotation({ children, styles, annotationHighlight, type }) {
  const customStyles = {};
  if (type === "left") {
    customStyles["--before-top"] = "98.3%";
    customStyles["--before-left"] = "17%";
    customStyles["--after-top"] = "99.5%";
    customStyles["--after-left"] = "15%";
  } else if (type === "right") {
    customStyles["--before-top"] = "98.3%";
    customStyles["--before-left"] = "70%";
    customStyles["--after-top"] = "99.5%";
    customStyles["--after-left"] = "67.8%";
  }
  return (
    <div
      className={`absolute annotation-box -translate-x-1/2 -translate-y-full bg-black/80 backdrop-blur max-[390px]:text-[0.6rem] text-[0.7rem] text-gray-200 px-2 py-1.5 rounded-md shadow-lg border border-teal-400/50 z-50 ${styles} ${annotationHighlight ? "border-teal-400 scale-120" : ""}`}
      style={customStyles}
    >
      {children}
    </div>
  );
}

export default Annotation;
