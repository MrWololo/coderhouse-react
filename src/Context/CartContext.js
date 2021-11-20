import { useState, createContext } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);

  const getAllCartItems = () => {
    if (items.length > 0) return items;
    return false;
  };

  const getCartItem = (itemID) =>
    items.find((element) => element.item.id === itemID);

  const hasItem = (itemID) => {
    if (getCartItem(itemID)) return true;
    return false;
  };

  const addItemCart = (item, quantity = 1) => {
    if (!hasItem(item.id)) {
      setItems([...items, { item: item, quantity: quantity }]);
      return true;
    }
    return false;
  };

  const removeItem = (itemID) => {
    if (hasItem(itemID)) {
      if (items.length > 1) {
        setItems(
          items.filter((element) => {
            return element.item.id !== itemID;
          })
        );
      } else {
        clearAll();
      }
      return true;
    }
    return false;
  };

  const clearAll = () => {
    // items.length = 0;
    setItems([]);
  };

  const totalCartItems = () => {
    let total = 0;
    items.map((item) => (total += item.quantity));
    return total;
  };

  const getCartItemQuantity = (itemID) => {
    if (hasItem(itemID)) {
      return items.find((element) => element.item.id === itemID).quantity;
    }
    return false;
  };

  const modifyCartItemQuantity = (itemID, updatedQuantity) => {
    if (hasItem(itemID)) {
      if (updatedQuantity === 0) {
        removeItem(itemID);
      } else {
        setItems(
          items.map((element) => {
            return element.item.id === itemID
              ? { ...element, quantity: updatedQuantity }
              : element;
          })
        );
      }
      return true;
    }
    return false;
  };

  return (
    <CartContext.Provider
      value={{
        getAllCartItems,
        addItemCart,
        getCartItemQuantity,
        removeItem,
        clearAll,
        modifyCartItemQuantity,
        totalCartItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
