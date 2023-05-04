import React from "react";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import "./Chef.css";

const Chef = ({ chef }) => {
  const { name, picture, likes } = chef;
  return (

    <div className="col-lg-4">
      <div className=" ">
        <img src={picture} alt="" className="object-cover" />
        <h2>{name}</h2>
        <h3>{likes}</h3>
      </div>
      
    </div>
  );
};

export default Chef;
