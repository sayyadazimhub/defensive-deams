import { Link } from "react-router-dom";
import { ROUTE_PATHS } from "../constants/routes";

const BANNER_IMAGE = "/img/banner.png";

function Banner() {
  return (
    <div className="mx-auto flex max-w-screen-2xl flex-col items-center gap-10 px-4 py-16 md:flex-row md:px-20">
      <div className="order-2 w-full space-y-8 md:order-1 md:w-1/2">
        <h1 className="text-3xl font-bold md:text-5xl">
          Learn a new defensive strategy{" "}
          <span className="text-pink-500">every day.</span>
        </h1>
        <p className="text-base md:text-xl">
          Defensive DEAMS keeps you ready with practical safety techniques,
          real-time alerts, and actionable insights across physical and digital
          threats.
        </p>
        <Link
          to={ROUTE_PATHS.STRATEGY}
          className="inline-block rounded-md bg-pink-500 px-6 py-3 font-semibold text-white duration-200 hover:bg-pink-600"
        >
          Explore strategies
        </Link>
      </div>
      <div className="order-1 w-full md:w-1/2">
        <img
          src={BANNER_IMAGE}
          className="mx-auto h-auto max-w-full"
          alt="Defensive DEAMS hero"
          loading="lazy"
        />
      </div>
    </div>
  );
}

export default Banner;
