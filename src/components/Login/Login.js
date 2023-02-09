import React, { useContext, useState } from "react";
import "./Login.css";
import Form from "react-bootstrap/Form";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../UserContext/UserContext";

const Login = () => {
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const {signIn, signInWithGoogle} = useContext(AuthContext);

  let from = location.state?.from?.pathname || "/";

  const handleLogIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
    .then((result) => {
      form.reset();
      const user = result.user;
      console.log(user);
      navigate(from, { replace: true });
    })
    .catch((error) => {
      const errorMessage = error.message;
      setError(errorMessage);
      console.error(error);
    })
  }

  const handleGoogle = () =>  {
    signInWithGoogle()
    .then((result) => {
      const user = result.user;
      console.log(user);
      navigate(from, { replace: true });
    })
    .catch((error) => {
      console.error(error);
    })
  }

  return (
    <div className='container login-form'>
      <h1>Login</h1>
      <Form onSubmit={handleLogIn} className="w-50 mx-auto">
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control name="email" type="email" placeholder="Enter email" required/>
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
        <p className='text-danger'>{error}</p>
        <button className='login-btn'>Login</button>
        <button onClick={handleGoogle} className='google-btn'>Google</button>
      </Form>
      <p>Create a new account? <Link to='/signup'>Register</Link></p>
    </div>
  );
};

export default Login;
