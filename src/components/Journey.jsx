const data = [
  {
    title: "Senior Engineer",
    instituteName: "Tata Elxsi",
    timePeriod: "2023 - Present",
    skills:
      "React JS, Javascript, NodeJS, Rust, MongoDB, Jest, AWS(Lambda, S3, API Gateway, CloudFront, DynamoDB)",
    exp: "2 years",
    type: "IT",
  },
  {
    title: "Engineer",
    instituteName: "Tata Elxsi",
    timePeriod: "2021 - 2023",
    skills:
      "React JS, Javascript, NodeJS, MongoDB, Jest, AWS(Lambda, S3, API Gateway)",
    exp: "2 years",
    type: "IT",
  },
  {
    instituteName: "R.L.Jalappa Institute of Technology",
    title: "Bachelor of Engineering, CSE branch",
    boardName: "Visvesvaraya Technological University(VTU)",
    timePeriod: "2017 - 2021",
    percentage: "7.4 CGPA",
    type: "IT",
  },
  {
    instituteName: "Sri Chaitanya Junior College",
    title: "Intermediate (IPE)",
    boardName: "Board of Intermediate Education, Andhra Pradesh (BIEAP)",
    timePeriod: "2015 - 2017",
    percentage: "9.3 CGPA",
    type: "schooling",
  },
  {
    instituteName: "Sri Ravindra High School",
    title: "10th class",
    boardName: "Board of Intermediate Education, Andhra Pradesh (BIEAP)",
    timePeriod: "2014 - 2015",
    percentage: "9.0 CGPA",
    type: "schooling",
  },
];

function Journey({ itemsRef, activeElement }) {
  console.log("activeElement---:", activeElement);
  return (
    <div className="flex justify-center">
      <div className="relative flex flex-col gap-y-10 text-[12px] py-12 my-22 h-auto">
        <div className="absolute left-[3.5%] top-[5%] h-[85%] w-[2px] bg-gray-300/40"></div>
        {data.map((d, i) => (
          <div key={d.title} className="relative">
            <div
              ref={(el) => (itemsRef.current[i] = el)}
              className={`absolute left-[1.4%] top-8 w-4 h-4 rounded-full  ${i == activeElement ? "bg-teal-500" : "bg-teal-200"} ${d.type}`}
            ></div>
            <div
              className={`ml-10 text-gray-100 font-bold px-3 py-2 rounded-lg shadow-lg border w-[300px] sm:w-[340px] backdrop-blur ${i == activeElement ? "border-teal-400 border-2" : "border-teal-400/50 blur-[4px]"}`}
            >
              <p className="text-2xl">{d.instituteName}</p>
              <p className="text-[13px]">{d.title}</p>
              {d.skills && (
                <p className="text-[14px]"> {`Experience in: ${d.skills}`}</p>
              )}
              {d.exp && <p>{d.exp}</p>}

              <p>{d.boardName}</p>
              <p>{d.percentage}</p>
              <p>{d.timePeriod}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Journey;
