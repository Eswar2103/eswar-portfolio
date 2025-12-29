import { Link } from "react-router-dom";

function Header() {
  const menu = [
    { item: "Home", to: "/" },
    { item: "Projects", to: "/projects" },
    { item: "Resume", to: "/resume" },
    { item: "Get in touch", to: "/getintouch" },
  ];
  return (
    <div className="sticky flex justify-center items-center text-black mt-5 z-50">
      <div className="bg-white/30 px-5 py-3">
        {menu.map((m) => (
          <Link
            key={m.item}
            to={m.to}
            className="capitalize text-center mx-4 bg-black/60 text-white px-2 py-1 hover:bg-black/90 tracking-wider"
          >
            {m.item}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Header;
