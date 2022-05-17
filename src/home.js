import {BrowserRouter as Router, Routes, Route, Link, useNavigate, useLocation} from 'react-router-dom';
import './css/style.css';
import Header from './header';
import Content1 from './content1';
import Footer from './footer';

function Home(props){

    return(

            <div>

                <Content1 />

            </div>

    );
}

export default Home;