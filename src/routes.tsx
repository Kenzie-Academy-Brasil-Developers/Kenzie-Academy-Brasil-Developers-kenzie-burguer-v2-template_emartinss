import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ShopPage from "./pages/ShopPage";
import { ProductsProvider } from "./providers/ProductsContext";
import { ProtectRoutes } from "./components/ProtectRoutes";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/shop" element={<ProtectRoutes/>}>
        <Route
          index
          element={
            <ProductsProvider>
              <ShopPage />
            </ProductsProvider>
          }
        />
      </Route>
    </Routes>
  );
};

export default Router;
