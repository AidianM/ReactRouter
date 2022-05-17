import { Link } from "react-router-dom";
import './css/style.css';

function Footer(props){
    return(
        <footer>
            <div className="footer">
                <p>Logo</p>
                <div>
                    <ul className="nav_links foot_links">
                        <li><Link to="#" className="current">Home</Link></li>
                        <li><Link to="products.html">Products</Link></li>
                        <li><Link to="#">Summon</Link></li>
                        <li><Link to="connect.html">Connect</Link></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;