import bgImg from "../../assets/menu/banner3.jpg";
import dessertImg from "../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../assets/menu/pizza-bg.jpg";
import saladImg from "../../assets/menu/salad-bg.jpg";
import soupImg from "../../assets/menu/soup-bg.jpg";
import { Helmet } from "react-helmet-async";
import Cover from "../../components/shared/Cover";
import useMenu from "../../hooks/useMenu";
import SectionTitle from "../../components/shared/SectionTitle";
import MenuCategory from "./MenuCategory";

const Menu = () => {
  const [menu] = useMenu();
  const dessert = menu.filter((item) => item.category === "dessert");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const soup = menu.filter((item) => item.category === "soup");
  const offered = menu.filter((item) => item.category === "offered");

  return (
    <div className="container mx-auto text-white">
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      {/* Main Cover */}
      <Cover bgImg={bgImg} CoverTitle={"Our Menu"}></Cover>
      <SectionTitle subTitle={"Don't Miss"} title={"Today's Offer"}></SectionTitle>

      {/* Offered Menu Items */}
      <MenuCategory items={offered}></MenuCategory>

      {/* Dessert Menu Items */}
      <MenuCategory items={dessert} CoverTitle={"dessert"} bgImg={dessertImg}></MenuCategory>

      {/* Pizze Menu Items */}
      <MenuCategory items={pizza} CoverTitle={"pizza"} bgImg={pizzaImg}></MenuCategory>

      {/* salad Menu Items */}
      <MenuCategory items={salad} CoverTitle={"salad"} bgImg={saladImg}></MenuCategory>

      {/* soup menu Items */}
      <MenuCategory items={soup} CoverTitle={"soup"} bgImg={soupImg}></MenuCategory>
    </div>
  );
};

export default Menu;
