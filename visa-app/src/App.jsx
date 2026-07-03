import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Formpage from "./pages/Formpage";
import Reviewpage from "./pages/Reviewpage";
import Submitpage from "./pages/Submitpage";
import Notfound from "./pages/Notfound";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/apply" element={<Formpage />} />

        <Route path="/review" element={<Reviewpage />} />

        <Route path="/submit" element={<Submitpage />} />

        <Route path="*" element={<Notfound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
