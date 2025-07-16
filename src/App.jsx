import { Routes, Route } from "react-router";
import CommonLayout from "./components/commonLayouts/CommonLayout";
import ProfilePage from "./pages/ProfilePage";
import NewsFeedPage from "./pages/NewsFeedPage";
import FriendsPage from "./pages/FriendsPage";
import AboutPage from "./pages/AboutPage";
import StorePage from "./pages/StorePage";
import ProductPage from "./pages/ProductPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";

const App = () => {
  return (
    <Routes>
      <Route element={<CommonLayout />}>
        <Route index element={<ProfilePage />} />
        <Route path="/newsfeed" element={<NewsFeedPage />} />
        <Route path="/friends" element={<FriendsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/store" element={<StorePage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/product-details" element={<ProductDetailsPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
      </Route>
    </Routes>
  );
};

export default App;
