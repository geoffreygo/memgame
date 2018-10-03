import React from "react";
import "./Header.css";

const Header = props => {

        return (
        <div>
            <nav className="navbar">
                <ul className="nav justify-content-center">
                    <li className="brand nav-item ml-5">
                        <a href="/">Memory Game</a>
                    </li>
                    <li className="instr nav-item ml-5">Click an image to begin!</li>
                    <li className="scores nav-item ml-5">
                          Score: {props.score} | Top Score: {props.topScore}
                    </li>
                </ul>
            </nav>
        </div>
        )
}

export default Header;