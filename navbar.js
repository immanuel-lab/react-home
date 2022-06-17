import {BrowserRouter as Router,Link, Route,Routes}
from "react-router-dom";
import "./navbar.css"
import Home from "./home"
import About from "./about"
import Contact from "./contact"

function Navbar(){

    return (

        <Router>
            <div className="navbar-container">
                <nav>
            <ul>
                <li><Link to ="/">Home</Link></li>
                <li><Link to ="/contact">Contact</Link></li>
                <li><Link to ="/about">About</Link></li>
            </ul>
            
            <Routes>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/contact" component={Contact}></Route>
            <Route exact path="/about" component={About}></Route>
            </Routes>
        </nav>
        </div>
            </Router> 
       
 
 
        )
 
}

export default Navbar;