import MenuAppBar from "./components/Nav";
import ProductPage from "./components/ProductPage";
import Cart from "./components/Cart";
import LandingPage from "./components/LandingPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductOverview from "./components/ProductOverview";
import { Provider } from "react-redux";
import store from "./configure redux/store";
export default function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <MenuAppBar />
          <Routes>
            <Route index element={<LandingPage />} />
            <Route path="products" element={<ProductPage />} />
            <Route path="products/cart" element={<Cart />} />
            <Route path="products/:id" element={<ProductOverview />} />
            <Route path="*" element={<ProductOverview />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}
