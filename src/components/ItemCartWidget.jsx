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
          fullyShown ? "rounded-t-none rounded-br-none" : ""
        }  ${isInCart ? "hidden" : ""}  `}
        onClick={(e) => {
          e.preventDefault();
          addItemCart(item, quantity);
        }}
        onTouchEnd={(e) => {
          isInCart ? addItemCart(item, quantity) : setActive(true);
        }}
      >
        {isInCart ? "Modify from cart" : "Add to cart"}
      </button>
    </div>
  );
};

export default ItemCartWidget;
