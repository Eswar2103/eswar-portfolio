function SocialMediaIcon({ children, href, ariaLabel }) {
  return (
    <a
      className="mx-2 text-3xl text-teal-300 hover:text-teal-500 transition-all duration-300 ease-in-out"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
    >
      {children}
      <span className="sr-only">Open in new tab</span>
    </a>
  );
}

function CareerLoadingScreen() {
  return (
    <div className="mx-auto px-4 w-full mt-20">
      <div className="flex flex-col md:flex-row justify-center items-center animate-pulse gap-x-35 gap-y-20">
        <div className="h-100 w-full max-w-100 rounded-2xl bg-gray-700"></div>
        <div className="h-100 w-full max-w-100 rounded-2xl bg-gray-700"></div>
      </div>
    </div>
  );
}

function ProjectsLoadingScreen() {
  return (
    <div className="mx-auto px-4 w-full max-w-3xl mt-40 animate-pulse">
      <div className="flex flex-col gap-6">
        <div className="h-20 w-full rounded-xl bg-gray-700"></div>
        <div className="h-20 w-full rounded-xl bg-gray-700"></div>
        <div className="h-20 w-full rounded-xl bg-gray-700"></div>
      </div>
    </div>
  );
}

function IndependentLoadingScreen() {
  return (
    <div className="mx-auto px-4 w-full max-w-3xl mt-40 animate-pulse">
      <div className="flex flex-col gap-6">
        <div className="h-20 w-full rounded-xl bg-gray-700"></div>
      </div>
    </div>
  );
}

function FadeIn({ children }) {
  return <div className="opacity-0 animate-fadeIn">{children}</div>;
}

export {
  SocialMediaIcon,
  CareerLoadingScreen,
  FadeIn,
  ProjectsLoadingScreen,
  IndependentLoadingScreen,
};
