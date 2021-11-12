import { useContext, useState } from "react";
// import { BsChevronDown, BsChevronUp } from "react-icons/bs";

import { CartContext } from "../context/CartContext";
import ItemCount from "./ItemCount";

const Item = ({ item, fullyShown = true }) => {
  const { title, description, price, imageSRC, stock } = item;

  const [active, setActive] = useState(false);
  // const []
  const [itemStock, setItemStock] = useState(stock);
  const [quantity, setQuantity] = useState(1);
  const [calculatedPrice, setCalculatedPrice] = useState(price);

  const { addCartItem } = useContext(CartContext);

  const quantityMinus = () => {
    if (quantity !== 1) {
      setQuantity(quantity - 1);
      calculatePrice(quantity - 1);
    }
  };
  const quantityPlus = () => {
    if (quantity + 1 < itemStock + 1) {
      setQuantity(quantity + 1);
      calculatePrice(quantity + 1);
    }
  };

  const calculatePrice = (newQuantity) => {
    setCalculatedPrice(newQuantity * price);
  };

  return (
    <div
      className={`group max-w-5xl ${fullyShown ? "sm:m-auto" : "mb-2"}`}
      onTouchEnd={(e) => {
        if (!active) {
          e.preventDefault();
          setActive(!active);
        }
      }}
      onMouseEnter={() => setActive(fullyShown ? false : true)}
      onMouseLeave={() => setActive(false)}
    >
      <div
        className={`card shadow-xl hover:shadow-2xl sm:flex-row ${
          active && !fullyShown ? "image-full" : ""
        }
        ${fullyShown ? "bordered" : ""}
        `}
      >
        <figure className={`${fullyShown ? "max-w-lg m-auto" : ""}`}>
          <img src={imageSRC} alt={title} />
        </figure>

        <div
          className={`card-body ${active || fullyShown ? "" : "hidden"}
          ${!fullyShown ? "justify-end group-hover:flex" : "justify-between"}
          `}
        >
          <div>
            <h2 className="card-title">{title}</h2>
            <p>{description}</p>
          </div>
          {/* aca va el resto */}
          <div
            className={`card-actions ${
              fullyShown ? "sm:flex-col-reverse" : ""
            } lg:flex-row`}
          >
            <div className={"flex flex-col m-auto"}>
              <ItemCount
                quantity={quantity}
                quantityPlus={quantityPlus}
                quantityMinus={quantityMinus}
                fullyShown={fullyShown}
              />
              <button
                className={`btn btn-primary ${
                  fullyShown ? "rounded-t-none" : ""
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  if (addCartItem(item, quantity)) {
                    setItemStock();
                  }
                }}
                onTouchEnd={() => addCartItem(item, quantity)}
              >
                Add to cart
              </button>
            </div>

            <h1 className="text-3xl m-auto">${calculatedPrice}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
