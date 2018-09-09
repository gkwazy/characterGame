import React from "react";
import "./NavBar.css";

const CharaterCard = props => (
    <div className="jumbotron jumbotron-fluid">
        <div className="container">
            <h1 className="display-4 text-center">DBZ Matching Game</h1>
            <p className="lead text-center">Try to click on all of the character without clicking on one twice.</p>
            <p className="lead text-center">Total clicked: {props.correct}</p>
        </div>
    </div>
);
export default CharaterCard;