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
      <p className="font-semibold pl-3 mt-2">
        Tech Stack: <span className="font-bold">{p.techStack}</span>
      </p>
      {p?.openSourceLinks?.length && (
        <div className="flex flex-col mt-2">
          <strong className="capitalize">Open source links -</strong>
          {p.openSourceLinks.map((o) => (
            <strong className="capitalize">
              {o.name}:{" "}
              <span>
                <a
                  href={o.link}
                  target="_blank"
                  className="text-[#030a8f] font-bold hover:underline"
                >
                  {o.cover}
                </a>
              </span>
            </strong>
          ))}
        </div>
      )}
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
  Projectsgrid,
  ProjectItem,
  SocialMediaIcon,
  CareerLoadingScreen,
  FadeIn,
  ProjectsLoadingScreen,
  IndependentLoadingScreen,
};
