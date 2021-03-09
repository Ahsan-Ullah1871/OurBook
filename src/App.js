import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import HomeIcon from "@material-ui/icons/Home";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import InfoIcon from "@material-ui/icons/Info";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import User from "./Components/User/User";
import Profile from "./Components/ProfileDetails/Profile";
import MyPost from "./Components/MyPost/MyPost";
import About from "./Components/About/About";
import Notfind from "./Components/NotFind/Notfind";
import Footer from "./Components/Footer/Footer";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
	},
	appBar: {
		zIndex: theme.zIndex.drawer + 1,
		transition: theme.transitions.create(["width", "margin"], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
	},
	appBarShift: {
		marginLeft: drawerWidth,
		width: `calc(100% - ${drawerWidth}px)`,
		transition: theme.transitions.create(["width", "margin"], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen,
		}),
	},
	menuButton: {
		marginRight: 36,
	},
	hide: {
		display: "none",
	},
	drawer: {
		width: drawerWidth,
		flexShrink: 0,
		whiteSpace: "nowrap",
	},
	drawerOpen: {
		width: drawerWidth,
		transition: theme.transitions.create("width", {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen,
		}),
	},
	drawerClose: {
		transition: theme.transitions.create("width", {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
		overflowX: "hidden",
		width: theme.spacing(7) + 1,
		[theme.breakpoints.up("sm")]: {
			width: theme.spacing(9) + 1,
		},
	},
	toolbar: {
		display: "flex",
		alignItems: "center",
		justifyContent: "flex-end",
		padding: theme.spacing(0, 1),
		// necessary for content to be below app bar
		...theme.mixins.toolbar,
	},
	content: {
		flexGrow: 1,
		padding: theme.spacing(3),
	},
}));

export default function MiniDrawer() {
	const classes = useStyles();
	const theme = useTheme();
	const [open, setOpen] = React.useState(false);

	const handleDrawerOpen = () => {
		setOpen(true);
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};

	return (
		<div className={classes.root}>
			<Router>
				<CssBaseline />
				<AppBar
					position="fixed"
					className={clsx(classes.appBar, {
						[classes.appBarShift]: open,
					})}
				>
					<Toolbar>
						<IconButton
							color="inherit"
							aria-label="open drawer"
							onClick={handleDrawerOpen}
							edge="start"
							className={clsx(
								classes.menuButton,
								{
									[classes.hide]: open,
								}
							)}
						>
							<MenuIcon />
						</IconButton>

						<Header className="ml-5"></Header>
					</Toolbar>
				</AppBar>
				<Drawer
					variant="permanent"
					className={clsx(classes.drawer, {
						[classes.drawerOpen]: open,
						[classes.drawerClose]: !open,
					})}
					classes={{
						paper: clsx({
							[classes.drawerOpen]: open,
							[classes.drawerClose]: !open,
						}),
					}}
				>
					<div className={classes.toolbar}>
						<IconButton
							onClick={handleDrawerClose}
						>
							{theme.direction === "rtl" ? (
								<ChevronRightIcon />
							) : (
								<ChevronLeftIcon />
							)}
						</IconButton>
					</div>
					<Divider />
					<List>
						{["Home", "User"].map(
							(text, index) => (
								<ListItem
									button
									key={text}
								>
									<ListItemIcon>
										{index %
											2 ===
										0 ? (
											<Link to="/home">
												<HomeIcon />
											</Link>
										) : (
											<Link to="/user">
												<AssignmentIndIcon />
											</Link>
										)}
									</ListItemIcon>
									<ListItemText
										primary={
											text
										}
									/>
								</ListItem>
							)
						)}
					</List>
					<List>
						{["About"].map((text) => (
							<ListItem button key={text}>
								<ListItemIcon>
									<Link to="/about">
										<InfoIcon></InfoIcon>
									</Link>
								</ListItemIcon>
								<ListItemText
									primary={text}
								/>
							</ListItem>
						))}
					</List>
					<Divider />
				</Drawer>
				<main className={classes.content}>
					<div className={classes.toolbar} />

					<Switch>
						<Route exact path="/">
							<Home></Home>
						</Route>
						<Route path="/home">
							<Home></Home>
						</Route>
						<Route path="/user">
							<User></User>
						</Route>
						<Route path="/profile/:id">
							<Profile></Profile>
						</Route>
						<Route path="/post/:id">
							<MyPost></MyPost>
						</Route>
						<Route path="/about">
							<About></About>
						</Route>
						<Route path="*">
							<Notfind></Notfind>
						</Route>
					</Switch>
					<Footer></Footer>
				</main>
			</Router>
		</div>
	);
}
