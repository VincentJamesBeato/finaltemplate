import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./component/Home";
import Navbar from "./Navbar";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Navbar />}>
            <Route path='/' element={<Home />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
