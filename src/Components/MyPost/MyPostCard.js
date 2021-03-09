import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Avatar, CardHeader } from "@material-ui/core";

const useStyles = makeStyles({
	root: {
		maxWidth: 345,
		margin: "10px 20px",
	},
	media: {
		height: 140,
	},
});

export default function MyPostCard({ post }) {
	const classes = useStyles();
	const { id, image, publishDate, text, likes, link } = post;
	const { email, picture, title, firstName, lastName } = post.owner;

	return (
		<Card className={classes.root}>
			<CardHeader
				avatar={
					<Avatar
						aria-label="recipe"
						className={classes.avatar}
					>
						<img src={picture} alt="" />
					</Avatar>
				}
				title={`${title} ${firstName} ${lastName}`.toLocaleUpperCase()}
				subheader={publishDate}
			/>
			<CardActionArea>
				<CardMedia
					className={classes.media}
					image={image}
					title="Contemplative Reptile"
				/>
				<CardContent>
					<Typography
						gutterBottom
						variant="h5"
						component="h2"
					>
						Lizard
					</Typography>
					<Typography
						variant="body2"
						color="textSecondary"
						component="p"
					>
						Lizards are a widespread group of
						squamate reptiles, with over 6,000
						species, ranging across all continents
						except Antarctica
					</Typography>
				</CardContent>
			</CardActionArea>
			<CardActions disableSpacing>
				<Button size="small" color="primary">
					Share
				</Button>
				<Button
					variant="contained"
					color="primary"
					target="_blank"
					href={link}
				>
					Details
				</Button>
			</CardActions>
		</Card>
	);
}
