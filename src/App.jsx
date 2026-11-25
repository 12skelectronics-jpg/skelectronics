import { useEffect } from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import { Header, Footer } from "./components.jsx";
import Home from "./pages/Home.jsx";
import Services from "./pages/Services.jsx";
import Training from "./pages/Training.jsx";
import About from "./pages/About.jsx";
import Reviews from "./pages/Reviews.jsx";
import Contact from "./pages/Contact.jsx";

const TITLES = {
  "/": "SK Electronics – Mobile Repair in Shivamogga",
  "/services": "Services – SK Electronics",
  "/training": "Training & Projects – SK Electronics",
  "/about": "About Us – SK Electronics",
  "/reviews": "Customer Reviews – SK Electronics",
  "/contact": "Contact Us – SK Electronics",
};

export default function App() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = TITLES[pathname] || TITLES["/"];
  }, [pathname]);

  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/training" element={<Training />} />
          <Route path="/about" element={<About />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
