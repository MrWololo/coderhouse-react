import { useEffect, useState } from "react";
import { useParams, Redirect } from "react-router-dom/cjs/react-router-dom.min";
import Loading from "../components/Loading";
import { getItem } from "../modules/firestoreRequests";
import ItemDetail from "../components/ItemDetail";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [item, setItem] = useState();
  const [redirect, setRedirect] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchItem = async () => {
      return getItem(id);
    };

    fetchItem().then((newItem) => {
      if (newItem === false) {
        setRedirect(true);
      } else {
        setItem(newItem);
        setIsLoading(false);
      }
    });
  }, [id]);

  return redirect ? (
    <Redirect to={{ pathname: "/404" }} />
  ) : (
    <div className="mx-2 sm:m-auto text-center">
      {isLoading ? <Loading /> : <ItemDetail item={item} />}
    </div>
  );
};

export default ItemDetailContainer;
