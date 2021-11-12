import DarkFAB from "../components/DarkFAB.jsx";
import NavBar from "../components/NavBar.jsx";
import ItemListContainer from "../containers/ItemListContainer.jsx";
import ItemDetailContainer from "../containers/ItemDetailContainer.jsx";
import FourOhFour from "../containers/FourOhFour.jsx";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { useEffect } from "react";
import { themeChange } from "theme-change";
import NavbarItems from "../components/NavbarItems.jsx";
import { getItemsIDs } from "../modules/Items.js";
import { Redirect } from "react-router-dom/cjs/react-router-dom";

const Home = () => {
  useEffect(() => {
    themeChange(false);
  }, []);

  const itemsIDs = getItemsIDs();

  return (
    <BrowserRouter>
      <div className="drawer h-screen drawer-end">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <NavBar />
          <Switch>
            <Route exact path="/" component={ItemListContainer} />
            <Route
              path="/item/:id"
              render={({ location, match }) => {
                return itemsIDs.find(
                  (id) => parseInt(match.params["id"]) === id
                ) ? (
                  <ItemDetailContainer />
                ) : (
                  <Redirect
                    to={{ pathname: "/404", state: { from: location } }}
                  />
                );
              }}
            />
            <Route path="/categories/:category" component={ItemListContainer} />
            <Route path="*" component={FourOhFour} />
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
