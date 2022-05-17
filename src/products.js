import {BrowserRouter as Router, Routes, Route, Link, useNavigate, useLocation} from 'react-router-dom';
import './css/style.css';
import Header from './header';
import Content1 from './content1';
import Footer from './footer';

function Products(props){
    return (
                <content>
                    <div class="mission">
                        <h1>Coming soon!</h1>
                        </div>
                        <div class="text-body">
                            <div class="blast">
                              <p>A wide world of uncomfortable content and consumables is coming your way!</p>
                              <br/>
                              <p>Stay <a href="connect.html" class="show-off">connected</a> to get the latest news!</p>
                        </div>
                    </div> 
                </content>

    );
}

export default Products;