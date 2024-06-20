import { Switch, Router, Route } from "react-router-dom";

import ErrorPage from './ErrorPage.jsx'
import About from './pages/About.jsx'
import Index from './pages/Index.jsx';
import Contact from './pages/Contact.jsx';
import NavBar from './components/NavBar.jsx';

export default function NavBar(){
    return (
        <Router>
            <header>
                <nav>
                    <ul>
                        <li>
                            <a href={`/`}>Home</a>
                        </li>
                        <li>
                            <a href={`/`}>Recipes</a>
                        </li>
                        <li>
                            <a href={`/about`}>About</a>
                        </li>
                        <li>
                            <a href={`/contact`}>Contact</a>
                        </li>
                    </ul>
                </nav>

                <Switch>
                    <Route exact path="/"> <Home /> </Route>
                    <Route path="/about"> <About /> </Route>
                    <Route path="/contact"> <Contact /> </Route>
                    <Route path="*"> <ErrorPage /> </Route>
                </Switch>
            </header>
        </Router>
    );
}