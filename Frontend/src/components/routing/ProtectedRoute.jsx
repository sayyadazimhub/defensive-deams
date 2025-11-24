import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import { useAuth } from "../../context/AuthProvider";
import { ROUTE_PATHS } from "../../constants/routes";

function ProtectedRoute({ children, redirectTo = ROUTE_PATHS.SIGNUP }) {
  const [authUser] = useAuth();
  const location = useLocation();

  if (!authUser) {
    return (
      <Navigate
        to={redirectTo}
        state={{ from: location }}
        replace
      />
    );
  }

  return children;
}

export default ProtectedRoute;

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
  redirectTo: PropTypes.string,
};

