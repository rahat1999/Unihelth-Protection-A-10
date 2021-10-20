import React, { useEffect, useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const ServiceDetails = () => {
    const { idDetails } = useParams()
    const [details, setDetails] = useState([])
    // console.log(details)

    useEffect(() => {
        fetch("/fakeData.json")
            .then(res => res.json())
            .then(data => setDetails(data.services))
    }, [])
    const extctDetails = details.filter(dt => dt?.id == idDetails)
    // console.log(extctDetails)
    return (

        <Container>
            <div className="m-5 mx-auto">
                <br /><br />
                <br />
                <div
                    style={{ boxShadow: "1px 1px 6px 2px gray", borderRadius: "20px" }}
                    className='p-3'>
                    <div className="text-center">
                        <img className="w-50 mx-auto mb-2 shadow-sm rounded" src={extctDetails[0]?.img} alt="images" />
                    </div>
                    <div>
                        <h3>{extctDetails[0]?.serviceName}</h3>
                        <li>{extctDetails[0]?.details1}</li>
                        <li>{extctDetails[0]?.details2}</li>
                        <li>{extctDetails[0]?.details2}</li>
                        <div className="text-center my-2">
                            <Link to="/services">
                                <Button className='text-center w-75' variant="warning">
                                    Go Back <i className="fas fa-arrow-circle-left">
                                    </i> </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default ServiceDetails;