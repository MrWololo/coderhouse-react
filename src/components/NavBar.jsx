import CartWidget from "./CartWidget";
const NavBar = () => (
  <nav className="navbar mb-2 shadow-lg">
    <h1 className="text-xl font-bold ml-2">
      <span className="text-primary">U</span>SELECT
    </h1>

    <div className="flex-1 items-stretch px-2 mx-2">
      <a href="/home" className="btn btn-ghost btn-sm rounded-btn">
        Home
      </a>
      <a href="/about" className="btn btn-ghost btn-sm rounded-btn">
        About
      </a>
      <a href="/help" className="btn btn-ghost btn-sm rounded-btn">
        Help
      </a>
    </div>

    <div className="flex-none">
      <CartWidget />
    </div>
  </nav>
);
export default NavBar;
