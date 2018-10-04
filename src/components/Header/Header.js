import React from "react";
import "./Header.css";

const Header = props => {

        return (
        <nav className="navbar">
            <ul className="nav">
                <li className="brand nav-item ml-5 mr-5">
                    <a href="/"><strong>Memory Game</strong></a>
                </li>
                <li className="scores nav-item ml-5">
                        Score: {props.score} | Top Score: {props.topScore}
                </li>
            </ul>
        </nav>
        )
}

export default Header;