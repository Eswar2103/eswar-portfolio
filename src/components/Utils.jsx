function Projectsgrid({ projects }) {
  return (
    <div className="grid max-w-[1000px] w-full px-4 gap-5">
      {projects.map((p) => (
        <ProjectItem p={p} />
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

export { Projectsgrid, ProjectItem };
