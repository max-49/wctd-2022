import Navbar from './navbar.js';
import Home from './home.js';
import About from './about.js';
import Contact from './contact.js';
import Blog from './blog.js';
import Footer from './footer.js'
import Product from './product.js'

import './style.css';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div style={{paddingTop: "2%"}}></div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/product" element={<Product />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
