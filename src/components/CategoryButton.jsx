const CategoryButton = ({ isDrawer, text }) => {
  return (
    <button className={`${isDrawer ? "hover:bg-transparent" : "btn-sm"} btn btn-ghost`}>
      {text}
    </button>
  );
};

export default CategoryButton;
