import { Link } from "react-router-dom";

function Header() {
  const menu = [
    { item: "Home", to: "/" },
    { item: "Projects", to: "/projects" },
    { item: "Resume", to: "/resume" },
    { item: "Get in touch", to: "/getintouch", type: "spc" },
  ];
  return (
    <div className="flex justify-center items-center text-white mt-5 z-50 duration-300 transition-all ease-linear">
      <div className="backdrop-blur-[1px] bg-white/5 border border-white/30 px-5 py-3 rounded-lg shadow-lg flex flex-col sm:flex-row">
        {menu.map((m) => (
          <Link
            key={m.item}
            to={m.to}
            className={`capitalize text-center mx-4 px-3 py-1 font-semibold tracking-wider rounded-md transition-all duration-300 ease-in-out ${m.type === "spc" ? "bg-teal-300 hover:bg-teal-400 text-black ring-0 hover:ring-2 hover:inset-ring-black focus:ring-2 focus:inset-ring-black" : "bg-black  text-white ring-0 hover:ring-2 hover:ring-teal-400 focus:ring-2 focus:ring-teal-400"}`}
          >
            {m.item}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Header;
