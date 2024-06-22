import { useState } from 'react';
import { Link } from "react-router-dom";

export default function NavBar(){
    const [navClass, setNavClass] = useState("");

    return (
        <nav className={navClass}>
            <button onClick={()=>navClass === "" ? setNavClass("open") : setNavClass("")}>
                {(navClass === "" ? '=' : `<`)}
                </button>
            <Link to="/">Home</Link>
            <Link to="/recipes">Recipes</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
        </nav>
    );
}