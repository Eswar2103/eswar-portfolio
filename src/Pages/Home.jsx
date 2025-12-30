import Annotation from "../components/Annotation";
import IndiaMap from "../components/IndiaMap";

function Home() {
  return (
    <div>
      <div className="flex items-center justify-center mt-8">
        <div className="bg-white w-[800px] h-[300px] grid grid-cols-3 p-4 gap-4 divide-x-4 divide-gray-800">
          <div className="bg-amber-400 text-center">1</div>
          <div className="col-span-2 bg-pink-400 place-items-center">2</div>
        </div>
      </div>
      <div className="mt-8 mx-auto max-w-6xl px-6">
        <div className="flex">
          <div className="relative min-w-[300px] w-[530px] max-w-[650px]">
            <IndiaMap />
            <Annotation styles="left-[39.3%] top-[59%]">
              <p className="font-medium text-teal-300">Andhra Pradesh</p>
              <p className="text-gray-400">Born & Schooling</p>
            </Annotation>
            <Annotation styles="top-[65%] left-[17%]">
              <p className="font-medium text-teal-300">Karnataka</p>
              <p className="text-gray-400">B.E. & IT career</p>
            </Annotation>
          </div>
          <div className="flex-1 bg-blue-400">Hiii</div>
        </div>
      </div>
    </div>
  );
}

export default Home;
