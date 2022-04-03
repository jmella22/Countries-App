import "./App.css";
import { Routes, Route } from "react-router-dom";

import LandingPage from "./component/LandingPage";
import Home from "./component/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/Home" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
