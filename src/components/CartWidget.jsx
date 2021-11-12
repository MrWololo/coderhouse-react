// import { FiShoppingCart } from "react-icons/fi";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartWidget = () => {
  const { itemsQuantity } = useContext(CartContext);
  return (
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
  );
};

export default CartWidget;
