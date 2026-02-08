import { Projectsgrid } from "./Utils";

function FreeLancing() {
  let data = [
    {
      title:
        "Freelance Frontend Developer – Client Portfolio Website (Confidential)",
      description: [
        "Designed and developed a responsive portfolio website for a public figure using React and modern UI practices.",
        "Built sections for biography, media, achievements and public engagement.",
        "Implemented SEO-friendly structure and performance-optimized layouts to improve visibility and loading speed.",
        "Collaborated directly with the client to gather requirements and deliver a custom visual identity.",
        "Built a protected admin interface using JWT token–based authentication, enabling secure and automated data uploads for gallery, news, and events management.",
        "Deployed the application using AWS (S3, API Gateway, Lambda, DynamoDB, CloudFront) with CI-based automated deployment.",
      ],
      techStack: "React, Tailwind CSS, Redux, React Router, OAuth 2.0/OIDC",
    },
  ];
  return (
    <div className="my-10 flex flex-col justify-center items-center gap-5">
      <div className="text-teal-400 flex items-center justify-center gap-x-2 border border-stone-600 bg-black/40 px-2 py-1 rounded-lg text-lg uppercase font-bold tracking-widest">
        <img src="./freelancing.png" className="w-9 h-8" />
        <p className="tracking-wider">Independent Projects</p>
      </div>
      <Projectsgrid projects={data} />
    </div>
  );
}

export default FreeLancing;
