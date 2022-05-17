import {BrowserRouter as Router, Routes, Route, Link, useNavigate, useLocation} from 'react-router-dom';
import "./css/style.css";

function Header(props){

    return(
        <header>
            <div className="logo">
                Logo
            </div>
            <nav>
                <ul className="nav_links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/products" className="current">Products</Link></li>
                    <li><Link to="/summon">Summon</Link></li>
                    <li><Link to="/connect">Connect</Link></li>
                </ul>
            </nav>
            <div className="search">
                <input type="text" size="30"/>
                <div className="icon-container">
                    <img src="./search.png" alt='search icon' className="icons" />
                </div>
            </div>
            <div className="user-info">
                <ul className="log-locate">
                    <li>
                        <Link to="#">Sign In</Link> 
                        / <Link to="#">Dealer Locator</Link>
                    </li>
                    <li id="cart"><Link to="#">View Cart</Link>
                        <div className="cart-container">
                            <img src="./cart.svg" className="icon-cart" />
                        </div>
                    </li>
                </ul>
            </div>
        </header>
    );
}

export default Header;