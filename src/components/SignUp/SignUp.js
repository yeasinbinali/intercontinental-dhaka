import React, { useContext, useState } from "react";
import "./SignUp.css";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../UserContext/UserContext";

const SignUp = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const { createUser, signInWithGoogle } = useContext(AuthContext);

  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirm = form.confirm.value;

    if (password.length < 6) {
      setError("Password length must be 6 characters and more");
      return;
    }

    if (password !== confirm) {
      setError("Password didnot match");
      return;
    }

    createUser(email, password)
      .then((result) => {
        form.reset();
        const user = result.user;
        console.log(user);
        navigate('/');
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
        console.error(error);
      });
  };

  const handleGoogle = () =>  {
    signInWithGoogle()
    .then((result) => {
      const user = result.user;
      console.log(user);
      navigate('/');
    })
    .catch((error) => {
      console.error(error);
    })
  }
  return (
    <div className="container sign-up-form">
      <h1>Sign Up</h1>
      <Form onSubmit={handleSignUp} className="w-50 mx-auto">
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            name="email"
            type="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            name="confirm"
            type="password"
            placeholder="confirm password"
            required
          />
        </Form.Group>
        <p className="text-danger">{error}</p>
        <button className='register-btn'>Register</button>
        <button onClick={handleGoogle} className='google-btn'>Google</button>
      </Form>
      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
};

export default SignUp;
