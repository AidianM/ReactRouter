import {BrowserRouter as Router, Routes, Route, Link, useNavigate, useLocation} from 'react-router-dom';
import './css/style.css';
import Header from './header';
import Content1 from './content1';
import Footer from './footer';

function Connect(props){
    return (
        <content>
            <div class="mission">
                <h1>Connect to the<br/>Hive</h1>
            </div>
            <div class="text-body">
                <div class="blast">
                    <p>Your interest has been noted.</p>
                    <br/>
                    <p>A representative will contact you shortly.</p>
                    <br/>
                    <p>Please do not attempt to delay or verify the representative.</p>
                    <br/>
                    <p>If you wish to undo this terrible error, please submit a request <a href="mailto: ohgodohgodundoundo@LOGOS.com" class="mail-demon">here</a>.</p>
                </div>
            </div>
        </content>

    );
}

export default Connect;