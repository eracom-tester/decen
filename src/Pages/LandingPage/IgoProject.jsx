import React from 'react'
import { SiEthereum } from "react-icons/si"
import { FaFacebookF } from "react-icons/fa"
import { FaTwitter } from "react-icons/fa"
import { FaLinkedinIn } from "react-icons/fa"
const IgoProject = (props) => {
    var countDownDate = new Date("Jan 20, 2023 15:37:25").getTime();

    // Update the count down every 1 second
    var x = setInterval(function () {

        // Get today's date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Output the result in an element with id="demo"
        document.getElementById("demo1").innerHTML = days + "d " + hours + "h "
            + minutes + "m " + seconds + "s ";

        // If the count down is over, write some text 
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("demo1").innerHTML = "EXPIRED";
        }
    }, 1000);
    return (
        <>
            <div className="igoData">
                <img src={props.img} />
                <div className="raise">
                    <p>Total Raise</p>
                    <h5>$5649</h5>
                </div>
                <div className="raise">
                    <p>Price</p>
                    <h5>0.05USDT</h5>
                </div>
                <div className="raise">
                    <p>Chain</p>
                    <i><SiEthereum /></i>
                </div>
                <div className="raise">
                    <p>Next claim in</p>
                    <h5 id='demo1'></h5>
                </div>
                <div className="raiseSocialIcons">
                    <i><FaFacebookF /></i>
                    <i><FaTwitter /></i>
                    <i><FaLinkedinIn /></i>
                </div>
            </div>
        </>
    )
}

export default IgoProject