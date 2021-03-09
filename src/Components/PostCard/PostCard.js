import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { Button, Menu, MenuItem } from "@material-ui/core";
import { useHistory } from "react-router";

const useStyles = makeStyles((theme) => ({
	root: {
		maxWidth: 605,
		margin: " 20px auto",
		borderRadius: "10px",
	},
	media: {
		height: 0,
		paddingTop: "53.25%", // 16:9
	},
	expand: {
		transform: "rotate(0deg)",
		marginLeft: "auto",
		transition: theme.transitions.create("transform", {
			duration: theme.transitions.duration.shortest,
		}),
	},
	expandOpen: {
		transform: "rotate(180deg)",
	},
	avatar: {
		backgroundColor: red[500],
	},
}));

export default function PostCard({ postData }) {
	const { id, image, publishDate, text, likes, link } = postData;
	const { email, picture, title, firstName, lastName } = postData.owner;
	const classes = useStyles();

	const [anchorEl, setAnchorEl] = React.useState(null);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const history = useHistory();
	const MyProfile = (id) => {
		const URL = `profile/${id}`;
		history.push(URL);
	};
	const MyPost = (id) => {
		const URL = `post/${id}`;
		history.push(URL);
	};

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
				action={
					<IconButton aria-label="settings">
						<div>
							<Button
								aria-controls="simple-menu"
								aria-haspopup="true"
								onClick={handleClick}
							>
								<MoreVertIcon></MoreVertIcon>
							</Button>
							<Menu
								id="simple-menu"
								anchorEl={anchorEl}
								keepMounted
								open={Boolean(anchorEl)}
								onClose={handleClose}
								onClick={handleClose}
							>
								<MenuItem
									onClick={() =>
										MyProfile(
											postData
												.owner
												.id
										)
									}
								>
									Profile
								</MenuItem>
								<MenuItem
									onClick={() =>
										MyPost(
											postData
												.owner
												.id
										)
									}
								>
									My Post
								</MenuItem>
							</Menu>
						</div>
					</IconButton>
				}
				title={`${title} ${firstName} ${lastName}`.toLocaleUpperCase()}
				subheader={publishDate}
			/>
			<CardMedia
				className={classes.media}
				image={image}
				title="Paella dish"
			/>
			<CardContent>
				<Typography
					variant="body2"
					color="textSecondary"
					component="p"
				>
					{text}
				</Typography>
			</CardContent>
			<CardActions disableSpacing>
				<IconButton aria-label="add to favorites">
					<FavoriteIcon />
				</IconButton>
				<IconButton aria-label="share">
					<ShareIcon />
				</IconButton>
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
