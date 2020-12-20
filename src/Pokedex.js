/* Provided an array of objects (via props) describing different
    Pokemon.  Renders a sequence of Pokecard component */
import React from 'react';
import Pokecard from './Pokecard';
import './Pokedex.css';

function Pokedex(props) {
    const gameResults = props.winner 
        ? <b className="Pokedex-winner">{props.xp} Winner!</b>
        : <b className="Pokedex-loser">{props.xp} Loser</b>
    return (
        <div className="Pokedex-container">
            <div className="Pokedex-cards">
            <h1 className="Pokedex-title">{props.player}'s Deck</h1>
            <h2 className="Pokedex-subtitle">XP: <i>{gameResults}</i></h2>
                {props.pokemon.map(p => {
                    return <Pokecard 
                        id={p.id}
                        name={p.name}
                        type={p.type}
                        exp={p.base_experience}
                    />
                })}
            </div>
        </div>
    )
}



export default Pokedex;