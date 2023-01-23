import React from 'react'
import "./Login.css"
import { Row, Col, Container } from "react-bootstrap";
import { Link } from 'react-router-dom';
const Login = () => {
    return (
        <>
            <div className="div">
                <Container className="connectWalletContainer">
                    {/* <Link to="/"><img src={Logo} alt="logo.png" /></Link> */}
                    <Row className="connectWalletRow align-items-center">
                        <Col md='6' className="connectRegisterLeft connectLoginLeft">
                            {/* <span style={{ color: "green" }}>{msg}</span> */}
                            <h4>To view your account <br></br>specify ID or BUSD wallet</h4>
                            <input type="text" placeholder="Enter Sponsor ID." />
                            <div className="registerButtons">
                                <Link className="loginBtn">Viewing</Link>
                            </div>
                            <p className='m-0'>Join if You are not yet with us</p>
                            <Link to="/register" id="login">Register</Link>
                        </Col>
                        <Col md='6' className="connectRegisterRight connectLoginRight">
                            <h3>Login to your personal account</h3>
                            <p>To access all the functions of your personal account use Auto Login:</p>
                            <Link className="loginBtn">Automatic Login</Link>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default Login