import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import Item from "../components/Item";
import StepsModalContainer from "./StepsModalContainer";

const CartContainer = () => {
  const { getAllCartItems, totalItemsPrice } = useContext(CartContext);
  const cartItems = getAllCartItems();

  const [total, setTotal] = useState(0);

  const [openState, setOpenState] = useState(false);
  const switchModal = () => {
    setOpenState((currentValue) => !currentValue);
  };

  if (!cartItems) {
    return (
      <div className="text-center">
        There's nothing here...{" "}
        <Link to={"/"} className="btn btn-link btn-sm">
          amend your mistake
        </Link>
      </div>
    );
  } else {
    setTotal(totalItemsPrice());

    return (
      <div className="max-w-7xl lg:m-auto">
        <div className="mx-2 text-center cartColumn m-2">
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
        <div className="sticky bottom-0 bg-base-100 outline">
          <div className="flex flex-col my-3 mx-3 max-w-min">
            <div className="text-xl mb-1 text-center font-semibold">
              Total: ${total}
            </div>
            <label
              className="btn btn-primary btn-wide modal-button"
              for="modal"
              onClick={(e) => {
                e.preventDefault();
                switchModal();
              }}
            >
              Buy now
            </label>
          </div>
          <input type="checkbox" id="modal" className="modal-toggle" />
          <StepsModalContainer openState={openState} switchModal={switchModal} />
        </div>
      </div>
    );
  }
};

export default CartContainer;
