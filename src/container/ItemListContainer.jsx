import ItemList from "../components/ItemList";

const ItemListContainer = ({ greeting }) => {
  return (
    <div className="container mx-2 sm:m-auto text-center">
      {greeting || (
        <h2>
          A curated selection of useless items made for{" "}
          <span className="text-primary primary font-semibold">U</span>
        </h2>
      )}

      <ItemList />
    </div>
  );
};

export default ItemListContainer;
