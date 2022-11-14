import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import AuthPage from "./pages/AuthPage";
import RegisPage from "./pages/RegisPage";
import ReviewsPage from "./pages/ReviewsPage";
import QuestionnairePage from "./pages/QuestionnairePage";
import ReadyLookPage from "./pages/ReadyLookPage";
import ShopPage from "./pages/ShopPage";
import BasketPage from "./pages/BasketPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/registration" element={<RegisPage />} />
        <Route path="/reviews" element={<ReviewsPage />} />
        <Route path="/question" element={<QuestionnairePage />} />
        <Route path="/readylook" element={<ReadyLookPage />} />
        <Route path="/shoplist" element={<ShopPage />} />
        <Route path="/basket" element={<BasketPage />} />
      </Routes>
    </div>
  );
}

export default App;
