import React from "react";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import "./Chef.css";
import Row from 'react-bootstrap/Row';
import { Button, Col } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const Chef = (props) => {
  const navigate = useNavigate();

  const { _id, name, picture, years_of_experience, num_recipes, likes, } = props.chef;


  const handleView = () => {
     navigate('/banner')
  }

  return (

   <div className="grid">
     {/* <Row xs={1} md={2} className="g-4">
      
      <Card className="mb-3">
        <img src={picture} alt="" />
        <Card.Body>

          <Card.Title>
            <h2>Name: {name}</h2>
          </Card.Title>
          <Card.Text>
            <h5>Experience: {years_of_experience}</h5>
            <h5>Recipes: {num_recipes}</h5>
            <h5>Likes: {likes}</h5>
          </Card.Text>

        </Card.Body>
      <Link to={`/banner/${_id}`}><Button>View Recipes</Button></Link>
      </Card>
    
   </Row> */}

<Card  className="mb-3">
<img className="w-full h-60" src={picture} alt="" />
      <Card.Body>
        <Card.Title>
          <h2>Name: {name}</h2>
        </Card.Title>
        <Card.Text>
            <h5>Experience: {years_of_experience}</h5>
            <h5>Recipes: {num_recipes}</h5>
            <h5>Likes: {likes}</h5>
        </Card.Text>
        <Link to={`/banner/${_id}`}><Button>View Recipes</Button></Link>
      </Card.Body>
    </Card>
   </div>
  );
};

export default Chef;
