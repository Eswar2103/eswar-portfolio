function Projects() {
  const projectsOverview = [
    {
      title:
        "Frontend Developer - Streaming TV and content aggregation platform ",
      description: [
        "Built and maintained a scalable UI for a smart TV content platform that aggregates streaming channels and apps across devices.",
        "Implemented client-side routing with React Router and global state management using Redux.",
        "Integrated OAuth 2.0 and OIDC authentication flows for secure user access and device-level content authorization.",
        "Optimized responsive layouts for large-screen devices, ensuring consistent rendering across smart TV form factors.",
        "Collaborated with backend and product teams to align API contracts and feature delivery.",
        "Wrote unit tests using Jest to improve reliability of UI logic and API integration layers.",
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
      theoreticaFoundation:
        "Modern smart TV and streaming ecosystems require users to manage multiple devices, subscriptions, and service interactions across fragmented interfaces. A unified account management platform addresses this by centralizing device registration - whether a set-top box or a smart TV - subscription control, warranty tracking, and support workflows into a single web application. Built with React, Redux, and OAuth 2.0/OIDC, such platforms demand scalable UI architecture, secure authentication, and seamless integration with backend services to serve both casual viewers and multi-device households effectively.",
      problem: [
        "Device linking, warranty details, complaints, and account management are scattered across disconnected portals.",
        "Users managing multiple set-top boxes and smart TVs face poor visibility and high friction in day-to-day tasks.",
        "Delayed issue resolution due to no single place to track subscriptions or raise support requests.",
      ],
      solution: [
        "Built a unified account management platform covering device linking, multi-account management, subscription control, warranty tracking, and complaint raising.",
        "Scalable React UI with Redux state management and OAuth 2.0/OIDC authentication.",
        "Responsive layouts optimized for large screens; REST APIs integrated with backend teams.",
        "Reliability ensured through Jest unit testing across UI logic and API layers.",
      ],
    },
    {
      title: "Full Stack Developer - Automation Catalogue Platform",
      description: [
        "Developed a platform to catalog automation projects, enabling reuse and faster development.",
        "Developed React dashboards and dynamic forms for project submission and discovery.",
        "Designed and implemented REST APIs using Node.js and Express.",
        "Modeled and optimized MongoDB schemas for searchable project metadata.",
        "Implemented search and filtering features for faster project lookup.",
        "Deployed frontend on AWS CloudFront with restricted access controls, allowing access only through the client VPN / approved network.",
      ],
      techStack: [
        "React",
        "Node JS",
        "Express JS",
        "MongoDB",
        "AWS CloudFront",
        "OAuth 2.0 + OIDC",
        "Jest",
      ],
      domain: "Full Stack Development",
      problem: [
        "No single source of truth for automation projects — details and reusable components are spread across disparate documents and repositories.",
        "Teams repeatedly rebuild existing solutions due to poor discoverability.",
        "Slower onboarding and duplicated effort across engineering groups.",
      ],
      solution: [
        "Built an internal automation catalog where teams submit, browse, and reuse projects from a single interface.",
        "React dashboards with dynamic forms, full-text search, and filtering for fast discovery.",
        "Project overview recordings for visual walkthroughs without digging through documentation.",
        "REST APIs with Node.js/Express, optimized MongoDB schemas, deployed on AWS CloudFront with network-restricted access.",
      ],
      theoreticaFoundation:
        "Large engineering organizations accumulate automation projects over time, often scattered across repositories, documents, and wikis. Without a centralized discovery layer, teams repeatedly rebuild existing solutions. An automation catalog platform solves this by providing a searchable, metadata-driven repository where teams can submit, discover, and reuse projects - reducing duplication and accelerating development.",
    },
    {
      title: "Software Engineer - Rust based Firebolt Automation Extension",
      description: [
        "Developed a Rust-based device extension for Ripple set-top boxes, enabling device-level automation including log capture, screenshots, remote reboot, and command execution.",
        "Implemented secure WebSocket pub/sub communication for real-time device control and telemetry.",
        "Integrated the Rust extension into a Cypress and JavaScript-based test framework, bridging native device control with automated test workflows.",
        "Deployed supporting services via AWS Lambda, API Gateway, S3, and CloudFront.",
        "Extension adopted across 50+ device types in North America and Europe.",
      ],
      techStack: [
        "Rust",
        "JavaScript",
        "Cypress",
        "WebSockets",
        "AWS Lambda",
        "API Gateway",
        "AWS S3 bucket",
        "CloudFront",
        "Linux",
        "CI/CD",
      ],
      domain: "Software Engineering",
      theoreticaFoundation:
        "Automated testing of set-top boxes at scale requires device-level control that standard test frameworks can't provide natively. Ripple's dynamic extension model — a Rust-based Firebolt gateway for managing streaming apps on set-top boxes — made it possible to plug in a native extension that exposes log capture, screenshots, and remote control directly to test workflows over secure, real-time WebSocket communication.",
      problem: [
        "Standard JavaScript-based test frameworks can't provide native device-level control for Ripple set-top boxes.",
        "No unified mechanism to capture logs, take screenshots, reboot devices, or execute commands remotely.",
        "Automated testing was slow, inconsistent, and hard to maintain across diverse device types.",
      ],
      solution: [
        "Built a Rust-based device extension exposing log capture, screenshots, remote reboot, and command execution.",
        "Secure WebSocket pub/sub communication for real-time device control and telemetry.",
        "Integrated directly into Cypress/JavaScript test frameworks; supporting services on AWS Lambda, API Gateway, S3, and CloudFront.",
        "Adopted across 50+ device types in North America and Europe.",
      ],
    },
    {
      title: "Individual Frontend Developer - Client Portfolio Website",
      description: [
        "Designed and developed a responsive portfolio website for a public figure using React and modern UI practices.",
        "Built modular sections for biography, media, achievements, and public engagement.",
        "Implemented SEO-friendly structure and performance-optimized layouts to improve visibility and load speed.",
        "Collaborated with the client to gather requirements and deliver a tailored visual identity.",
        "Built a protected admin interface using JWT-based authentication, enabling secure content management for gallery, news, and events.",
        "Deployed a serverless architecture on AWS (S3, Lambda, API Gateway, DynamoDB, CloudFront) with CI-based automated deployments.",
      ],
      domain: "Full stack Development",
      techStack: [
        "React",
        "Javascript",
        "Tailwind CSS",
        "React Router",
        "AWS S3 bucket",
        "AWS Lambda functions",
        "API Gateway",
        "DynamoDB",
        "CloudFront",
        "CI/CD",
      ],
      theoreticaFoundation:
        "Public figures need a professional web presence that reflects their identity while allowing them to manage content without relying on developers for routine updates. A custom-built portfolio gives full control over branding, SEO, and content architecture — while a serverless backend keeps costs low and scales with the traffic spikes common to public-facing sites.",
      problem: [
        "Generic CMS platforms limit branding control and often have poor performance characteristics.",
        "Content updates for gallery, news, and events require developer involvement, creating bottlenecks.",
        "No ownership of infrastructure or content pipeline — fully dependent on third-party platforms.",
      ],
      solution: [
        "Built a fully custom React portfolio with modular sections for biography, media, achievements, and public engagement.",
        "Protected admin interface with JWT authentication, enabling the client to self-manage gallery, news, and events independently.",
        "SEO-optimized structure and performance-tuned layouts for fast load times and discoverability.",
        "Serverless AWS architecture (S3, Lambda, API Gateway, DynamoDB, CloudFront) with CI-based automated deployments for zero-downtime updates.",
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
          className="w-full h-auto grid grid-cols-1 lg:grid-cols-10 mb-8 rounded-2xl min-h-[300px]"
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
      <div className="col-span-3 bg-gray-800 rounded-t-xl lg:rounded-t-none lg:rounded-l-xl! px-4 lg:px-10 flex flex-col justify-center py-8 gap-3">
        <p className="text-teal-400 uppercase font-bold text-xs tracking-widest self-start">
          {project.domain}
        </p>
        <p className="text-lg text-white">{project.title}</p>
      </div>
      <div className="col-span-7 bg-gray-700 rounded-b-xl lg:rounded-b-none lg:rounded-r-xl! px-4 lg:px-10 flex flex-col gap-8 py-2 lg:py-8">
        <div className="flex flex-col gap-3">
          <p className="uppercase text-white/80 font-bold">
            Theoretical Foundation
          </p>
          <p className="text-white/70">{project.theoreticaFoundation}</p>
        </div>
        <div className="flex flex-col lg:flex-row justify-between gap-y-4 gap-x-6">
          <div className="flex flex-col gap-2">
            <p className="uppercase font-bold text-[14px] text-red-600 tracking-widest">
              problem
            </p>
            <p className="text-white/70 ml-2">
              {project.problem.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="uppercase font-bold text-[14px] text-green-600 tracking-widest">
              solution
            </p>
            <p className="text-white/70 ml-2">
              {project.solution.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p className="uppercase text-white/80 text-md tracking-widest">
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
