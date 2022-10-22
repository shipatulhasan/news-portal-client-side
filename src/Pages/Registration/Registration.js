import React, { useContext, useState } from "react";
import { Button, Card } from "react-bootstrap";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import {AuthContext} from '../../UseContext/AuthProvider'

const Registration = () => {
    const {createUser,updateUserProfile, userVerification} = useContext(AuthContext)
    const [error,setError] = useState('')
    const [accepted,setAccepted] = useState(false)

    const handleSubmit = (e)=>{

        e.preventDefault()

        const form = e.target
        const name = form.name.value
        const photo = form.photoUrl.value
        const email = form.email.value
        const password = form.password.value
       
        // console.log(password,email,name)

        createUser(email, password)
        .then(result=>{
            const user = result.user
            console.log(user)
            form.reset()
            handleUpdateProfile(name,photo)
            setError('')
            toast.success('Successfully registerd. Plese verify your email')
            handleUserVerification()
        })
        .catch(err => {
            console.error(err)
            setError(err.message)
        })

        
    }

    // terms and conditions check

    const handleTermsAnsContdition = (e)=>{
       setAccepted(e.target.checked) 
    }

    // user verificaion
    const handleUserVerification = ()=>{

      userVerification()
      .then(() => {})
      .catch(err=>console.error(err))
    }

    // update profile

    const handleUpdateProfile = (name, photo)=>{
      const profile = {
        displayName:name,
        photoURL:photo
    }
      updateUserProfile(profile)
        .then(() => {})
        .catch(err => {
            console.error(err)
            setError(err.message)
        })
    }

    
  return (

    <Card className="mx-lg-4">
      <Card.Header className="fs-3 text-white text-center bg-dark">
        Register Form
      </Card.Header>
      <Form className="p-4" onSubmit = {handleSubmit}>
        <FloatingLabel
          controlId="floatingInput"
          label="Your name"
          className="mb-3"
        >
          <Form.Control type="text" name="name" placeholder="jhon doe" />
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingInput"
          label="Photo URL"
          className="mb-3"
        >
          <Form.Control type="text" name="photoUrl" placeholder="Photo URL" />
        </FloatingLabel>
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
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check onClick={handleTermsAnsContdition} type="checkbox" label = {<>Accepeted <Link to='/terms'>Terms & Conditions</Link></>}/>
        </Form.Group>

        <h6 className="text-danger">{error}</h6>

        <Button variant="primary" type="submit" disabled={!accepted}>
          Submit
        </Button>
      </Form>
      <Card.Footer className="bg-white text-center">
        <h6>
          Already registered? <Link to="/login">Sign in</Link>
        </h6>
      </Card.Footer>
    </Card>

  );
};

export default Registration;
