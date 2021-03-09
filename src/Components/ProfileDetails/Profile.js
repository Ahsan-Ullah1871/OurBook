import { Button } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackward } from "@fortawesome/free-solid-svg-icons";
import "./Profile.css";

const BASE_URL = "https://dummyapi.io/data/api";
const APP_ID = "6046ce215f114b77688fbdca";
const Profile = () => {
	const { id } = useParams();

	const [myProfile, setMyProfile] = useState({});
	useEffect(() => {
		fetch(`${BASE_URL}/user/${id}`, {
			headers: { "app-id": APP_ID },
		})
			.then((response) => response.json())
			.then((data) => setMyProfile(data))
			.catch(console.error);
	}, []);
	const {
		email,
		picture,
		title,
		firstName,
		lastName,
		gender,
		phone,
		location,
		dateOfBirth,
	} = myProfile;

	// const { city, country } = myProfile && myProfile.location;

	return (
		<div>
			<Link to="/home" style={{ textDecoration: "none" }}>
				<Button variant="contained" color="secondary">
					<FontAwesomeIcon icon={faBackward} />
					Back
				</Button>
			</Link>
			<div className="detailsSection d-flex align-items-center">
				<div className="part1">
					<img src={picture} alt="" />
					<h3>
						Name:{" "}
						{`${title} ${firstName} ${lastName}`}
					</h3>
					<h4>Gender: {gender}</h4>
					<h4>Birth Day: {dateOfBirth}</h4>
				</div>
				<div className="part2">
					{/* <h4>City: {location.city}</h4>
					<h4>Country: {location.country}</h4> */}
					<h4>Phone: {phone}</h4>
					<h4>Email: {email}</h4>
				</div>
			</div>
		</div>
	);
};

export default Profile;
