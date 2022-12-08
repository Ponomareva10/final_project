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
import OrderPage from "./pages/OrderPage";

function App() {
  const token = true;
  // const token = localStorage.getItem("token");
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/registration" element={<RegisPage />} />
        <Route path="/point_order" element={<OrderPage/>} />
        <Route
          path="/reviews"
          element={
            <PrivatePage isRequired={token} redirectLink="/auth">
              <ReviewsPage />
            </PrivatePage>
          }
        />
        <Route
          path="/question"
          element={
            <PrivatePage isRequired={token} redirectLink="/auth">
              <QuestionnairePage />
            </PrivatePage>
          }
        />
        <Route
          path="/readylook"
          element={
            <PrivatePage isRequired={token} redirectLink="/auth">
              <ReadyLookPage />
            </PrivatePage>
          }
        />
        <Route
          path="/shoplist/*"
          element={
            <PrivatePage isRequired={token} redirectLink="/auth">
              <ShopPage />
            </PrivatePage>
          }
        />
        <Route
          path="/basket"
          element={
            <PrivatePage isRequired={token} redirectLink="/auth">
              <BasketPage />
            </PrivatePage>
          }
        />
        <Route
          path="/checkout"
          element={
            <PrivatePage isRequired={token} redirectLink="/auth">
              <CheckoutPage />
            </PrivatePage>
          }
        />
                {/* <Route
          path="/point_order"
          element={
            <PrivatePage isRequired={token} redirectLink="/auth">
              <OrderPage />
            </PrivatePage>
          }
        /> */}
      </Routes>
    </div>
  );
}

export default App;