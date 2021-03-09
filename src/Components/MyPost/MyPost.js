import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import PostCard from "../PostCard/PostCard";
import MyPostCard from "./MyPostCard";

const BASE_URL = "https://dummyapi.io/data/api";
const APP_ID = "6046ce215f114b77688fbdca";

const MyPost = () => {
	const { id } = useParams();
	const [myPost, setMyPost] = useState([]);

	useEffect(() => {
		fetch(`${BASE_URL}/user/${id}/post?limit=10`, {
			headers: { "app-id": APP_ID },
		})
			.then((response) => response.json())
			.then(({ data }) => setMyPost(data))
			.catch(console.error);
	}, []);

	const cardStyle = {
		display: "flex",
		flexWrap: "wrap",
	};
	return (
		<div style={cardStyle}>
			{myPost.map((post) => (
				<MyPostCard post={post}></MyPostCard>
			))}
		</div>
	);
};

export default MyPost;
