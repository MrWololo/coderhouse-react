import firebase from "firebase";
import { getFirestore } from "./firebase.config";

const db = getFirestore();

export const getItems = async (category) => {
  const itemCollection = category
    ? await db.collection("Items").where("category", "==", category).get()
    : await db.collection("Items").get();

  if (itemCollection.size === 0) {
    console.log("no results");
    return false;
  }

  const items = itemCollection.docs.map((doc) => {
    return { id: doc.id, data: doc.data() };
  });

  return items;
};

export const getItem = async (itemID) => {
  let value = await db.collection("Items").doc(itemID).get();

  if (!value.exists) return false;

  return { id: value.id, data: value.data() };
};

export const setOrder = async (userInfo, items, total) => {
  let response = { type: "error", message: "Unknown error, please try again" };
  const orderObj = {
    userInfo: userInfo,
    items: items,
    total: total,
    date: firebase.firestore.Timestamp.fromDate(new Date()),
  };

  await db.collection("Orders")
    .add(orderObj)
    .then(({ id }) => {
      response = { type: "success", message: "Order ID: " + id };
    })
    .catch((err) => {
      response = { type: "error", message: err.message + ", please try again" };
    });

  return response;
};
