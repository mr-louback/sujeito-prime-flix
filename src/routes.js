import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./Pages/Home";
import Film from "./Pages/Film";
import Favorites from "./Pages/Favorites";
// import Contact from "./Pages/Contact";
import Error from "./Pages/Error";
function Routess() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/films/:id" element={<Film />} />
        <Route path="/favorites" element={<Favorites />} />
        {/* <Route path="/contact" element={<Contact />} /> */}

        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Routess