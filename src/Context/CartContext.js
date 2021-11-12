import { useState, createContext } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);

  const getCartItem = (itemID) =>
    items.find((element) => element.item.id === itemID);

  const hasItem = (itemID) => {
    if (getCartItem(itemID)) return true;
    return false;
  };

  const addCartItem = (item, quantity = 1) => {
    if (!hasItem(item.id)) {
      setItems([...items, { item: item, quantity: quantity }]);
      console.log(items);
      return true;
    }
    return false;
  };

  const removeItem = (itemID) => {
    if (hasItem(itemID)) {
      const id = items.findIndex((element) => element.item.id === itemID);
      items.splice(id, 1);
      return true;
    }
    return false;
  };

  return (
    <CartContext.Provider
      value={{
        items,
        addCartItem,
        removeItem,
        itemsQuantity: items.length,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
