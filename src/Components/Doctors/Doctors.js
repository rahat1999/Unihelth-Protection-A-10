import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Doctor from '../Doctor/Doctor';

const Doctors = () => {
    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        fetch("./fakeData.json")
            .then(res => res.json())
            .then(data => setDoctors(data.doctors))
    }, [])
    return (
        <Container>
            <br />
            <br />
            <h2 className="mt-5 mb-5 text-center text-primary">Our Doctors</h2>
            <Row xs={1} md={1} lg={2} className="g-4 mb-5">
                {
                    doctors.map(doctor => <Doctor
                        key={doctor._id}
                        doctor={doctor}
                    ></Doctor>)
                }
            </Row>
        </Container>
    );
};

export default Doctors;