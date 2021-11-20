import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import ItemCount from "./ItemCount";

const ItemCartWidget = ({
  fullyShown,
  item,
  quantity,
  quantityPlus,
  quantityMinus,
  isActive,
  setActive,
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
        //Solo puedo pedir perdón por esta clase, estaba desfazado por 1px
        //TODO: change counter layout with an array of React elements, push new button to first for fix
        className={`btn btn-primary ${
          fullyShown && !isInCart ? "rounded-t-none rounded-br-none" : ""
        } ${
          isInCart ? "group-hover:hidden" : "relative left-[-1px]"
        } ${isInCart && isActive ? "hidden" : ""} ${
          isInCart && fullyShown ? "absolute" : ""
        } `}
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
          // e.preventDefault();
          isInCart ? addItemCart(item, quantity) : setActive(true);
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
