import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; 

const AdminRoute = () => {
  const { user } = useAuth(); // Destructure correctly

  if (!user) {
    return <p>Loading...</p>; // Show a loading state
  }

  if (user.role !== "admin") {
    return <Navigate to="/unauthorized" />; // Redirect non-admin users
  }

  return <Outlet />;
};

export default AdminRoute;

