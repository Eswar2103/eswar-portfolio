function Home() {
  return (
    <div className="flex items-center justify-center mt-8">
      <div className="bg-white w-[800px] h-[300px] grid grid-cols-3  p-4 gap-4 divide-x-4 divide-gray-800">
        <div className="bg-amber-400 text-center">1</div>
        <div className="col-span-2 bg-pink-400 place-items-center">2</div>
      </div>
    </div>
  );
}

export default Home;
