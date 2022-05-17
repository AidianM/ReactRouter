import {BrowserRouter as Router, Routes, Route, Link, useNavigate, useLocation} from 'react-router-dom';
import React from 'react';
import Home from './home';
import Products from './products';
import Summon from './summon';
import Connect from './connect';
import Header from './header';
import Footer from './footer';

function MyRoutes(props){
    return (
      <Router>
          <div>
             <Header />
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/products' element={<Products/>} />
                <Route path='/summon' element={<Summon/>} />
                <Route path='/connect' element={<Connect/>} />
            </Routes>

            <Footer />
            </div>  
    </Router>
    );
  }




  export default MyRoutes;