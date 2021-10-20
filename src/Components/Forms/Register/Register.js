import React, { useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './register.css'
import img from '../../../Images/Queue-amico.png'
import useAuth from "../../../Hooks/useAuth"

const Register = () => {
    const { user, error, registerWithEamilAndPass } = useAuth()
    const [regEmail, setRegEmail] = useState('')
    const [regPassword, setRegPassword] = useState('')
    const [errorMsg, setErrorMsg] = useState('')
    console.log(regEmail, regPassword)
    console.log(user.email)

    const registerEmail = (e) => {
        setRegEmail(e.target.value)
    }
    const registerPassword = (e) => {
        if (e.target.value.length < 6) {
            setErrorMsg("Password Should be atlist 6 charecters")
        } else {
            setErrorMsg('')
            setRegPassword(e.target.value)
        }

    }
    const newRegister = (e) => {
        e.preventDefault()
        registerWithEamilAndPass(regEmail, regPassword)

    }
    return (
        <div className="mt-5">
            <br />
            <Container>
                <Row xs={1} md={2}
                    style={{ boxShadow: "1px 1px 8px 3px gray" }}
                    className="g-1 p-2 rounded ">
                    <Col>
                        <form onSubmit={newRegister}>
                            <div className="">
                                <h1>Register</h1>
                                <p>Please fill in this form to create an account.</p>
                                <hr />

                                <label htmlFor="email"><b>Email</b></label>
                                <input type="text" onBlur={registerEmail} placeholder="Enter Email" name="email" id="email" required />

                                <label htmlFor="psw"><b>Password</b></label>
                                <input type="password" onBlur={registerPassword} placeholder="Enter Password" name="psw" id="psw" required />
                                <br />
                                <span className='text-danger'>{errorMsg}</span>
                                {
                                    user.email ? <span className="bg-success text-white p-1 rounded ms-2"> Register successfully done</span> : ""
                                }
                                <hr />
                                <p>Already have Account?<Link to="/login"> LogIN</Link></p>
                                <span className='text-danger'>{error}</span>
                                <button className='w-25  m-1 p-2 rounded' type="submit">Register</button>
                            </div>
                        </form>
                    </Col>
                    <Col>
                        <Card className="border-0 text-prinary">
                            <b>Email:{user?.email ? user.email : ""}</b>
                            <div className="imgcontainer">
                                <Card.Img variant="top" src={img} alt="Avatar" className="avatar" />
                            </div>
                            <Card.ImgOverlay>

                            </Card.ImgOverlay>
                        </Card>
                    </Col>
                </Row>


            </Container>


        </div >
    );
};

export default Register;