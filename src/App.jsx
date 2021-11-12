import "./App.css";
import Home from "./pages/Home";
import { CartProvider } from "./context/CartContext.js";

function App() {
  return (
    <CartProvider>
      <Home />
    </CartProvider>
  );
}

export default App;
