import React from 'react';
import Pokedex from './Pokedex';
import dealerDeck from './dealerDeck';

function Pokegame() {
    // use the Fisher-Yates aka Knuth shuffle algorithm to randomize dealerDeck
    
    let m = dealerDeck.length, t, i;

    // While there are still elements left to suffle
    while (m) {
        // Pick a remaining element
        i = Math.floor(Math.random() * m--);

        // Swap it with the current element.
        t = dealerDeck[m];
        dealerDeck[m] = dealerDeck[i];
        dealerDeck[i] = t;
    }

    let playerOneDeck = [];
    let playerTwoDeck = [];

    for (let j=0; j<dealerDeck.length; j++) {
        (j % 2 == 0) ? playerOneDeck.push(dealerDeck[j]) : playerTwoDeck.push(dealerDeck[j]);

        // if (j % 2 == 0) {
        //     playerOneDeck.push(dealerDeck[j])
        // } else {
        //     playerTwoDeck.push(dealerDeck[j])
        // }
    }

    return (
        <div>
            <Pokedex player="Player One" pokemon={playerOneDeck}/>
            <Pokedex player="Player Two" pokemon={playerTwoDeck}/>
        </div>
    )
}

export default Pokegame;