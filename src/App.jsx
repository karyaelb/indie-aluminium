import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Catalog from "./components/Catalog";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import Metadata from "./Metadata";

const App = () => {
  return (
    <>
      <Metadata
        title="Indie Aluminium"
        description="Kami melayani pemasangan aluminium seperti pintu, kusen,
        jendela dan partisi lain di Sidoarjo dan sekitarnya."
        icon="/logo.jpg"
        openGraph={{
          images: ["logo.jpg"],
        }}
      />
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
    </>
  );
};

export default App;
