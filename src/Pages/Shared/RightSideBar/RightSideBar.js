import React, {useContext} from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaFacebook, FaGithub, FaGoogle, FaLinkedin, FaTwitch, FaTwitter } from "react-icons/fa";
import ListGroup from 'react-bootstrap/ListGroup';
import MiniSlider from './MiniSlider/MiniSlider';
import {AuthContext} from '../../../UseContext/AuthProvider'

const RightSideBar = () => {

    const {signInWithGoogle} = useContext(AuthContext)

    const handleGoogleSingin = ()=>{
        signInWithGoogle()
    }


    return (
        <div className='mt-4 mt-lg-0'>
         <ButtonGroup vertical>
            <Button variant="outline-primary" className='mb-3 rounded' onClick={handleGoogleSingin}><FaGoogle/> Signin with google</Button>
            <Button variant="outline-dark" className='rounded mb-4'><FaGithub/> Signin with github</Button>
        </ButtonGroup>

        <div>
            <h5>Floow us on</h5> 
            <ListGroup className='mt-2 mb-4 d-grid gap-3'>
                <ListGroup.Item className='rounded shadow border-0'><FaFacebook/> Facebook</ListGroup.Item>
                <ListGroup.Item className='rounded shadow border-0'><FaTwitter/> Twitter</ListGroup.Item>
                <ListGroup.Item className='rounded shadow border-0'><FaTwitch/> Twitch</ListGroup.Item>
                <ListGroup.Item className='rounded shadow border-0'><FaLinkedin/> Linkedin</ListGroup.Item>
                
            </ListGroup>
            <div>
                <MiniSlider/>
            </div>
        </div>
    </div>
    );
};

export default RightSideBar;