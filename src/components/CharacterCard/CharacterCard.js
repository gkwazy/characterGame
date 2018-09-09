import React from "react";
import "./CharacterCard.css";

const CharacterCard = props => (
    <div className="card bg-dark text-white cardBox" onClick={() => props.characterClicked(props.id)}>
        <img className="card-img" src={props.image} alt={props.name} />
    </div>
);
export default CharacterCard;