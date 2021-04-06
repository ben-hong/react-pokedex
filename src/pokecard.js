import React from "react";
import("./pokecard.css");

function Pokecard(props) {
  let { name, id, type, base_experience } = props;
  let source = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
  return (
    <div className="pokeCard">
      <div className="poke-name">{name}</div>
      <div>
        <img src={source} alt=""></img>
      </div>
      <div>Type: {type}</div>
      <div>EXP: {base_experience}</div>
    </div>
  );
}

export default Pokecard;
