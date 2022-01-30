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
                    <Link style={{height: "100%", paddingTop: "5px"}} to="/">
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
                    {/* <li className="nav-item dropdown">
                    <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Dropdown
                    </Link>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><Link className="dropdown-item" to="#">Action</Link></li>
                        <li><Link className="dropdown-item" to="#">Another action</Link></li>
                        <li><hr className="dropdown-divider" /></li>
                        <li><Link className="dropdown-item" to="#">Something else here</Link></li>
                    </ul>
                    </li> */}
                    {/* <li className="nav-item">
                    <Link className="nav-link disabled" to="#" tabindex="-1" aria-disabled="true">Disabled</Link>
                    </li> */}
                </ul>
                </div>
            </div>
            </nav>
    );
}

export default Navbar;