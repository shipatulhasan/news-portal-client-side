import React, { useContext, useState } from "react";
import { Button, Card } from "react-bootstrap";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../UseContext/AuthProvider";
import ResetPassword from "./ResetPassword";

const Login = () => {
  const {signInUser, setLoading } = useContext(AuthContext);
  const [error, setError] = useState("");

   //  redirect

   let navigate = useNavigate();
   let location = useLocation();

  // Modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

 

  let from = location.state?.from?.pathname || "/";

  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const pass = form.password.value;

    signInUser(email, pass)
    .then(result => {
        const user = result.user;
        // console.log(user);
        setError('')
        form.reset()
        if(user.emailVerified){
          
          toast.success("Successfully Signed In");
          navigate(from, { replace: true });
        }
        else{
          toast.error('Please verify your account')
          
        }
      })
      .catch((err) => {
        console.error(err);
        setError(err.message);
      })
      .finally(()=>{
        setLoading(false)
      })
  };

  return (
    <Card className="mx-lg-4">
      <Card.Header className="fs-3 text-white text-center bg-dark">
        Login Form
      </Card.Header>
      <Form className="p-4" onSubmit={handleSignIn}>
        <FloatingLabel
          controlId="floatingInput"
          label="Email address"
          className="mb-3"
        >
          <Form.Control
            type="email"
            name="email"
            placeholder="name@example.com"
            required
          />
        </FloatingLabel>
        <FloatingLabel controlId="floatingPassword" label="Password">
          <Form.Control
            type="password"
            className="mb-3"
            name="password"
            placeholder="Password"
            required
          />
        </FloatingLabel>

        <h6 className="text-danger">{error}</h6>

        <Button variant="primary" type="submit">
          Log in
        </Button>
      </Form>
      <Card.Footer className="bg-white d-flex justify-content-between">
        <h6>
          Do not have Account? Please <Link to="/registration">Register</Link>
        </h6>
        <h6>
          <Link onClick={handleShow}>Forget password ?</Link>
        </h6>
      </Card.Footer>
      <ResetPassword show={show} onHide={handleClose} />
    </Card>
  );
};

export default Login;
