import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import Item from "../components/Item";
import { Link } from "react-router-dom";

const CartContainer = () => {
  const { getAllCartItems } = useContext(CartContext);
  const cartItems = getAllCartItems();

  if (!cartItems)
    return (
      <div className="text-center">
        There's nothing here...{" "}
        <Link to={"/"} className="btn btn-link btn-sm">
          amend your mistake
        </Link>
      </div>
    );

  return (
    <div className="max-w-7xl lg:m-auto">
      <div className="mx-2  text-center cartColumn m-2">
        {cartItems.map((cartItem) => {
          return (
            <div className="m-2">
              <Item
                key={cartItem.item.id}
                item={cartItem.item}
                fullyShown={true}
                isCompact={true}
              />
            </div>
          );
        })}
      </div>
      <div className="sticky bottom-0 z-50 bg-base-100">
        <button
          className="btn btn-primary btn-wide rounded-full my-2 mx-3"
          onClick={() => {}}
        >
          Buy now
        </button>
      </div>
    </div>
  );
};

export default CartContainer;
