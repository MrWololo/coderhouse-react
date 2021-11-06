import Item from "./Item";

const ItemDetail = (item) => {
  return (
    <Item
      title={item.item.title}
      description={item.item.description}
      imageSRC={item.item.imageSRC}
      price={item.item.price}
    />
  );
};

export default ItemDetail;
