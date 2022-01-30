import './style.css'
import Logo from './Logo.png'
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar fixed-top navbar-expand-lg navbar-light" style={{backgroundColor: "#B59286"}}>
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <Link className="navbar-brand" style={{height: "100%", paddingTop: "-10px"}} to="/">
                            <img src={Logo} alt="our logo" height="15px" />
                        </Link>
                        <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="/contact">Contact</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="/Product">Product</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="/blog">Blog</Link>
                        </li>
                    </ul>
                </div>
            </div>
            </nav>
    );
}

export default Navbar;