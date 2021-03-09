import React, { useEffect, useState } from "react";
import PostCard from "../PostCard/PostCard";

const BASE_URL = "https://dummyapi.io/data/api";
const APP_ID = "6046ce215f114b77688fbdca";
const Home = () => {
	const [loading, setLoading] = useState(false);
	const [postData, setPostData] = useState([]);

	useEffect(() => {
		setLoading(true);
		fetch(`${BASE_URL}/Post`, {
			headers: { "app-id": APP_ID },
		})
			.then((response) => response.json())
			.then(({ data }) => setPostData(data))
			.catch(console.error)
			.finally(() => setLoading(false));
	}, []);

	return (
		<div>
			{postData.map((postData) => (
				<PostCard postData={postData}></PostCard>
			))}
		</div>
	);
};

export default Home;
