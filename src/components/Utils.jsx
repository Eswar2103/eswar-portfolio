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

function LoadingScreen({ text }) {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white">
      <div className="animate-spin rounded-full h-20 w-20 border-t-4 border-teal-500 border-solid mb-6"></div>
      <p className="text-xl text-teal-500 font-semibold">
        {text || "Loading, please wait..."}
      </p>
    </div>
  );
}

export { Projectsgrid, ProjectItem, SocialMediaIcon, LoadingScreen };
