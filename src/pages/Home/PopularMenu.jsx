import SectionTitle from "../../components/shared/SectionTitle";
import useMenu from "../../hooks/useMenu";
import MenuCategory from "../Menu/MenuCategory";

const PopularMenu = () => {
  const [menu] = useMenu();
  const popular = menu.filter((item) => item.category === "popular");

  return (
    <section className="my-5">
      <SectionTitle subTitle={"Popular Menu"} title={"From Our Menu"}></SectionTitle>
      <MenuCategory items={popular}></MenuCategory>
    </section>
  );
};

export default PopularMenu;
