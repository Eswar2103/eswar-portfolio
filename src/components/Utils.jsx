function Projectsgrid({ projects }) {
  return (
    <div className="grid max-w-[1100px] w-full px-4 gap-5">
      {projects.map((p) => (
        <ProjectItem key={p.title} p={p} />
      ))}
    </div>
  );
}

function ProjectItem({ p }) {
  return (
    <div
      key={p.title}
      className="bg-stone-300/70 rounded-xl p-2 leading-6 py-4 text-justify px-4 sm:px-8"
    >
      <p className="underline font-bold text-lg text-center pb-3">{p.title}</p>
      {p.description.map((desc, i) => (
        <li key={i} className="font-semibold list-disc ml-5">
          {desc}
        </li>
      ))}
      <p className="font-semibold pl-3">
        Tech Stack: <span className="font-bold">{p.techStack}</span>
      </p>
    </div>
  );
}

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
    // <div className="flex flex-col items-center justify-center h-100">
    //   <div className="animate-spin rounded-full h-20 w-20 border-t-4 border-teal-500 border-solid mb-6"></div>
    //   <p className="text-xl text-teal-500 font-semibold">
    //     {text || "Loading, please wait..."}
    //   </p>
    // </div>
    <div class="mx-auto px-4 w-full mt-20">
      <div class="flex flex-col md:flex-row justify-center items-center animate-pulse gap-x-35 gap-y-20">
        <div class="h-100 w-full max-w-100 rounded-2xl bg-gray-700"></div>
        <div class="h-100 w-full max-w-100 rounded-2xl bg-gray-700"></div>
      </div>
    </div>
  );
}

function FadeIn({ children }) {
  return (
    <div className="transition-opacity duration-700 ease-in-out opacity-100">
      {children}
    </div>
  );
}

export {
  Projectsgrid,
  ProjectItem,
  SocialMediaIcon,
  CareerLoadingScreen,
  FadeIn,
};
