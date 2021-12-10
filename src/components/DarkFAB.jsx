import { MdDarkMode, MdLightMode } from "react-icons/md";
import { useState } from "react";

const DarkFAB = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme"));

  return (
    <button
      data-set-theme={theme !== "cupcake" ? "cupcake" : "dracula"}
      className="btn btn-primary btn-circle fixed bottom-1 right-2 sm:bottom-5 sm:right-10 darkFAB"
      onClick={() => {
        setTheme((currentValue) =>
          currentValue === "cupcake" ? "dracula" : "cupcake"
        );
      }}
    >
      {theme !== "cupcake" ? (
        <MdLightMode className="text-xl" />
      ) : (
        <MdDarkMode className="text-xl" />
      )}
    </button>
  );
};

export default DarkFAB;
