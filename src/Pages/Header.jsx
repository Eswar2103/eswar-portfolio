import { Link, NavLink } from "react-router-dom";

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
          <NavLink
            key={m.item}
            to={m.to}
            className={({ isActive }) =>
              `capitalize text-center mx-4 px-3 py-1 font-semibold tracking-wider rounded-md transition-all duration-300 ease-in-out outline-none
            ${
              m.type === "spc"
                ? isActive
                  ? "bg-teal-400 text-black ring-2 ring-white"
                  : "bg-teal-300 hover:bg-teal-400 text-black ring-0 hover:ring-2 hover:ring-black focus-visible:ring-2 focus-visible:ring-black"
                : isActive
                  ? "bg-black ring-2 ring-teal-400"
                  : "bg-black ring-0 hover:ring-2 hover:ring-teal-400 focus-visible:ring-2 focus-visible:ring-teal-400"
            }`
            }
          >
            {m.item}
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default Header;
