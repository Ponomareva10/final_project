import "./App.css";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import MainPage from "./pages/MainPage";
import AuthPage from "./pages/AuthPage";
import RegisPage from "./pages/RegisPage";
import ReviewsPage from "./pages/ReviewsPage";
import QuestionnairePage from "./pages/QuestionnairePage";
import ReadyLookPage from "./pages/ReadyLookPage";
import ShopPage from "./pages/ShopPage";
import BasketPage from "./pages/BasketPage";
import CheckoutPage from "./pages/CheckoutPage";
import PrivatePage from "./components/Private/Private";

function App() {
  const token = localStorage.getItem("token");

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/registration" element={<RegisPage />} />
        <Route
          path="/reviews"
          element={
            <PrivatePage isRequired={token} redirectLink="/auth">
              <ReviewsPage />
            </PrivatePage>
          }
        />
        <Route path="/question" element={<QuestionnairePage />} />
        <Route path="/readylook" element={<ReadyLookPage />} />
        <Route path="/shoplist" element={<ShopPage />} />
        <Route path="/basket" element={<BasketPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
      </Routes>
    </div>
  );
}

export default App;
