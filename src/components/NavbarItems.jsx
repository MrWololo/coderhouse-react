import CartWidget from "./CartWidget";
import { NavLink } from "react-router-dom";
import CategoryButton from "./CategoryButton";

const NavbarItems = ({ isDrawer }) => {
  return (
    <div
      className={`flex ${
        isDrawer ? "flex-col h-2/4 justify-evenly" : "mx-2"
      } px-2 `}
    >
      <NavLink
        to={"/"}
        exact
        className={`${isDrawer ? "flex-1 my-1 hover:bg-base-300 rounded-lg" : ""}`}
        activeClassName={"text-primary-focus"}
      >
        <CategoryButton text={"useless"} isDrawer={isDrawer} />
      </NavLink>
      <NavLink
        to={"/categories/completely"}
        className={`${isDrawer ? "flex-1 my-1 hover:bg-base-300 rounded-lg" : ""}`}
        activeClassName={"text-primary-focus"}
      >
        <CategoryButton text={"completely useless"} isDrawer={isDrawer} />
      </NavLink>
      <NavLink
        to={"/categories/slightly"}
        className={`${isDrawer ? "flex-1 my-1 hover:bg-base-300 rounded-lg" : ""}`}
        activeClassName={"text-primary-focus"}
      >
        <CategoryButton text={"slightly useless"} isDrawer={isDrawer} />
      </NavLink>
      <CartWidget />
    </div>
  );
};

export default NavbarItems;
