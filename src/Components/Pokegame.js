import React, {Component} from 'react'
import Pokedex from './Pokedex';
import "../Styles/Pokegame.css";
class Pokegame extends Component {

    chooseTwoRandomHands = (pokemon) => {
        let handOne = [];
        let totalExpOne = 0;

        let handTwo = [];
        let totalExpTwo = 0;

        // adding to first hand until 4 random have been added
        while(handOne.length !== 4) {
            let randomIndex = Math.floor(Math.random() * pokemon.length);       
            if (!handOne.includes(pokemon[randomIndex])) {
                handOne.push(pokemon[randomIndex]);
                totalExpOne += pokemon[randomIndex].base_experience;
            }
        }

        // adding remaining pokemon to second hand
        for (let i = 0; i < pokemon.length; i++) {
            if (!handOne.includes(pokemon[i])) {
                handTwo.push(pokemon[i]);
                totalExpTwo += pokemon[i].base_experience;
            }
        }
        return [{handOne, totalExpOne}, {handTwo, totalExpTwo}];
    }

    getWinner = (valOne, valTwo) => {
        return (valOne > valTwo) ? valOne : valTwo;
    }
    getLoser = (valOne, valTwo) => {
        return (valOne < valTwo) ? valOne : valTwo;
    }

    render() {
        let { pokemon } = this.props;

        // getting random hands
        let hands = this.chooseTwoRandomHands(pokemon);
        let handOne = hands[0].handOne;
        let handTwo = hands[1].handTwo;

        // determining winning value
        let winningVal = this.getWinner(hands[0].totalExpOne, hands[1].totalExpTwo);
        let losingVal = this.getLoser(hands[0].totalExpOne, hands[1].totalExpTwo);
        let winner = (winningVal === hands[0].totalExpOne) ? "Hand one" : "Hand two";

        return (
            <div className="Pokegame">
                <h1 className="title">Ivan's Pokedex</h1>
                <Pokedex pokemon={handOne} exp={handOne.totalExpOne}/>  
                <p className="winningStatement"><strong>{winner}</strong> has won the battle with a total experience of <strong>{winningVal}</strong> compared to <strong>{losingVal}</strong>!</p>
                <Pokedex pokemon={handTwo} exp={handTwo.totalExpTwo}/>          
            </div>
        )
    }
}
export default Pokegame;
