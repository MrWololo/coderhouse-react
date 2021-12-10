import { Link } from "react-router-dom";

const FourOhFour = () => {
  return (
    <div className="flex flex-col">
      <h1 className="text-xl text-center">
        The link you followed is as{" "}
        <span className="text-primary font-bold">U</span>seless as our products,
        but not as much fun...
      </h1>
      <Link
        to={"/"}
        className="btn btn-link btn-sm text-primary lowercase text-xl"
      >
        go back home
      </Link>
    </div>
  );
};

export default FourOhFour;
