import { BsDash, BsPlus, BsTrash } from "react-icons/bs";

const ItemCount = ({
  quantity,
  quantityPlus,
  quantityMinus,
  fullyShown,
  isInCart,
  isActive,
}) => {
  return (
    <div
      className={`btn-group ${
        fullyShown || (isActive && isInCart) ? "" : "hidden"
      }`}
    >
      <button
        className={`${
          isInCart && (isActive || fullyShown)
            ? "btn btn-secondary px-2"
            : "hidden"
        }`}
        onClick={(e) => {
          e.preventDefault();
          quantityMinus({ clear: true });
        }}
        onTouchEnd={(e) => {
          e.preventDefault();
          e.stopPropagation();
          quantityMinus({ clear: true });
        }}
      >
        <BsTrash />
      </button>
      <button
        className={`btn btn-secondary ${isInCart ? "" : "rounded-b-none"} `}
        onClick={(e) => {
          e.preventDefault();
          quantityMinus();
        }}
        onTouchEnd={(e) => {
          e.preventDefault();
          e.stopPropagation();
          quantityMinus();
        }}
      >
        <BsDash />
      </button>
      <button
        className={`btn btn-secondary ${isInCart ? "" : "rounded-b-none"}`}
      >
        {quantity}
      </button>
      <button
        className={`btn btn-secondary ${isInCart ? "" : "rounded-b-none"}`}
        onClick={(e) => {
          e.preventDefault();
          quantityPlus();
        }}
        onTouchEnd={(e) => {
          e.preventDefault();
          e.stopPropagation();
          quantityPlus();
        }}
      >
        <BsPlus />
      </button>
    </div>
  );
};

export default ItemCount;
