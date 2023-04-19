import { Navigate, Outlet } from "react-router-dom";

export const ProtectRoutes = () => {
  const token = localStorage.getItem("@KenzieBurger:token");

  return !token ? <Navigate to="/" /> : <Outlet />;
};
