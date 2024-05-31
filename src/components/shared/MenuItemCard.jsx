const MenuItemCard = ({ item }) => {
  const { name, image, price, recipe } = item;
  return (
    <div className="flex space-x-3">
      <img
        className="h-16 w-16 object-cover object-center rounded-tr-full rounded-br-full rounded-bl-full"
        src={image}
      />
      <div className="">
        <p>{name}----------</p>
        <p>{recipe}</p>
      </div>
      <p className="text-yellow-500">${price}</p>
    </div>
  );
};

export default MenuItemCard;
