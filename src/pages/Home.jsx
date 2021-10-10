import DarkFAB from "../components/DarkFAB.jsx";
import NavBar from "../components/NavBar.jsx";
import ItemListContainer from "../container/ItemListContainer.jsx";

import { useEffect } from "react";
import { themeChange } from "theme-change";

const Home = () => {
  useEffect(() => {
    themeChange(false);
  }, []);

  return (
    <>
      <NavBar />
      <ItemListContainer />
      <DarkFAB />
    </>
  );
};
export default Home;
