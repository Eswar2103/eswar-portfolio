import { Projectsgrid } from "./Utils";

function Projects() {
  const projectsOverview = [
    {
      title: "Frontend Developer – Streaming Platform UI",
      description: [
        "Built and maintained scalable Ul for a streaming TV platform and smart TV/device content platform that aggregates channels and apps.",
        "Implemented client-side routing with React Router and global state management using Redux. ",
        "Integrated OAuth 2.0 / OIDC authentication flows for secure user access and device-level content authorisation.",
        "Optimized responsive layouts for large screens and collaborated with backend/product teams for API alignment.",
        "Collaborated with backend and product teams to align API contracts and feature delivery.",
        "Added unit test coverage using Jest, improving reliability of UI logic and API integrations.",
      ],
      techStack:
        " React, Tailwind CSS, Redux, React Router, OAuth 2.0 + OIDC, Jest",
    },
    {
      title: "Full Stack Developer – Internal Automation Catalogue Platform",
      description: [
        "Developed internal platform to catalog automation projects, enabling reuse and faster development.",
        "Developed React dashboards and dynamic forms for project submission and discovery.",
        "Designed and implemented REST APIs using Node.js and Express.",
        "Modeled and optimized MongoDB schemas for searchable project metadata.",
        "Implemented search and filtering features for faster project lookup.",
        "Deployed frontend on AWS CloudFront with restricted access controls, allowing access only through the client VPN / approved network.",
      ],
      techStack:
        "React, Node.js, Express, MongoDB, AWS CloudFront, OAuth 2.0 + OIDC, Jest",
    },
    {
      title:
        "Software Engineer – Firebolt Automation Platform (Hybrid Open/Closed Source)",
      description: [
        "Developed a Rust-based device extension for Ripple set-top boxes, enabling device-level automation capabilities, including log capture, screenshots, remote reboot, and command execution.",
        "Implemented secure WebSocket pub/sub communication for real-time device control and telemetry.",
        "Worked with Cypress and Cucumber client framework and javascript based mock firebolt application.",
        "Deployed services via AWS Lambda, API Gateway, S3, CloudFront.",
        "Extension adopted across 50+ development device types across North America and Europe.",
      ],
      techStack:
        "Rust, JavaScript, Cypress, Cucumber, Jest, WebSockets, AWS Lambda, API Gateway, S3, CloudFront, Linux, CI/CD",
      openSourceLinks: [
        {
          name: "Ripple",
          link: "https://github.com/rdkcentral/Ripple",
          cover: "[GitHub – Ripple Repo]",
        },
        {
          name: "Cypress & JavaScript Test Client(FCS)",
          link: "https://github.com/rdkcentral/firebolt-certification-suite",
          cover: "[GitHub – Cypress Client Repo]",
        },
        {
          name: "Client based 3rd party application(FCA)",
          link: "https://github.com/rdkcentral/firebolt-certification-app",
          cover: "[GitHub – Thirdparty app Repo]",
        },
        {
          name: "Mock Firebolt application",
          link: "https://github.com/rdkcentral/mock-firebolt",
          cover: "[GitHub – Mock Firebolt OS Repo]",
        },
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

export default Projects;
