import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { isLogged } = useSelector((state) => state.user);

  return isLogged ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
