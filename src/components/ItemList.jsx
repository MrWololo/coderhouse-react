import Item from "./Item";

const ItemList = ({ products }) => {
  return (
    <div className="customColumn m-2">
      {products.map((product) => {
        return (
          <Item
            key={product.id}
            imageSRC={product.imageSRC}
            description={product.description}
            title={product.title}
            id={product.id}
            price={product.price}
          />
        );
      })}
    </div>
  );
};

export default ItemList;
