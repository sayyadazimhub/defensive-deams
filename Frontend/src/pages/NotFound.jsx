import { Link } from "react-router-dom";
import { ROUTE_PATHS } from "../constants/routes";

function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-3xl flex-col items-center justify-center gap-6 px-4 text-center">
      <h1 className="text-5xl font-bold text-pink-500">404</h1>
      <p className="text-lg text-slate-600 dark:text-slate-200">
        The page you are looking for might have been removed, renamed, or is
        temporarily unavailable.
      </p>
      <Link
        to={ROUTE_PATHS.HOME}
        className="rounded-md bg-pink-500 px-6 py-3 font-semibold text-white duration-200 hover:bg-pink-600"
      >
        Go back home
      </Link>
    </div>
  );
}

export default NotFound;

