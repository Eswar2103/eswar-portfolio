import { experience } from "../Utils";

function Intro() {
  const exp = experience();
  return (
    <div className="flex items-center justify-center mt-8 p-4">
      <div className="bg-stone-300/70 w-[1000px] min-h-[300px] h-auto grid grid-cols-1 sm:grid-cols-3 p-4 gap-4 rounded-xl">
        <div className="flex items-center justify-center ">
          <img src="./Eswar.jpg" className=" w-[230px] h-[230px]" />
        </div>
        <div className="col-span-2 flex items-center justify-center font-bold text-justify -translate-1">
          Hello, I'm Guru Eswar Sainath Reddy Kummithi (Eswar), a
          Bengaluru-based software developer with {exp} of professional
          experience. <br />
          <br />I specialize in building scalable web applications using React
          JS, JavaScript, Node.js, and MongoDB, with additional expertise in
          Rust for systems programming. My work spans both front-end and
          back-end development, making me a versatile full-stack engineer. I
          also have hands-on experience with AWS services such as Lambda, S3,
          API Gateway, CloudFront, and DynamoDB, enabling me to design and
          deploy cloud-native solutions.
        </div>
      </div>
    </div>
  );
}

export default Intro;
