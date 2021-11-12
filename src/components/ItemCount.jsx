import { BsDash, BsPlus } from "react-icons/bs";

const ItemCount = ({quantity, quantityPlus, quantityMinus, fullyShown}) => {
  return (
    <div className={`btn-group ${fullyShown ? "" : "hidden"}`}>
      <button
        className="btn btn-secondary rounded-b-none "
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
      <button className="btn btn-secondary rounded-b-none">{quantity}</button>
      <button
        className="btn btn-secondary rounded-b-none"
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
