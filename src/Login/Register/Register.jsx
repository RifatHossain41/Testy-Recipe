import React, { useContext, useState } from 'react';
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from '../../Provider/AuthProvider';

const Register = () => {
  const [error, setError] = useState('')
  const [user, setUser] = useState('')
  const [email, setEmail] = useState('')

  const { createUser } = useContext(AuthContext)


  const handleRegister = event => {
    event.preventDefault()
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log( email, password);
   

    if(password.length<6){
      setError ('Please add at least 6 characters in your password');
      return;
    }
    
    // else if (email || password === null){
    //   return false;
    // }

    createUser(name, email, password)
    .then(result => {
      const loggedUser = result.user;
      console.log(loggedUser)
      
    })
    .catch(error => {
      console.log(error.message)
    })
 }

  return (
    <Container className="w-25 mx-auto">
      <h2>Please Register</h2>
      <Form onSubmit={handleRegister}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicText">                                                                                                 
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Enter name"
            required
            
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            required
          />
        </Form.Group>

        

        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>Photo URL</Form.Label>
          <Form.Control
            type="text"
            name="Photo"
            placeholder="Photo URL"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" name="accept" label="Accept terms and condition" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Register
        </Button>
        <br />
        <Form.Text className="text-secondary">
          Already Have An Account? <Link to="/login">Login</Link>
        </Form.Text>
        <Form.Text className="text-success"></Form.Text>
        <Form.Text className="text-danger"></Form.Text>
      </Form>
      <p className='text-danger'>{error}</p>
    </Container>
  );
};

export default Register;