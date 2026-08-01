import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import ApplyVisaPage from "./pages/ApplyVisaPage";
import ReviewPage from "./pages/ReviewPage";
import SuccessPage from "./pages/SuccessPage";
// import PassportForm from "./pages/PassportForm";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/apply" element={<ApplyVisaPage />} />
        <Route path="/review" element={<ReviewPage />} />
        <Route path="/success" element={<SuccessPage />} />
        {/* <Route path="/passport" element={<PassportForm />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
