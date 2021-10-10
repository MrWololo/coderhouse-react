const ItemListContainer = ({ greeting }) => {
  return (
    <div className="container m-auto text-center">
      {greeting || (
        <h2>
          A curated selection of useless items made for{" "}
          <span className="text-primary primary font-semibold">U</span>
        </h2>
      )}
    </div>
  );
};

export default ItemListContainer;
