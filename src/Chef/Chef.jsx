import React from "react";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import "./Chef.css";

const Chef = ({ chef }) => {
  const { name, picture, likes } = chef;
  return (

    <div className="grid grid-cols-3">
      <div className=" ">
        <img src={picture} alt="" className="object-cover" />
        <h2>{name}</h2>
        <h3>{likes}</h3>
      </div>
      
    </div>
  );
};

export default Chef;
