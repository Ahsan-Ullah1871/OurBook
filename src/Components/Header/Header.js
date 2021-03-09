import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
	return (
		<div className="headerPart d-flex justify-content-between align-items-center">
			<div className="logo ">
				<h3>OurBook</h3>
			</div>
			<div className="NavSection ">
				<Link to="/home">Home</Link>
				<Link to="/user">User</Link>
				<Link to="/profile">About</Link>
			</div>
		</div>
	);
};

export default Header;
