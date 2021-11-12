import { Text } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom";
import Item from "./Item";

const ItemList = ({ products }) => {
  if (!products) return <Text>No se encuentran productos</Text>;
  return (
    <div className="customColumn m-2">
      {products.map((product) => {
        return (
          <Link to={`/item/${product.id}`}>
            <Item key={product.id} item={product} fullyShown={false} />
          </Link>
        );
      })}
    </div>
  );
};

export default ItemList;
