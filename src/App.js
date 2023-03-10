import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import { Route, Routes } from "react-router-dom";
import RestaurantView from "./RestaurantView";
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

      <Routes>
        <Route path="view-restaurant/:id" element={<RestaurantView />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
