import React, { useEffect } from "react";
import { client } from "../../lib/client";
import {
  Box,
  Typography,
  Container,
  IconButton,
  CardMedia,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import Profpic from "./profpic.png";
import { Notifications, ExitToApp } from "@mui/icons-material";
import CurrentBalance from "../../components/CurrentBalance/CurrentBalance";
import Activity from "../../components/Activity/Activity";

const useStyles = makeStyles((theme) => ({
  banner: {
    position: "relative",
    borderBottomLeftRadius: "20px",
    borderBottomRightRadius: "20px",
    backgroundColor: "#8D5795",
    color: theme.palette.primary.contrastText,
    padding: theme.spacing(3),
    display: "flex",
    alignItems: "flex-end",
  },
  profilePicture: {
    width: 50,
    height: 50,
    borderRadius: "50%",
  },
  profilePictureContainer: {
    backgroundColor: "white",
    borderRadius: "50%",
    padding: theme.spacing(2),
  },
  textContainer: {
    marginLeft: theme.spacing(3),
  },
  notificationContainer: {
    position: "absolute",
    top: theme.spacing(2),
    right: theme.spacing(2),
  },
  logoutButton: {
    position: "absolute",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  iconSize: {
    fontSize: 35,
  },
}));

const Dashboard = () => {
  const classes = useStyles();

  return (
    <div>
      <Container fixed className={classes.banner} style={{ height: "140px" }}>
        <Box className={classes.notificationContainer}>
          <IconButton color="inherit" aria-label="notification">
            <Notifications className={classes.iconSize}/>
          </IconButton>
        </Box>
        <Box className={classes.profilePictureContainer}>
          <CardMedia
            component="img"
            image={Profpic}
            className={classes.profilePicture}
          />
        </Box>
        <div className={classes.textContainer}>
          <Typography variant="h5" className="extra-bold">
            <b>Hi, Lou</b>
          </Typography>
          <Typography variant="h6" className="semi-bold">
            <span className={classes.blueRoundedText}>Welcome Back!</span>
          </Typography>
        </div>
        <IconButton
          color="inherit"
          aria-label="logout"
          className={classes.logoutButton}
        >
          <ExitToApp className={classes.iconSize} />
        </IconButton>
      </Container>
      <CurrentBalance />
      <Activity />
    </div>
  );
};

export default Dashboard;
