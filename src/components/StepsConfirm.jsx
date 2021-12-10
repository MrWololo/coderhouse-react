import Loading from "./Loading";

const StepsConfirm = ({ items, total, isLoading }) => {
  return isLoading ? (
    <Loading />
  ) : (
    <div>
      {items.map((value) => (
        <div className="card shadow-lg compact bg-base-100 m-auto my-3">
          <div className="card-body flex-row justify-between space-x-4">
            <h4 className="text-base">{value.quantity}x</h4>
            <h2 className="flex-1 card-title">{value.item.data.title}</h2>
            <h3 className="text-lg">
              ${value.item.data.price * value.quantity}
            </h3>
          </div>
        </div>
      ))}
      <div className="flex justify-around mt-2">
        <p>Total</p>
        <p>${total}</p>
      </div>
    </div>
  );
};

export default StepsConfirm;
