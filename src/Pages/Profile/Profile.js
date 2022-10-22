import React, { useContext, useRef, useState } from "react";
import { Button, Card, FloatingLabel, Form } from "react-bootstrap";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../../UseContext/AuthProvider";

const Profile = () => {

  const { user, updateUserProfile } = useContext(AuthContext)
  const [name,setName] = useState(user.displayName)
  const photoUrlRef = useRef(user.photoURL)
  


  const handleSubmit = (e) => {
    e.preventDefault();
    const photo = photoUrlRef.current.value
    const profile = {displayName:name,photoUrl:photo}
    handleUpdateUserProfile(profile)
  };

  const handleNameChange = (e)=>{
    setName(e.target.value)
  }

  const handleUpdateUserProfile = (profile)=>{
    updateUserProfile(profile)
    .then(()=>{ 
      toast.success('profile updated successfully')
    })
    .catch(err=>console.error(err))
  }


  return (
    <Card className="mx-lg-4">
      <Card.Header className="fs-3 text-white text-center bg-dark">
        Update your information
      </Card.Header>
      <Form className="p-4" onSubmit={handleSubmit}>
        <FloatingLabel
          controlId="floatingInput"
          label="Email address"
          className="mb-3"
        >
          <Form.Control
            type="email"
            name="email"
            defaultValue={user?.email}
            readOnly
          />
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingInput"
          label="Your name"
          className="mb-3"
          
        >
          <Form.Control
          onBlur={handleNameChange}
           type="text" 
           name="name" 
           defaultValue={user.displayName}
           placeholder="jhon doe" />
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingInput"
          label="Photo URL"
          className="mb-3"
        >
          <Form.Control ref={photoUrlRef} defaultValue={user?.photoURL} type="text" name="photoUrl" placeholder="Photo URL" />
        </FloatingLabel>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <Card.Footer className="bg-white text-center">
        <h6>
          Don't wanna update? <Link to="/">Back to Home</Link>
        </h6>
      </Card.Footer>
    </Card>
  );
};

export default Profile;
