import { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import ItemCartWidget from "./ItemCartWidget";
import Loading from "./Loading";

const Item = ({ item, fullyShown = true, isCompact = false }) => {
  const { title, description, price, imageSRC, stock } = item.data;

  const { getCartItemQuantity, modifyCartItemQuantity } = useContext(
    CartContext
  );

  const [isLoading, setLoading] = useState(true);
  const loadingSwitcher = () => {
    if (isLoading) {
      setLoading(false);
    }
  };

  const [isActive, setActive] = useState(false);

  const [itemStock, setItemStock] = useState(stock);
  const [quantity, setQuantity] = useState(getCartItemQuantity(item.id) || 1);
  const [calculatedPrice, setCalculatedPrice] = useState(price);

  const quantityMinus = (clear = false) => {
    if (clear) {
      modifyCartItemQuantity(item.id, 0);
      calculatePrice(1);
      setQuantity(1);
    } else {
      if (quantity !== 1) {
        modifyCartItemQuantity(item.id, quantity - 1);
        calculatePrice(quantity - 1);
        setQuantity((currentValue) => currentValue - 1);
      }
    }
  };
  const quantityPlus = () => {
    if (quantity + 1 < itemStock + 1) {
      modifyCartItemQuantity(item.id, quantity + 1);
      calculatePrice(quantity + 1);
      setQuantity((currentValue) => currentValue + 1);
    }
  };

  const calculatePrice = (newQuantity) => {
    setCalculatedPrice(newQuantity * price);
  };

  if (quantity > 1) calculatePrice(quantity);

  return (
    <div>
      <div className={`${isLoading ? "" : "hidden"}`}>
        <Loading />
      </div>
      <div
        className={`fixForChrome ${isCompact ? "" : "max-w-5xl"}  ${
          fullyShown ? "sm:m-auto" : "group mb-2"
        }`}
        onTouchEnd={(e) => {
          if (!isActive) {
            e.preventDefault();
            e.stopPropagation();
            setActive((currentValue) => !currentValue);
          }
        }}
        onMouseEnter={() => setActive(fullyShown ? false : true)}
        onMouseLeave={() => setActive(false)}
      >
        <div
          className={`card shadow-xl hover:shadow-2xl 
          ${isCompact ? "flex-row" : "sm:flex-row"}
          ${isActive && !fullyShown ? "image-full" : ""}
          `}
        >
          <figure
            className={`${fullyShown ? "max-w-lg" : ""} ${
              isCompact ? "max-w-xs" : ""
            }`}
          >
            <img
              className="h-full object-cover"
              src={imageSRC}
              alt={title}
              onLoad={() => loadingSwitcher()}
            />
          </figure>
          <div
            className={`card-body ${isActive || fullyShown ? "" : "hidden"} ${
              !fullyShown ? "justify-end " : "justify-between"
            }`}
          >
            <div>
              <h2 className="card-title">{title}</h2>
              {isCompact ? "" : <p className="break-anywhere">{description}</p>}
            </div>
            <div
              className={`card-actions ${isCompact ? "flex-col-reverse" : ""} `}
            >
              <ItemCartWidget
                setItemStock={setItemStock}
                fullyShown={fullyShown}
                item={item}
                quantity={quantity}
                quantityPlus={quantityPlus}
                quantityMinus={quantityMinus}
                isActive={isActive}
                setActive={setActive}
              />
              <h1
                className={`m-auto leading-none ${
                  isCompact ? "mb-2 text-2xl" : "text-3xl"
                }`}
              >
                ${calculatedPrice}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
