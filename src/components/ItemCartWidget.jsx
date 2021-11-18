import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import ItemCount from "./ItemCount";

const ItemCartWidget = ({
  fullyShown,
  item,
  quantity,
  setItemStock,
  quantityPlus,
  quantityMinus,
  isActive,
}) => {
  const { addItemCart, getCartItemQuantity } = useContext(CartContext);

  let isInCart = getCartItemQuantity(item.id);

  return (
    <div className={`flex ${isInCart ? "group" : "flex-col"}  m-auto`}>
      <ItemCount
        className={`${fullyShown && !isInCart ? "rounded-t-none" : ""}`}
        quantity={quantity}
        quantityPlus={quantityPlus}
        quantityMinus={quantityMinus}
        fullyShown={fullyShown}
        isInCart={isInCart}
        isActive={isActive}
      />
      <button
        className={`btn btn-primary ${
          (console.log(isActive),
          fullyShown && !isInCart ? "rounded-t-none rounded-br-none" : " ")
        } ${isInCart ? "group-hover:hidden" : ""} ${
          isInCart && isActive ? "hidden" : ""
        } ${isInCart && fullyShown ? "absolute" : ""} `}
        onClick={(e) => {
          e.preventDefault();
          // if (
          addItemCart(item, quantity);
          // ) {
          //   setItemStock(item.stock - quantity);
          // }
        }}
        onTouchEnd={(e) => {
          // if (
          e.preventDefault();
          addItemCart(item, quantity);
          // setPressed(true);
          //   ) {
          //   setItemStock(item.stock - quantity);
          // }
        }}
      >
        {isInCart ? "Modify from cart" : "Add to cart"}
      </button>
    </div>
  );
};

export default ItemCartWidget;
