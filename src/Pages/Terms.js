import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div>
            <h1>This is terms page</h1>
            <Button className="btn btn-dark"><Link to="/registration" className=' text-white'>Click Back</Link></Button>
        </div>
    );
};

export default Terms;