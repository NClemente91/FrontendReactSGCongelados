import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PublicRoute = ({ children }) => {
  const { isLogged } = useSelector((state) => state.user);

  return isLogged ? <Navigate to="/" /> : children;
};

export default PublicRoute;
