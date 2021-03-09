import React from "react";
import "./Footer.css";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
const Footer = () => {
	return (
		<div>
			<div className="bodyfooter  ">
				<FacebookIcon></FacebookIcon>
				<TwitterIcon></TwitterIcon>
				<InstagramIcon></InstagramIcon>
				<h5>Copyright OurBook.All rights reserved.</h5>
				<h5>Powered by OurBook</h5>
			</div>
		</div>
	);
};

export default Footer;
