import { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import ItemCartWidget from "./ItemCartWidget";
import Loading from "./Loading";
// import { BsChevronDown, BsChevronUp } from "react-icons/bs";

const Item = ({ item, fullyShown = true }) => {
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
  const [quantity, setQuantity] = useState(
    getCartItemQuantity(item.id) ? getCartItemQuantity(item.id) : 1
  );
  const [calculatedPrice, setCalculatedPrice] = useState(price);

  const quantityMinus = (clear = false) => {
    if (clear) {
      modifyCartItemQuantity(item.id, 0);
      setQuantity(1);
      calculatePrice(1);
    } else {
      if (quantity !== 1) {
        modifyCartItemQuantity(item.id, quantity - 1);
        setQuantity(quantity - 1);
        calculatePrice(quantity - 1);
      }
    }
  };
  const quantityPlus = () => {
    if (quantity + 1 < itemStock + 1) {
      modifyCartItemQuantity(item.id, quantity + 1);
      setQuantity(quantity + 1);
      calculatePrice(quantity + 1);
    }
  };

  const calculatePrice = (newQuantity) => {
    setCalculatedPrice(newQuantity * price);
  };

  return (
    <div
      className={` max-w-5xl ${fullyShown ? "sm:m-auto" : "group mb-2"}`}
      onTouchEnd={(e) => {
        if (!isActive) {
          e.preventDefault();
          e.stopPropagation();
          setActive(!isActive);
        }
      }}
      onMouseEnter={() => setActive(fullyShown ? false : true)}
      onMouseLeave={() => setActive(false)}
    >
      <div
        className={`card shadow-xl hover:shadow-2xl sm:flex-row ${
          isActive && !fullyShown ? "image-full" : ""
        }
        ${fullyShown ? "bordered" : ""}
        `}
      >
        <figure className={`${fullyShown ? "max-w-lg m-auto" : ""}`}>
          <div className={`${isLoading ? "block" : "hidden"}`}>
            <Loading />
          </div>
          <img src={imageSRC} alt={title} onLoad={() => loadingSwitcher()} />
        </figure>

        <div
          className={`card-body ${isActive || fullyShown ? "" : "hidden"}
          ${!fullyShown ? "justify-end group-hover:flex" : "justify-between"}
          `}
        >
          <div>
            <h2 className="card-title">{title}</h2>
            <p>{description}</p>
          </div>
          {/* acá va el resto */}
          <div
            className={`card-actions ${
              fullyShown ? "sm:flex-col-reverse" : ""
            } lg:flex-row`}
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

            <h1 className="text-3xl m-auto">${calculatedPrice}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
