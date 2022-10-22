import React, { useContext, useState } from "react";
import { Button, FloatingLabel, Form } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import toast from "react-hot-toast";
import { AuthContext } from "../../UseContext/AuthProvider";

const ResetPassword = (props) => {

    const {resetPassword} = useContext(AuthContext)
    const [userEmail, setUserEmail] = useState('')
    const [error, setError] = useState('')

    const handleUserEmail = (e)=>{
        setUserEmail(e.target.value)
    }

    const handleResetPass = ()=>{


        resetPassword(userEmail)

        .then(() => { 
            props.onHide()
            toast.success('Please Check Your mail for reset link')
            setError('')
        })
        .catch(err=>{
            console.error(err)
            setError(err.message)
        })
    }

  return (
    <Modal {...props} >
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <FloatingLabel
          controlId="floatingInput"
          label="Email address"
          className="mb-3"
        >
          <Form.Control
            type="email"
            name="email"
            placeholder="name@example.com"
            onBlur={handleUserEmail}
            required
          />
        </FloatingLabel>

        <h6 className="text-danger">{error}</h6>

      </Modal.Body>
      <Modal.Footer>

        <Button variant="danger" onClick={handleResetPass}>
          Reset
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ResetPassword;
