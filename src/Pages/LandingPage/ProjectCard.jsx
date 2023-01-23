import React from 'react'
import "./LandingPage.css"
const ProjectCard = (props) => {
    return (
        <>
            <div className="projectCard">
                <img src={props.img}></img>
                <h5>Zombie plant 2</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim eligendi quod eum aut voluptas.</p>
                <div className="projectCardValue">
                    <p>Total raise:</p>
                    <h5>100k</h5>
                </div>
                <div className="projectCardValue">
                    <p>Valuation:</p>
                    <h5>23M</h5>
                </div>
                <div className="projectCardValue">
                    <p>Base allo:</p>
                    <h5>$0</h5>
                </div>
                <button>Explore</button>
            </div>
        </>
    )
}

export default ProjectCard