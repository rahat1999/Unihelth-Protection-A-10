import React, { useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import useAuth from '../../../Hooks/useAuth';
import { Link } from 'react-router-dom';
import image from "../../../Images/login-3d.png"
import './login.css'

const Login = () => {
    const { error, user, logInWithGoogle, processLogin } = useAuth()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errorMsg, setErrorMsg] = useState("")

    // console.log(password, email)
    // console.log(processLogin)

    const handaleUserEmail = (e) => {
        setEmail(e.target.value)
    }
    const handaleUserPassword = (e) => {
        if (e.target.value.length < 6) {
            setErrorMsg("Password Should be atlist 6 charecters")
        }
        else {
            setErrorMsg('')
            setPassword(e.target.value)
        }
    }

    const handlelogin = (e) => {
        e.preventDefault()
        // come from  Firebase viya to useAuth
        processLogin(email, password)
    }

    return (
        <div className='login_container'>
            <Container>
                <div className="my-5">

                    <br />
                    <Row xs={1} md={2}
                        style={{ boxShadow: "1px 1px 8px 3px gray" }}
                        className="g-1 p-2 rounded ">
                        <Col>
                            <h2 className=" text-center text-primary">Login Form</h2>
                            <form onSubmit={handlelogin} method="post">
                                <div className="container">
                                    <label htmlFor="uname"><b>User Email</b></label>
                                    <input type="text" onBlur={handaleUserEmail} placeholder="Enter Username" name="uname" required />

                                    <label htmlFor="psw"><b>Password</b></label>
                                    <input onBlur={handaleUserPassword} type="password" placeholder="Enter Password" name="psw" required />
                                    <span className="text-danger">{errorMsg}</span>
                                    <div className="text-center">
                                        <span>{error}</span>
                                        <br />
                                        <button className='w-25 me-1 mb-1 p-2 rounded' type="submit">Login</button>
                                        <br />
                                        {
                                            user?.email ? <b className="text-white bg-success rounded px-3">Loggin Successfully</b> : <Link to='/register'>If You New then Register Please.Click Me?</Link>
                                        }
                                    </div>
                                </div>
                            </form>
                            <p className="text-center">------------oR----------</p>
                            <div className="container text-center" style={{ backgroundColor: "#f1f1f1" }}>
                                <button
                                    onClick={logInWithGoogle}
                                    className="cancelbtn bg-warning">
                                    <i className="fab fa-google"></i> LogIn With Google </button>
                                <span className="psw">Forgot <a href="#!">password?</a></span>
                            </div>
                        </Col>
                        <Col>
                            <Card className="border-0 text-prinary">
                                <div className="imgcontainer">
                                    <Card.Img variant="top" src={image} alt="Avatar" className="avatar" />
                                </div>
                                <Card.ImgOverlay>
                                    <Card.Title>User Email:
                                        {user.email && user.email}
                                    </Card.Title>

                                </Card.ImgOverlay>
                            </Card>
                        </Col>
                    </Row>

                </div>
            </Container>
        </div>
    );
};

export default Login;