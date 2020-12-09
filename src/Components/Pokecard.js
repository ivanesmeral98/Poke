import React, { Component } from 'react';
import "../Styles/Pokecard.css";

// Shows a single Pokemon, with their name, image, and type
class Pokecard extends Component {
    render() {
        const props = this.props;
        let imgSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${props.id}.png`
        return (
            <div className="Pokecard">
                <h1 className="Pokecard-title">{props.name}</h1>
                <img src={imgSrc} alt={props.name} />
                <div className="Pokecard-data">Type: {props.type} </div>
                <div className="Pokecard-data">Base experience: {props.exp} </div>
                <br/>
            </div>
        )
    }
} 

export default Pokecard;