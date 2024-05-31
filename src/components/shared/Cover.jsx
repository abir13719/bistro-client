import { Parallax } from "react-parallax";

const Cover = ({ bgImg, CoverTitle }) => {
  return (
    <Parallax blur={{ min: -50, max: 50 }} bgImage={bgImg} bgImageAlt="the dog" strength={-200}>
      <div className="hero min-h-[70vh]">
        <div className="hero-overlay bg-opacity-50"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold uppercase">{CoverTitle}</h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi
              exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default Cover;
