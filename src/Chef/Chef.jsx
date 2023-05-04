import React from "react";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import "./Chef.css";
import Row from 'react-bootstrap/Row';
import { Col } from "react-bootstrap";

const Chef = ({ chef }) => {
  const { _id, name, picture, years_of_experience, num_recipes, likes, description } = chef;
  return (

   <div className="">
     <Row xs={1} md={2} className="g-4">
      
      <Card>
        {/* <Card.Img className="w-12" variant="top" src={picture} /> */}
        <img src={picture} alt="" />
        <Card.Body>

          <Card.Title>
            <h3>{name}</h3>
          </Card.Title>
          <Card.Text>
            <h4>Experience: {years_of_experience}</h4>
            <h5>Recipes: {num_recipes}</h5>
            <h5>Likes: {likes}</h5>
           {description}
          </Card.Text>

        </Card.Body>
      </Card>
    
</Row>
   </div>
  );
};

export default Chef;
