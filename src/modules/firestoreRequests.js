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

export const itemExistsThenGet = async (itemID) => {
  let value = await db.collection("Items").doc(itemID).get();

  if (!value.exists) return false;

  return { id: value.id, data: value.data() };
};
