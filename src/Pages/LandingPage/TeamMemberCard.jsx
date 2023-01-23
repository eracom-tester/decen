import React from 'react'
import { FaFacebookF } from "react-icons/fa"
import { FaTwitter } from "react-icons/fa"
import { FaLinkedinIn } from "react-icons/fa"
import User from "./../../Images/user.jpg"
const TeamMemberCard = (props) => {
    return (
        <>
            <div className="teamMember" data-aos="fade-up">
                <img className='teamImg' src={props.img} alt="logo.png" />
                <h3>Darrell Steward </h3>
                <p>Senior Designer</p>
                <div className="socialIcons">
                    <i><FaFacebookF /></i>
                    <i><FaTwitter /></i>
                    <i><FaLinkedinIn /></i>
                </div>
            </div>
        </>
    )
}

export default TeamMemberCard