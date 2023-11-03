import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Error from "./Pages/Error";
// import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Film from "./Pages/Film";
function Routess() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/films/:id" element={<Film />} />
        <Route path="*" element={<Error />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default Routess