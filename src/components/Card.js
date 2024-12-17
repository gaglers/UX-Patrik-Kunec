import React from 'react';
import './Card.css';
import DialogWindowSolo from './DialogWindowSolo';
const Card = ({ name, image }) => {

  if(name === "Stromy"){
    return (
      <DialogWindowSolo/>
    );
  }

  return (
    <button className="Card">
      <img src={image} alt={name} />
      <h2 className="text-black text-2xl font-thin text-center p-2">{name}</h2>
    </button>
  );
};

export default Card;
