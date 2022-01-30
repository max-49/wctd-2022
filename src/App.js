import Navbar from './navbar.js';
import Home from './home.js';
import About from './about.js';
import Contact from './contact.js';
import Blog from './blog.js';
import Footer from './footer.js'
import Product from './Product.js'

import './style.css';
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div style={{paddingTop: "3.5%"}}></div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/Product" element={<Product />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
