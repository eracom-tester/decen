import React, { useEffect, useState } from 'react'
import "./LandingPage.css"
import HomeBg from "./../../Images/homebg.jpg"
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Two from "./../../Images/headRight.png"
import ProjectCard from "./ProjectCard";
import KYC from "./../../Images/kyc.png"
import Wallet from "./../../Images/wallet.png"
import Stake from "./../../Images/stake.png"
import TeamMemberCard from './TeamMemberCard';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import IgoProject from './IgoProject';
import User from "./../../Images/user.jpg"
import User1 from "./../../Images/user1.jpg"
import User2 from "./../../Images/user2.jpg"
import User3 from "./../../Images/user3.jpg"
import User4 from "./../../Images/user4.jpg"
import User5 from "./../../Images/user5.jpg"
import User6 from "./../../Images/user6.jpg"
import User7 from "./../../Images/user7.jpg"
import pl1 from "./../../Images/pl1.png"
import pl2 from "./../../Images/pl2.png"
import pl3 from "./../../Images/pl3.png"
import pl4 from "./../../Images/pl4.png"
import pl5 from "./../../Images/pl5.png"
import pl6 from "./../../Images/pl6.png"
import pl7 from "./../../Images/pl7.png"
import pl8 from "./../../Images/pl8.png"
import pl9 from "./../../Images/pl9.png"
import pl10 from "./../../Images/pl10.png"
import pl11 from "./../../Images/pl11.png"
import pl12 from "./../../Images/pl12.png"
import pl13 from "./../../Images/pl13.png"
import pl14 from "./../../Images/pl14.png"
import pl15 from "./../../Images/pl15.png"
import pl16 from "./../../Images/pl16.png"
import bg3 from "./../../Images/bg3.png"
import bg4 from "./../../Images/bg4.png"
import Footer from '../../Components/Footer/Footer';
const LandingPage = () => {
    const [width, setWidth] = useState(window.innerWidth);
    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
        }
        window.addEventListener("resize", handleResize, false);
    }, [window.innerWidth])

    return (
        <React.Fragment>
            <section className="header">
                <img src={HomeBg} alt="" className="bgImage" />
                <Container className="headerContainer">
                    <div className="Headertopnav">
                        <img className='themeLogo' src={pl4} alt="" />
                        <div className="navLinks">
                            <Link>Home</Link>
                            <Link>About</Link>
                            <Link>Roadmap</Link>
                            <Link>Contact</Link>
                        </div>
                        <Link className="btnPrimary">Connect</Link>
                    </div>
                    <section className="headerContent">
                        <Row className="align-items-center headerRow" style={{ minHeight: "85vh" }}>
                            <Col md="6" className='headerLeft'>
                                <h1>Enter the gateway of Blockchain Gaming</h1>
                                <p>visually and spatially connecting games in a seamless metaverse experience</p>
                                <Link to="/register" className="btnSecondary">Register</Link>
                            </Col>
                            <Col md="6" className='headerRight'>
                                <img src={Two} alt="logo.png" />
                            </Col>
                        </Row>
                    </section>
                </Container>
            </section >
            <section className="projects">
                <Container>
                    <h1 className='secHeading'>Projects That Promise A Lot Of Potential</h1>
                    <Row className="ProjectCard">
                        <Col md="3">
                            <ProjectCard
                                img="https://img.poki.com/cdn-cgi/image/quality=78,width=600,height=600,fit=cover,f=auto/f4b3ac7fe25cad9bc028b33f7a407f28.png"
                            />
                        </Col>
                        <Col md="3">
                            <ProjectCard
                                img="https://assets.reedpopcdn.com/trshare.jpg/BROK/resize/1200x1200%3E/format/jpg/quality/70/trshare.jpg"
                            />
                        </Col>
                        <Col md="3">
                            <ProjectCard
                                img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS78GWo_T7r4qWaZEkzUnmXvpJN7FdGOxhlsOQ3kV-UgzNY1vGrN5NIErArkV4WrnsKEcw&usqp=CAU"
                            />
                        </Col>
                        <Col md="3">
                            <ProjectCard
                                img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6MoQiz-nasnUBrF8RIyRgws6lBBwO3MmXsQ&usqp=CAU"
                            />
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="igo">
                <Container>
                    <h1 className='secHeading'>Easy to Join IGO With Three Steps</h1>
                    <Row className="igoRow">
                        <Col md="4">
                            <div className="igoSteps">
                                <img src={KYC} alt="logo.png"></img>
                                <h3>Submit KYC</h3>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. In cum voluptate esse nostrum deserunt ipsa praesentium?</p>
                                <h1>01</h1>
                            </div>
                        </Col>
                        <Col md="4">
                            <div className="igoSteps">
                                <img src={Wallet} alt="logo.png"></img>
                                <h3>Verify Wallet</h3>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. In cum voluptate esse nostrum deserunt ipsa praesentium?</p>
                                <h1>02</h1>
                            </div>
                        </Col>
                        <Col md="4">
                            <div className="igoSteps">
                                <img src={Stake} alt="logo.png"></img>
                                <h3>Start Staking</h3>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. In cum voluptate esse nostrum deserunt ipsa praesentium?</p>
                                <h1>03</h1>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="igoProjects">
                <Container>
                    <h1 className="secHeading" style={{ marginBottom: "50px" }}>IGO Projects Have Been Excellently Successful</h1>
                    <IgoProject
                        img="https://img.poki.com/cdn-cgi/image/quality=78,width=600,height=600,fit=cover,f=auto/f4b3ac7fe25cad9bc028b33f7a407f28.png" />
                    <IgoProject
                        img="https://assets.reedpopcdn.com/trshare.jpg/BROK/resize/1200x1200%3E/format/jpg/quality/70/trshare.jpg" />
                    <IgoProject
                        img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS78GWo_T7r4qWaZEkzUnmXvpJN7FdGOxhlsOQ3kV-UgzNY1vGrN5NIErArkV4WrnsKEcw&usqp=CAU" />
                    <IgoProject
                        img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6MoQiz-nasnUBrF8RIyRgws6lBBwO3MmXsQ&usqp=CAU"
                    />
                    <IgoProject
                        img="https://img.poki.com/cdn-cgi/image/quality=78,width=600,height=600,fit=cover,f=auto/f4b3ac7fe25cad9bc028b33f7a407f28.png" />
                    <IgoProject
                        img="https://assets.reedpopcdn.com/trshare.jpg/BROK/resize/1200x1200%3E/format/jpg/quality/70/trshare.jpg" />
                </Container>

            </section>
            <section className="team">
                <Container>
                    <h1 className="secHeading" style={{ paddingTop: '50px' }}>Meet The Team</h1>
                    <p className="secText">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias incidunt, molestiae pariatur dicta qui repudiandae sequi necessitatibus assumenda expedita quos odit explicabo. Optio consequuntur tenetur, aspernatur voluptas perferendis totam mollitia!</p>
                    <OwlCarousel items={(width > 767 && width <= 1000) ? 3 : (width > 900) ? 4 : 1}
                        className="owl-theme"
                        margin={8}
                        autoplay={true}
                        autoplayTimeout={2500}
                        autoplayHoverPause={true} >

                        <div style={{ padding: "10px 30px" }}>
                            <TeamMemberCard
                                img={User}
                            />
                        </div>
                        <div style={{ padding: "10px 30px" }}>
                            <TeamMemberCard
                                img={User1} />
                        </div>
                        <div style={{ padding: "10px 30px" }}>
                            <TeamMemberCard
                                img={User2}
                            />
                        </div>
                        <div style={{ padding: "10px 30px" }}>
                            <TeamMemberCard
                                img={User3}
                            />
                        </div>
                        <div style={{ padding: "10px 30px" }}>
                            <TeamMemberCard
                                img={User4}
                            />
                        </div>
                        <div style={{ padding: "10px 30px" }}>
                            <TeamMemberCard
                                img={User5}
                            />
                        </div>
                        <div style={{ padding: "10px 30px" }}>
                            <TeamMemberCard
                                img={User6}
                            />
                        </div>
                        <div style={{ padding: "10px 30px" }}>
                            <TeamMemberCard
                                img={User7}
                            />
                        </div>
                    </OwlCarousel>
                </Container>
            </section>
            <section className="partners">
                <Container>
                    <h1 className="secHeading">Our Partners</h1>
                    {/* <p className="subText"></p> */}
                    <Row>
                        <Col md="2" className="pl">
                            <img src={pl1} alt="logo.png" />
                        </Col>
                        <Col md="2" className="pl">
                            <img src={pl2} alt="logo.png" />
                        </Col>
                        <Col md="2" className="pl">
                            <img src={pl3} alt="logo.png" />
                        </Col>
                        <Col md="2" className="pl">
                            <img src={pl4} alt="logo.png" />
                        </Col>
                        <Col md="2" className="pl">
                            <img src={pl5} alt="logo.png" />
                        </Col>
                        <Col md="2" className="pl">
                            <img src={pl6} alt="logo.png" />
                        </Col>
                    </Row>
                    <Row>
                        <Col md="2" className="pl">
                            <img src={pl7} alt="logo.png" />
                        </Col>
                        <Col md="2" className="pl">
                            <img src={pl8} alt="logo.png" />
                        </Col>
                        <Col md="2" className="pl">
                            <img src={pl9} alt="logo.png" />
                        </Col>
                        <Col md="2" className="pl">
                            <img src={pl10} alt="logo.png" />
                        </Col>
                        <Col md="2" className="pl">
                            <img src={pl11} alt="logo.png" />
                        </Col>
                        <Col md="2" className="pl">
                            <img src={pl12} alt="logo.png" />
                        </Col>
                    </Row>
                    <Row>
                        <Col md="2" className="pl">

                        </Col>
                        <Col md="2" className="pl">
                            <img src={pl13} alt="logo.png" />
                        </Col>
                        <Col md="2" className="pl">
                            <img src={pl14} alt="logo.png" />
                        </Col>
                        <Col md="2" className="pl">
                            <img src={pl15} alt="logo.png" />
                        </Col>
                        <Col md="2" className="pl">
                            <img src={pl16} alt="logo.png" />
                        </Col>
                        <Col md="2" className="pl">

                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="launch">
                <Container className="launchContainer">
                    <Row className="launchRow">
                        <Col md="6" className="launchDiv">
                            <h1>Launch On WebsiteName</h1>
                            <p>Full support in project incubation</p>
                            <button className="btnSecondary">Apply</button>
                        </Col>
                        <Col md="6" className="text-center">
                            <img src={bg4} alt="" />
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="footerSec">
                <Footer />
            </section>
        </React.Fragment >
    )
}

export default LandingPage