import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Catalog from "./components/Catalog";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer"; // Pastikan ini benar

const App = () => {
  return (
    <Router>
      <div>
        {/* Routing */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
