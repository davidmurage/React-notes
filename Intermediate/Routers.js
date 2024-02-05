//Home
import React from 'react';

const Home = () => {
    return (
        <div>
            <h1>Home</h1>
            <p>Welcome to my react App</p>
        </div>
    )
            
}




//About
import React from 'react';

const About = () => {
    return (
        <div>
            <h1>About</h1>
            <p>This is a simple react</p>
        </div>
    )
}



//Contact
import React from 'react';

const Contact = () => {
    return (
        <div>
            <h1>Contact</h1>
            <p>Get intouch with us</p>
        </div>
    )
}

export default Contact;



//App.js
import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';

const App = () => {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                </nav>
                <Route path="/" exact component={Home} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
            </div>
        </Router>
    )
}