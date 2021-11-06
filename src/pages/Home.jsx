import DarkFAB from "../components/DarkFAB.jsx";
import NavBar from "../components/NavBar.jsx";
import ItemListContainer from "../container/ItemListContainer.jsx";
import ItemDetailContainer from "../container/ItemDetailContainer.jsx";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { useEffect } from "react";
import { themeChange } from "theme-change";
import NavbarItems from "../components/NavbarItems.jsx";

const Home = () => {
  useEffect(() => {
    themeChange(false);
  }, []);

  return (
    <BrowserRouter>
      <div className="drawer h-screen drawer-end">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <NavBar />
          <Switch>
            <Route exact path="/" component={ItemListContainer} />
            <Route path="/item/:id" component={ItemDetailContainer} />
            <Route path="/categories/:category" component={ItemListContainer} />
          </Switch>
          <DarkFAB />
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer" className="drawer-overlay"></label>
          <div className="bg-base-100 py-4 w-3/4">
            <NavbarItems isDrawer={true} />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};
export default Home;
