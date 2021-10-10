import { FiShoppingCart } from "react-icons/fi";

const CartWidget = () => (
  <button className="btn btn-ghost btn-sm sm:btn-primary sm:mx-2 sm:w-20">
    <FiShoppingCart />
    <span className="sm:inline hidden">cart</span>
  </button>
);

export default CartWidget;
