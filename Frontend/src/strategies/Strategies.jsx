import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { STRATEGY_STEPS } from "../constants/strategySteps";
import { ROUTE_PATHS } from "../constants/routes";

function StrategyCard({ step }) {
  return (
    <article className="flex flex-col items-center gap-6 rounded-2xl bg-white/70 p-6 text-left shadow-lg dark:bg-slate-800/80 lg:flex-row">
      <img
        src={step.image}
        alt={step.title}
        className="max-h-[320px] w-full rounded-xl object-cover lg:w-1/2"
        loading="lazy"
      />
      <div className="space-y-4 lg:w-1/2">
        <h2 className="text-2xl font-bold">
          {step.id}. {step.title}
        </h2>
        {step.content.map((paragraph, index) => (
          <p
            key={`${step.id}-${index}`}
            className="text-base leading-7 text-slate-600 dark:text-slate-200"
          >
            {paragraph}
          </p>
        ))}
      </div>
    </article>
  );
}

StrategyCard.propTypes = {
  step: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    content: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

function Strategies() {
  return (
    <section className="mx-auto max-w-screen-2xl px-4 py-16 text-center md:px-20">
      <h1 className="text-3xl font-semibold md:text-5xl">
        Defensive <span className="text-pink-500">techniques</span> that work
      </h1>
      <p className="mt-8 text-lg leading-8 text-slate-600 dark:text-slate-200">
        Martial arts is a language of empowerment. Each move tells a story of
        survival, resilience, and confidence. We distilled core principles into
        simple techniques so you can build instincts that stay sharp under
        pressure.
      </p>
      <div className="mt-12 flex flex-col gap-10">
        {STRATEGY_STEPS.map((step) => (
          <StrategyCard key={step.id} step={step} />
        ))}
      </div>
      <div className="mt-12">
        <Link
          to={ROUTE_PATHS.HOME}
          className="rounded-md bg-pink-500 px-6 py-3 font-semibold text-white duration-200 hover:bg-pink-600"
        >
          Back to home
        </Link>
      </div>
    </section>
  );
}

export default Strategies;
