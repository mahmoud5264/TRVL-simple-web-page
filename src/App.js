import Nav from "./Components/Nav";
import { Routes, Route } from "react-router-dom";
import Cards from "./Components/Cards";
import Products from "./Components/Products";
import Services from "./Components/Services";
import Footer from "./Components/Footer";
import Home from "./Components/Home";

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <>
              <Home/>
              <Cards />
              <Footer />
            </>
          }
        />
        <Route exact path="/Products" element={<Products />} />
        <Route exact path="/Services" element={<Services />} />
      </Routes>
    </div>
  );
}

export default App;
