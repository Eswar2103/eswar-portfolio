function Projects() {
  const projectsOverview = [
    {
      title: "Frontend Developer - Streaming Platform UI",
      description: [
        "Built and maintained scalable Ul for a streaming TV platform and smart TV/device content platform that aggregates channels and apps.",
        "Implemented client-side routing with React Router and global state management using Redux. ",
        "Integrated OAuth 2.0 / OIDC authentication flows for secure user access and device-level content authorisation.",
        "Optimized responsive layouts for large screens and collaborated with backend/product teams for API alignment.",
        "Collaborated with backend and product teams to align API contracts and feature delivery.",
        "Added unit test coverage using Jest, improving reliability of UI logic and API integrations.",
      ],
      techStack: [
        "React",
        "Tailwind CSS",
        "Redux",
        "React Router",
        "OAuth 2.0 + OIDC",
        "Jest",
      ],
      domain: "Frontend UI Development",
    },
    {
      title: "Full Stack Developer - Internal Automation Catalogue Platform",
      description: [
        "Developed internal platform to catalog automation projects, enabling reuse and faster development.",
        "Developed React dashboards and dynamic forms for project submission and discovery.",
        "Designed and implemented REST APIs using Node.js and Express.",
        "Modeled and optimized MongoDB schemas for searchable project metadata.",
        "Implemented search and filtering features for faster project lookup.",
        "Deployed frontend on AWS CloudFront with restricted access controls, allowing access only through the client VPN / approved network.",
      ],
      techStack: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "AWS CloudFront",
        "OAuth 2.0 + OIDC",
        "Jest",
      ],
      domain: "Full Stack Development",
    },
    {
      title:
        "Software Engineer - Firebolt Automation Platform (Hybrid Open/Closed Source)",
      description: [
        "Developed a Rust-based device extension for Ripple set-top boxes, enabling device-level automation capabilities, including log capture, screenshots, remote reboot, and command execution.",
        "Implemented secure WebSocket pub/sub communication for real-time device control and telemetry.",
        "Worked with Cypress and Cucumber client framework and javascript based mock firebolt application.",
        "Deployed services via AWS Lambda, API Gateway, S3, CloudFront.",
        "Extension adopted across 50+ development device types across North America and Europe.",
      ],
      techStack: [
        "Rust",
        "JavaScript",
        "Cypress",
        "Cucumber",
        "Jest",
        "WebSockets",
        "AWS Lambda functions",
        "API Gateway",
        "AWS S3 bucket",
        "CloudFront for hosting",
        "Linux",
        "CI/CD",
      ],
      domain: "Software Engineering",
      openSourceLinks: [
        {
          name: "Ripple",
          link: "https://github.com/rdkcentral/Ripple",
          cover: "[GitHub - Ripple Repo]",
        },
        {
          name: "Cypress & JavaScript Test Client(FCS)",
          link: "https://github.com/rdkcentral/firebolt-certification-suite",
          cover: "[GitHub - Cypress Client Repo]",
        },
        {
          name: "Client based 3rd party application(FCA)",
          link: "https://github.com/rdkcentral/firebolt-certification-app",
          cover: "[GitHub - Thirdparty app Repo]",
        },
        {
          name: "Mock Firebolt application",
          link: "https://github.com/rdkcentral/mock-firebolt",
          cover: "[GitHub - Mock Firebolt OS Repo]",
        },
      ],
    },
    {
      title:
        "Freelance Frontend Developer - Client Portfolio Website (Confidential)",
      description: [
        "Designed and developed a responsive portfolio website for a public figure using React and modern UI practices.",
        "Built modular sections for biography, media, achievements and public engagement.",
        "Implemented SEO-friendly structure and performance-optimized layouts to improve visibility and loading speed.",
        "Collaborated directly with the client to gather requirements and deliver a custom visual identity.",
        "Built a protected admin interface using JWT token-based authentication, enabling secure and automated data uploads for gallery, news, and events management.",
        "Deployed a serverless architecture using AWS S3, Lambda, API Gateway, DynamoDB, and CloudFront with Cl-based automated deployment.",
      ],
      domain: "Full stack Engineering",
      techStack: [
        "React",
        "Tailwind CSS",
        "React Router",
        "AWS S3 bucket",
        "AWS Lambda functions",
        "API Gateway",
        "DynamoDB",
        "CloudFront for hosting",
        "CI/CD",
      ],
    },
  ];

  return (
    <div className="mt-25 flex flex-col items-center justify-center gap-5">
      <div className="text-teal-400 flex justify-center items-center gap-x-2 border border-stone-600 bg-black/40 px-2 py-1 rounded-lg text-lg uppercase font-bold tracking-widest">
        <img src="./projects.png" className="w-9 h-8" />
        <p className="tracking-wider">Projects</p>
      </div>
      <Projectsgrid projects={projectsOverview} />
    </div>
  );
}

function Projectsgrid({ projects }) {
  return (
    <div className="max-w-[1300px] w-full px-4">
      {projects.map((p) => (
        <div
          key={p.title}
          className="w-full h-auto grid grid-cols-1 md:grid-cols-5 mb-8 rounded-2xl min-h-[300px]"
        >
          <ProjectItem project={p} />
        </div>
      ))}
    </div>
  );
}

function ProjectItem({ project }) {
  return (
    <>
      <div className="col-span-2 md:bg-gray-800 bg-gray-700 rounded-t-xl md:rounded-t-none md:rounded-l-xl! px-4 md:px-10 flex flex-col justify-center py-8 gap-3">
        <p className="text-teal-400 uppercase font-bold text-xs tracking-widest self-start">
          {project.domain}
        </p>
        <p className="text-lg text-white ">{project.title}</p>
      </div>
      <div className="col-span-3 bg-gray-700 rounded-b-xl md:rounded-b-none md:rounded-r-xl! px-4 md:px-10 flex flex-col gap-8 py-2 md:py-8">
        <div className="flex flex-col gap-3">
          <p className="uppercase text-white/25 font-bold">
            Theoretical Foundation
          </p>
          <p className="text-white/50">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets.
          </p>
        </div>
        <div className="flex justify-between gap-4">
          <div className="flex flex-col gap-2">
            <p className="uppercase font-bold text-[13px] text-red-600 tracking-widest">
              problem
            </p>
            <p className="text-white/50">
              problem description. Contrary to popular belief, Lorem Ipsum is
              not simply random text. It has roots in a piece of classical Latin
              literature from 45 BC, making it over 2000 years old.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="uppercase font-bold text-[13px] text-green-600 tracking-widest">
              solution
            </p>
            <p className="text-white/50">
              solution description. Contrary to popular belief, Lorem Ipsum is
              not simply random text. It has roots in a piece of classical Latin
              literature from 45 BC, making it over 2000 years old.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p className="uppercase text-white/50 text-md tracking-widest">
            technology stack
          </p>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <p
                key={tech}
                className="shrink-0 text-teal-300 text-sm border border-teal-300/20 px-2 py-0.5 rounded-md"
              >
                {tech}
              </p>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
