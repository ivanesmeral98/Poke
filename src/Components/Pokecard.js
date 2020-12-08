import React, { Component } from 'react';
import "../Styles/Pokecard.css";

// Shows a single Pokemon, with their name, image, and type
class Pokecard extends Component {
    render() {
        const props = this.props;
        let imgSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${props.id}.png`
        return (
            <div className="Pokecard">
                <h1>{props.name}</h1>
                <img src={imgSrc} alt={props.name} />
                <div>Type: {props.type} </div>
                <div>Base experience: {props.base_experience} </div>
                <br/>
            </div>
        )
    }
} 

export default Pokecard;