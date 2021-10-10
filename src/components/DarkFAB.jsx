import { MdDarkMode, MdLightMode } from "react-icons/md";
import { useState } from "react";

const DarkFAB = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme"));

  console.log(theme);

  return (
    <button
      data-set-theme={theme !== "bumblebee" ? "bumblebee" : "dracula"}
      className="btn btn-primary btn-circle absolute bottom-5 right-10"
      onClick={() => {
        setTheme(theme === "bumblebee" ? "dracula" : "bumblebee");
      }}
    >
      {theme !== "bumblebee" ? (
        <MdLightMode className="text-xl" />
      ) : (
        <MdDarkMode className="text-xl" />
      )}
    </button>
  );
};

export default DarkFAB;
