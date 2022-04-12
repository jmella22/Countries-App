//import "./App.css";
import { Routes, Route } from "react-router-dom";

import LandingPage from "./component/LandingPage";
import Home from "./component/Home";
import Detail from "./component/Detail";
import CreateActivity from "./component/CreateActivity";
import Page404 from "./component/Page404";
import About from "./component/About";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="Home" element={<Home />} />
        <Route path="Detail/:id" element={<Detail />} />
        <Route path="Activity/Create" element={<CreateActivity />} />
        <Route path="About" element={<About />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </>
  );
}

export default App;
