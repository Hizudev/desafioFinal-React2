import Navbar from "./Components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Product from "./Pages/Product";
import NotFound from "./Pages/NotFound";
import Cart from "./Pages/Cart";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>
  );
}
