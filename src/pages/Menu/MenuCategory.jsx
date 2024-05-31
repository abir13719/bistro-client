import { Link } from "react-router-dom";
import Cover from "../../components/shared/Cover";
import MenuItemCard from "../../components/shared/MenuItemCard";

const MenuCategory = ({ items, bgImg, CoverTitle }) => {
  return (
    <div>
      {CoverTitle && <Cover bgImg={bgImg} CoverTitle={CoverTitle ? CoverTitle : ""}></Cover>}
      <div className="grid grid-cols-2 gap-8 p-5">
        {items.map((item) => (
          <MenuItemCard key={item._id} item={item}></MenuItemCard>
        ))}
      </div>
      <Link className="flex justify-center mb-4" to={`/order/${CoverTitle}`}>
        <button className="btn btn-outline mt-3 border-0 border-b-2">See More</button>
      </Link>
    </div>
  );
};

export default MenuCategory;
