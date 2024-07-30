import Navbar from "./components/Navbar/navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Solutions } from "./components/Solutions/solutions";
import { Careers } from "./components/Careers/careers";
import { About } from "./components/About/about";
import { Home } from "./components/Home/home";
import "./App.css";
import { MobileNavbar } from "./components/MobileNavbar/mobileNavbar";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <MobileNavbar />
        </div>

        <Routes>
          {/* <Route path="/" element={<Home />} />
          <Route path="/addMovie" element={<AddMovie />} />

          <Route path="/randomMovie" element={<RandomMovie />} />
          <Route path="/filterform" element={<Filter />} />

          <Route path="*" element={<NotFound />} /> */}

          <Route path="/" element={<Home />}></Route>
          <Route path="/solutions" element={<Solutions />}></Route>

          <Route path="/about" element={<About />}></Route>

          <Route path="/careers" elemetn={<Careers />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
