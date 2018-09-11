import React from "react";
import "./NavBar.css";

const CharaterCard = props => (
    <nav className="navbar navbar-dark ">
        <div className="container">
            <h1 className="text-center">DBZ Matching Game</h1>

            <h1 className="text-center">Total clicked: {props.correct}</h1>
        </div>
    </nav>
);
export default CharaterCard;