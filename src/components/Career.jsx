function Career() {
  return (
    <div className="mt-8 flex flex-col justify-center items-center gap-5">
      <p className="text-3xl text-white capitalize font-semibold">
        My <span className="text-[#0d757d]">Journey</span>
      </p>
      <div className="flex flex-col sm:flex-row justify-around max-w-5xl w-full gap-12 px-4">
        <Experience />
        <Education />
      </div>
    </div>
  );
}

function Experience() {
  const experience = [
    {
      timeline: "sep 2023 - Present",
      title: "Senior Engineer",
      company: "Tata Elxsi",
      description: {
        heading:
          "Senior Engineer — Developer Tooling Platforms, Device Automation & Cloud Platform Systems",
        subpoints: [
          "Built React UI, Node.js/Express REST APIs and optimized MongoDB schemas for searchable project catalog systems.",
          "Built Rust-based device extensions enabling remote automation features like command execution, log capture, screenshots, and reboot control.",
          "Implemented secure real-time device communication using WebSocket pub/sub architecture.",
          "Designed and deployed serverless backend services using AWS Lambda, API Gateway, S3, and CloudFront.",
        ],
      },
    },
    {
      timeline: "sep 2021 - 2023",
      title: "Engineer",
      company: "Tata Elxsi",
      description: {
        heading: "Software Engineer — Streaming Platform UI",
        subpoints: [
          "Developed scalable React UIs and dashboards for streaming TV and internal automation platforms with routing and global state management.",
          "Integrated OAuth 2.0 / OIDC authentication and device authorization flows.",
          "Improved reliability and UX through responsive layouts, search features, and unit test coverage with Jest.",
        ],
      },
    },
  ];
  return (
    <div className="text-white w-full max-w-xl">
      <p className="text-xl font-bold">Work Experience</p>
      <div className="relative flex flex-col gap-y-8 mt-5">
        <div className="absolute h-full w-[2px] bg-[#0d757d] rounded-2xl"></div>
        {experience.map((e) => (
          <div key={e.timeline} className="relative">
            <div className="absolute left-[-6px] top-8 rounded-full bg-[#0d757d] w-4 h-4"></div>
            <div className="ml-8 rounded-xl bg-white/10 px-4 py-4">
              <p className="text-amber-700 uppercase font-semibold">
                {e.timeline}
              </p>
              <p className="font-bold text-xl tracking-wide">{e.title}</p>
              <p className="font-bold text-md text-[#098089]">{e.company}</p>
              <div className="flex flex-col">
                <p className="text-white/90">{e.description.heading}</p>
                {e.description.subpoints.map((s, i) => (
                  <li key={i} className="text-white/60 ml-4">
                    {s}
                  </li>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Education() {
  const skills = [
    "React JS",
    "Javascript",
    "Node JS",
    "Express JS",
    "MongoDB",
    "Rust",
    "AWS(S3, Lamda, Cloudfront, API Gateway, DynamoDB)",
  ];
  const education = [
    {
      course: "Bachelor of Engineering",
      passedout: "Graduated 2021",
      branch: "Computer Science and Engineering",
      university: "Visvesvaraya Technological University, Karnataka",
    },
    {
      course: "Intermediate (IPE)",
      passedout: "Passed out 2017",
      branch: "Maths, Physics, Chemistry(MPC)",
      university: "Board of Intermediate Education, Andhra Pradesh",
    },
  ];
  return (
    <div className="text-white w-full max-w-[400px]">
      <p className="text-xl font-bold">Education</p>
      <div className="flex flex-col gap-y-5 mt-5 w-full text-md">
        {education.map((e) => (
          <div
            key={e.course}
            className="rounded-2xl bg-white/10 px-5 py-5 w-full capitalize border border-teal-600"
          >
            <div className="flex justify-between">
              <p>{e.course}</p>
              <p className="rounded-md bg-amber-700/20 text-amber-600 px-1 py-0.5 text-sm">
                {e.passedout}
              </p>
            </div>
            <p className="text-sm text-[#0d757d] font-bold mt-2">{e.branch}</p>
            <p className="text-white/50 mt-5">{e.university}</p>
          </div>
        ))}
        <div className="bg-[#0d757d] rounded-2xl px-5 py-7">
          <strong>Core Stack</strong>
          <div className="flex flex-wrap gap-3 mt-3">
            {skills.map((s) => (
              <div
                key={s}
                className="max-w-[320px] flex justify-center items-center"
              >
                <p className="rounded-xl px-3 py-[2px] bg-white/15">{s}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Career;
