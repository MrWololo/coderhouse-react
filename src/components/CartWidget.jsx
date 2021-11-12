// import { FiShoppingCart } from "react-icons/fi";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const CartWidget = () => {
  const { itemsQuantity } = useContext(CartContext);
  return (
    <Link to={"/cart"}>
      <button
        className={`flex-1 justify-evenly btn btn-sm btn-primary mx-2 px-4 ${
          itemsQuantity === 0 ? "" : "indicator w-auto"
        }`}
      >
        <div
          className={`${
            itemsQuantity === 0 ? "hidden" : "indicator-item badge badge-lg"
          }`}
        >
          {itemsQuantity}
        </div>
        {/* <FiShoppingCart /> */}
        {/* <div className="mx-1"/> */}
        <p>cart</p>
      </button>
    </Link>
  );
};

export default CartWidget;
