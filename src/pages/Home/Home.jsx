import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import Category from "./Category";
import Featured from "./Featured";
import PopularMenu from "./PopularMenu";
import Testimonial from "./Testimonial";

const Home = () => {
  return (
    <div className="container mx-auto text-white">
      <Helmet>
        <title>Bistro Boss | Home</title>
      </Helmet>
      <Banner></Banner>
      <Category></Category>
      <PopularMenu></PopularMenu>
      <Featured></Featured>
      <Testimonial></Testimonial>
    </div>
  );
};

export default Home;
