import { Button } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router";

const UserCard = ({ profile }) => {
	const { id, email, picture, title, firstName, lastName } = profile;

	const history = useHistory();
	const MyProfile = (id) => {
		const URL = `profile/${id}`;
		history.push(URL);
	};
	const MyPost = (id) => {
		const URL = `post/${id}`;
		history.push(URL);
	};
	const profiledata = {
		border: "1px solid gray",
		borderRadius: "20px",
		padding: "20px",
		boxShadow: "10px 10px 10px black",
		margin: "15px 6px",
		textAlign: "center",
	};
	return (
		<div>
			<div style={profiledata}>
				<div className="image">
					<img src={picture} alt="" />
				</div>
				<div className="info">
					<h5>
						Name:{" "}
						{`${title} ${firstName} ${lastName}`}
					</h5>
					<h5>Email: {` ${email}`} </h5>
				</div>
				<Button
					variant="contained"
					color="primary"
					onClick={() => MyProfile(id)}
				>
					About me
				</Button>
				<Button
					variant="contained"
					color="secondary"
					onClick={() => MyPost(profile.id)}
				>
					My post
				</Button>
			</div>
		</div>
	);
};

export default UserCard;
