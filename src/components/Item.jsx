import { useState } from "react";

const Item = ({ title, description, price, imageSRC }) => {
  const [active, setActive] = useState(false);

  return (
    <div
      className="group max-w-max mb-2"
      onTouchEnd={() => setActive(!active)}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
    >
      <div className={`card hover:shadow-xl  ${active ? "image-full" : ""}`}>
        <figure>
          <img src={imageSRC} alt="card" />
        </figure>

        <div
          className={` card-body justify-end group-hover:flex ${
            active ? "" : "hidden"
          }`}
        >
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
          <div className="card-actions justify-between items-center">
            <button className="btn btn-primary">Comprar</button>
            <h1 className="text-3xl">${price}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
