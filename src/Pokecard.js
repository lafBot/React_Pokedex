//  Shows a single Pokemon, with their name, image, and type
import React from 'react';
import './Pokecard.css';


function Pokecard(props) {
    return (
        <div className="Pokecard-container">
            <h1 className="Pokecard-name">{props.name}</h1><br></br>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.id}.png`} alt={`${props.name} pokemon`} /><br></br>
            Type: {props.type}<br></br>
            EXP: {props.exp}
        </div>
    )
}

export default Pokecard;