function Annotation({ children, styles }) {
  return (
    <div
      className={`absolute annotation-box -translate-x-1/2 -translate-y-full  bg-black/80 backdrop-blur text-xs text-gray-200 px-3 py-2 rounded-lg shadow-lg border border-teal-400/50 z-50 ${styles}`}
    >
      {children}
    </div>
  );
}

export default Annotation;
