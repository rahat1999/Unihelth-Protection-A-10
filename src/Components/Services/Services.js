import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Service from '../Service/Service'

const Services = () => {
    const [services, setServices] = useState([]);
    console.log(services)
    useEffect(() => {
        fetch("./fakeData.json")
            .then(res => res.json())
            .then(data => setServices(data?.services))
    }, [])
    return (
        <Container>
            <h1 id="services" className='text-center text-primary mt-5'>Our Services & Treatments</h1>
            <Row xs={1} md={2} lg={3} className="g-4 mt-3 mb-5">
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}></Service>

                    )
                }
            </Row>
        </Container>
    );
};

export default Services;