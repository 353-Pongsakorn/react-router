import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Products from "./pages/Product";
import ProductDetail from "./pages/ProductDetail";

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Products />} />

        <Route path="/product/:productId" element={<ProductDetail />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
