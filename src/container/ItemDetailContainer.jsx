import { useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import Loading from "../components/Loading";
import { getItem } from "../modules/Items";
import ItemDetail from "../components/ItemDetail";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [item, setItem] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchItem = () =>
      new Promise((resolve, reject) => {
        setTimeout(() => {
          return resolve(getItem(id));
        }, 2000);
      });

    fetchItem().then((newItem) => {
      setItem(newItem);
      setIsLoading(false);
    });
  }, [id]);

  return (
    <div className="mx-2 sm:m-auto text-center ">
      {isLoading ? <Loading /> : <ItemDetail item={item} />}
    </div>
  );
};

export default ItemDetailContainer;
