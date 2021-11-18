// import { FiShoppingCart } from "react-icons/fi";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const CartWidget = () => {
  const { totalCartItems } = useContext(CartContext);
  return (
    <Link to={"/cart"}>
      <button
        className={`flex-1 justify-evenly btn btn-sm btn-primary mx-2 px-4 ${
          totalCartItems() === 0 ? "" : "indicator w-auto"
        }`}
      >
        <div
          className={`${
            totalCartItems() === 0 ? "hidden" : "indicator-item badge badge-lg"
          }`}
        >
          {totalCartItems()}
        </div>
        {/* <FiShoppingCart /> */}
        {/* <div className="mx-1"/> */}
        <p>cart</p>
      </button>
    </Link>
  );
};

export default CartWidget;
