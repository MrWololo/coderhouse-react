import { useState } from "react";
// import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { BsDash, BsPlus } from "react-icons/bs";

const Item = ({ title, description, price, imageSRC, fullyShown = true }) => {
  const [active, setActive] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [calculatedPrice, setCalculatedPrice] = useState(price);

  const quantityMinus = () => {
    if (quantity !== 1) {
      setQuantity(quantity - 1);
      calculatePrice(quantity - 1);
    }
  };
  const quantityPlus = () => {
    setQuantity(quantity + 1);
    calculatePrice(quantity + 1);
  };

  const calculatePrice = (newQuantity) => {
    setCalculatedPrice(newQuantity * price);
  };

  return (
    <div
      className={`group max-w-5xl ${fullyShown ? "sm:m-auto" : "mb-2"}`}
      onTouchEnd={() => setActive(!active)}
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
              <div className={`btn-group ${fullyShown ? "" : "hidden"}`}>
                <button
                  className="btn btn-secondary rounded-b-none "
                  onClick={quantityMinus}
                >
                  <BsDash />
                </button>
                <button className="btn btn-secondary rounded-b-none">
                  {quantity}
                </button>
                <button
                  className="btn btn-secondary rounded-b-none"
                  onClick={quantityPlus}
                >
                  <BsPlus />
                </button>
              </div>
              <button
                className={`btn btn-primary ${
                  fullyShown ? "rounded-t-none" : ""
                }`}
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
