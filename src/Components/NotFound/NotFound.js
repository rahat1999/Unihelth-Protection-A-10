import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import not from "../../Images/404.png"
const NotFound = () => {
    return (
        <div className="text-center mt-5">
            <div>
                <img style={{ width: "100%", height: "80vh" }} src={not} alt="404" />
            </div>
            <Link to="/home">
                <Button variant="danger">Back To Home</Button>
            </Link>
        </div >
    );
};

export default NotFound;