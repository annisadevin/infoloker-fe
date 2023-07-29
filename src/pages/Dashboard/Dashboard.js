import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Container,
  IconButton,
  CardMedia,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import Profpic from "./profpic.png";
import { Notifications, ExitToApp } from "@mui/icons-material";
import CurrentBalance from "../../components/CurrentBalance/CurrentBalance";
import Activity from "../../components/Activity/Activity";
import { connect } from "react-redux";
import { logout } from "../../store/actions/action";
import { Link, useNavigate } from "react-router-dom";

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
    marginBottom: "10px",
  },
  profilePicture: {
    width: 40,
    height: 40,
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
    fontSize: 28,
  },
  customButton: {
    textTransform: "none",
  },
}));

const Dashboard = ({ logout, auth }) => {
  const classes = useStyles();
  const push = useNavigate();
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);

  const handleOpenLogoutModal = () => {
    setIsLogoutModalOpen(true);
  };

  const handleCloseLogoutModal = () => {
    setIsLogoutModalOpen(false);
  };

  let name = "";
  const localStorageData = localStorage.getItem("infoloker");
  if(localStorageData != null){
    let parsedData = JSON.parse(localStorageData);
    name = parsedData.name;
  }


  return (
    <div>
      <Container fixed className={classes.banner} style={{ height: "140px" }}>
        <Box className={classes.notificationContainer}>
          <IconButton color="inherit" aria-label="notification">
            <Notifications className={classes.iconSize} />
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
          <Typography variant="h6" className="extra-bold">
            <b>Hi, {name}</b>
          </Typography>
          <Typography variant="subtitle1">
            <span className={classes.blueRoundedText}>Welcome Back!</span>
          </Typography>
        </div>
        <IconButton
          color="inherit"
          aria-label="logout"
          className={classes.logoutButton}
          onClick={handleOpenLogoutModal}
        >
          <ExitToApp className={classes.iconSize} />
        </IconButton>
        <Dialog open={isLogoutModalOpen} onClose={handleCloseLogoutModal}>
          <DialogTitle>
            <b>Logout</b>
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              <Typography variant="body2" style={{color: "#818181"}}>
                Are you sure you want to logout?
              </Typography>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={handleCloseLogoutModal}
              color="primary"
              className={classes.customButton}
              style={{ color: "#818181" }}
            >
              Cancel
            </Button>
            <Button
              onClick={() => {
                logout();
                push("/auth/login");
              }}
              style={{ color: "#8D5795" }}
              className={classes.customButton}
            >
              <b>Logout</b>
            </Button>
          </DialogActions>
        </Dialog>
      </Container>
      <CurrentBalance />
      <Activity />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps, { logout })(Dashboard);
