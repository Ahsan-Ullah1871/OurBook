import React, { useEffect, useState } from "react";
import UserCard from "./UserCard";

const BASE_URL = "https://dummyapi.io/data/api";
const APP_ID = "6046ce215f114b77688fbdca";
const User = () => {
	const [profile, setProfile] = useState([]);

	useEffect(() => {
		fetch(`${BASE_URL}/user`, {
			headers: { "app-id": APP_ID },
		})
			.then((response) => response.json())
			.then(({ data }) => setProfile(data))
			.catch(console.error);
	}, []);
	return (
		<div className="d-flex flex-wrap">
			{profile.map((profile) => (
				<UserCard profile={profile}></UserCard>
			))}
		</div>
	);
};

export default User;
