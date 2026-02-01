import { MdOutlineMonitor } from "react-icons/md";
import { ProjectItem, Projectsgrid } from "./Utils";

function Projects() {
  const projectsOverview = [
    {
      title: "Frontend Developer – Streaming Platform UI",
      description: [
        "Built and maintained scalable UI for a streaming platform with 200K+ viewers & 50K+ subscribers across smart TVs and web.",
        "Implemented React Router navigation, Redux state management, and OAuth 2.0 + OIDC authentication.",
        "Optimized responsive layouts for large screens and collaborated with backend/product teams for API alignment.",
        "Collaborated with backend and product teams to align UI functionality with APIs and business requirements.",
      ],
      techStack: "React, Tailwind CSS, Redux, React Router, OAuth 2.0 + OIDC",
    },
    {
      title: "Full Stack Developer – Internal Automation Catalogue Platform",
      description: [
        "Developed internal platform to catalog automation projects, enabling reuse and faster development.",
        "Built React dashboards/forms, integrated Node.js  + Express REST APIs, and designed MongoDB schemas.",
        "Enabled search and filtering functionality to help teams quickly identify suitable automation projects based on requirements. ",
        "Deployed and hosted the application on AWS, using CloudFront for fast, secure content delivery. ",
        "Worked closely with cross-functional teams to align the application with internal workflows and development standards. ",
      ],
      techStack: "React, Node.js, Express, MongoDB, AWS (CloudFront)",
    },
    {
      title:
        "Software Engineer – Firebolt Automation Platform (Hybrid Open/Closed Source)",
      description: [
        "Contributed to hybrid open/closed-source automation framework validating SDKs & device behavior.",
        "Built Cypress + Cucumber client framework with Jest unit tests; developed Rust-based device extension for Ripple set-top boxes.",
        "Implemented secure WebSocket pub/sub communication and device-level operations (logs, screenshots, remote reboot).",
        "Deployed services via AWS Lambda, API Gateway, S3, CloudFront; extension used in 50+ devices across NA & EU.",
        "Published open-source repos: Cypress Client, Third-party App(FCA), Mock Firebolt OS, Ripple.",
      ],
      techStack:
        "Rust, JavaScript, Cypress, Cucumber, Jest, WebSockets, AWS (Lambda, API Gateway, S3, CloudFront), Linux,CI/CD",
      opensouceLinks: [
        {
          name: "Cypress & JavaScript Test Client",
          link: "https://github.com/rdkcentral/firebolt-certification-suite",
          cover: "[GitHub – Cypress Client Repo]",
        },
        {
          name: "Client based 3rd party application(FCA)",
          link: "https://github.com/rdkcentral/firebolt-certification-app",
          cover: "[GitHub – Thirdparty app Repo]",
        },
        {
          name: "Client based 3rd party application(FCA)",
          link: "https://github.com/rdkcentral/mock-firebolt",
          cover: "[GitHub – Mock Firebolt OS Repo]",
        },
        {
          name: "Ripple",
          link: "https://github.com/rdkcentral/Ripple",
          cover: "[GitHub – Ripple Repo]",
        },
      ],
    },
  ];

  return (
    <div className="mt-25 flex flex-col items-center justify-center gap-5">
      <div className="text-teal-400 flex gap-x-2 border border-stone-600 bg-black/40 px-2 py-1 rounded-lg text-xl uppercase font-bold tracking-widest">
        <MdOutlineMonitor className="text-3xl" />
        <p className="tracking-wider">Projects</p>
      </div>
      <Projectsgrid projects={projectsOverview} />
    </div>
  );
}

export default Projects;
