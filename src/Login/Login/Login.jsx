import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import { getAuth, signInWithPopup, signOut } from 'firebase/auth';
import app from '../../firebase/firebase.config';

const Login = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState('')
  const [success, setSuccess] = useState()

  const auth = getAuth(app)
 const {signIn} = useContext(AuthContext)
 const { googleProvider } = useContext(AuthContext)
 const { githubProvider } = useContext(AuthContext)

  const handleGoggleSingIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const loggedInUser = result.user;
        console.log(loggedInUser);
        setUser(loggedInUser);
      })
      .catch((error) => {
        console.log("error", error.message);
      });
  };

  const handleGithubSignIn = () => {
    signInWithPopup(auth, githubProvider)
      .then(Result => {
        const loggedUser = result.user;
        console.log(loggedUser)
        setUser(loggedUser)
      })
      .catch(error => {
        console.log(error.message)
      })
  }

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log(email, password) 

    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        form.reset()
      })
      .catch((error) => {
        setError(error.message);
      });
  }

  return (
    <Container className="w-25 mx-auto">
      <h2>Please Login</h2>
      <Form onSubmit={handleLogin}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="email" placeholder="Enter email" required/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name="password" placeholder="Password" required/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        
        <Button variant="primary" type="submit">
          Login
        </Button>
        
        <br />
        <Form.Text className="text-secondary">
         Don't Have An Account? <Link to="/register">Register</Link>
        </Form.Text>
        <Form.Text className="text-success">

        </Form.Text>
        <Form.Text className="text-danger">
            {setError}
        </Form.Text>
        <br />
      
       <div>
         <Button onClick={handleGoggleSingIn} variant="secondary" type="submit">
         Google Sign-in
        </Button>
        <Button onClick={handleGithubSignIn} variant="secondary" type="submit">
         GitHub Sign-in
        </Button>
       </div>

        
       
      </Form>
    </Container>
  );
};

export default Login;