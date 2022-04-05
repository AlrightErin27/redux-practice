import React from "react";

function Character({ char }) {
  console.log();
  return (
    <div className="char-container">
      <p>Name: {char.name}</p>
      <p>House: {char.house}</p>
      <img src={char.image} alt={char.name} />
    </div>
  );
}

export default Character;
