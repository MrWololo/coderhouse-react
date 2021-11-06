import { Link } from "react-router-dom/cjs/react-router-dom";
import NavbarItems from "./NavbarItems";

const NavBar = () => (
  <nav className="navbar mb-2 shadow-lg">
    <h1 className="flex-1 text-xl font-bold mx-2">
      <Link to={"/"}>
        <span className="text-primary">U</span>SELECT
      </Link>
    </h1>
    <div className="flex-none sm:hidden">
      <label htmlFor="my-drawer" className="btn btn-square btn-ghost">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="inline-block w-6 h-6 stroke-current"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
      </label>
    </div>
    <div className="hidden sm:flex">
      <NavbarItems />
    </div>
  </nav>
);
export default NavBar;
