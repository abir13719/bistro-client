import SectionTitle from "../../components/shared/SectionTitle";
import featuredImg from "../../assets/home/featured.jpg";
import "./home.css";

const Featured = () => {
  return (
    <section className="featured bg-fixed text-white my-5">
      <SectionTitle subTitle={"Check It Out"} title={"From Our Menu"}></SectionTitle>
      <div className="md:flex items-center justify-center gap-6 px-16 py-11">
        <div>
          <img src={featuredImg} />
        </div>
        <div>
          <p>May 23, 2024</p>
          <p className="uppercase">Where can I get some?</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et quos mollitia nihil soluta
            corporis, suscipit totam vero voluptatum accusantium beatae voluptate distinctio, modi
            maxime fugiat animi. Rerum velit dolorum eius nesciunt facilis? At repellat optio
            libero, earum facilis eligendi sit quam eaque, minus ea, molestias quisquam fugiat
            dignissimos laboriosam est.
          </p>
          <button className="btn btn-outline mt-3 border-0 border-b-2">Order Now</button>
        </div>
      </div>
    </section>
  );
};

export default Featured;
