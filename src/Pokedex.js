/* Provided an array of objects (via props) describing different
    Pokemon.  Renders a sequence of Pokecard component */
import React from 'react';
import Pokecard from './Pokecard';
import './Pokedex.css';

function Pokedex(props) {
    return (
        <div className="Pokedex-container">
            <h1 className="Pokedex-title">Pokedex</h1>
            <div className="Pokedex-cards">
                {props.pokemon.map(p => {
                    return <Pokecard 
                        id={p.id}
                        name={p.name}
                        type={p.type}
                        exp={p.base_experience}
                    />
                })};
            </div>
        </div>
    )
}



export default Pokedex;