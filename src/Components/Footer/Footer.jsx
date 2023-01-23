import React from 'react'
import "./Footer.css"
import footerImg from "./../../Images/bg4.png"
import { Row, Col, Container } from "react-bootstrap"
import { FaFacebookF } from "react-icons/fa"
import { FaTwitter } from "react-icons/fa"
import { FaLinkedinIn } from "react-icons/fa"
import { FaGooglePlusG } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
import { BsFillTelephoneFill } from "react-icons/bs"
import { IoLocationSharp } from "react-icons/io5"
import { RiSendPlaneFill } from "react-icons/ri"
const Footer = () => {
    return (
        <React.Fragment>
            <Container>
                <div className="footer">
                    <Row className="footerRow">
                        <Col md="4">
                            <div className="fc1">
                                <img src={footerImg}></img>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem rerum doloribus nulla voluptas magni!</p>
                                <h3>Follow us</h3>
                                <div className="footerSocials">
                                    <i id="i1"><FaFacebookF /></i>
                                    <i id="i2"><FaTwitter /></i>
                                    <i id="i4"><FaGooglePlusG /></i>
                                    <i id="i3"><FaLinkedinIn /></i>
                                    <i id="i5"><FaInstagram /></i>
                                </div>
                            </div>
                        </Col>
                        <Col md="8">
                            <Row>
                                <Col md="6">
                                    <div className="footeraddress">
                                        <i><IoLocationSharp /></i>
                                        <p>2863 Lorem ipsum dolor,<br /> sit Lorem ipsum.</p>
                                    </div>
                                </Col>
                                <Col md="6">
                                    <div className="footeraddress">
                                        <i><BsFillTelephoneFill /></i>
                                        <p>+91 98565-96325 <br></br>Give us a call</p>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col md="6">
                                    <div className="fc2">

                                        <div className="usefulLink">
                                            <h1>Useful Links</h1>
                                            <Row>
                                                <Col xs="6">
                                                    <p>Home</p>
                                                    <p>About</p>
                                                    <p>Services</p>
                                                </Col>
                                                <Col xs="6">
                                                    <p>Team</p>
                                                    <p>Project</p>
                                                    <p>IGO</p>
                                                </Col>
                                            </Row>
                                        </div>
                                    </div>
                                </Col>
                                <Col md="6">
                                    <div className="fc3">
                                        <div className="subscribe">
                                            <h1>Subscribe</h1>
                                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe consectetur non autem at? Unde, quam!</p>
                                            <div className="email">
                                                <input type="text" placeholder='Email Address' />
                                                <i><RiSendPlaneFill /></i>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Col>

                    </Row>
                </div>
            </Container>
        </React.Fragment>
    )
}

export default Footer













































// import React from 'react'
// import "./Footer.css"
// import { Container, Row, Col } from "react-bootstrap";
// import { FaFacebookF } from "react-icons/fa"
// import { FaTwitter } from "react-icons/fa"
// import { FaLinkedinIn } from "react-icons/fa"
// const Footer = () => {
//     return (
//         <React.Fragment>
//             <div className="footer">
//                 <Container>
//                     <Row>
//                         <Col md='3' className="fc1">
//                             <h1>CompanyName</h1>
//                             <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, temporibus.</p>
//                         </Col>
//                         <Col md="3" className="fc2">
//                             <h2>Contact Us</h2>
//                             <p>Address</p>
//                             <h5>1953 Lorem ipsum dolor sit amet.</h5>
//                             <p>Phone</p>
//                             <h5>+91 47646-94646</h5>
//                             <p>Email</p>
//                             <h5>companyName@gmail.com</h5>
//                         </Col>
//                         <Col md="3" className="fc3">
//                             <h2>Support</h2>
//                             <p>Team of use</p>
//                             <p>Privacy</p>
//                             <p>Help center</p>
//                             <p>Contact</p>
//                         </Col>
//                         <Col md="3" className="fc4">
//                             <h2>Quick Links</h2>
//                             <p>Home</p>
//                             <p>About</p>
//                             <p>Team</p>
//                             <p>Roadmap</p>
//                         </Col>
//                     </Row>
//                     <hr />
//                     <div className="copyright">
//                         <p>Copyright &#169; 2023 designed by Eracom Technologies</p>
//                         <div className="copySocials">
//                             <i><FaFacebookF /></i>
//                             <i><FaTwitter /></i>
//                             <i><FaLinkedinIn /></i>
//                         </div>
//                     </div>
//                 </Container>
//             </div>
//         </React.Fragment>
//     )
// }

// export default Footer