import React from "react";

const Card = ({ name, age, profession, photo }) => {
  return (
    <div className="card">
      <img src={photo} alt="Avatar" className="photo" />
      <div className="container">
        <h4>
          <b>{name}</b>
        </h4>
        <p>{profession}</p>
        <p>{age} years old</p>
      </div>
    </div>
  );
};

export default Card;
