import React from "react";
import { MenuData } from "../Js/data";

const Navbar = () => {
    return(
        <nav className = "app-navbar" id = "navbar">
                <img className = "logo"  src="https://us.123rf.com/450wm/baldyrgan/baldyrgan1708/baldyrgan170800025/84438763-sagoma-stilizzata-di-vettore-del-giocatore-di-tennis-da-tavolo-modello-di-logo-di-ping-pong.jpg?ver=6" 
                alt="logo brutto" width="4%" height="4%" />
                <h1>"Moving Beyond Your Limits..." </h1>
                <ul className="navbar-items">
                    {MenuData.map((item)=>{return(
                        <li>
                            <a href={item.url} className="nav-links">{item.title}</a>
                        </li>
                    )})}
                </ul>
        </nav>
    )
};

export default Navbar;