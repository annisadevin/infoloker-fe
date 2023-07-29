import React from "react";
import { Box, Typography, Container } from "@mui/material";
import { makeStyles } from "@mui/styles";
import AddBalance from "./add-balance.png";
import Withdraw from "./withdraw.png";

const useStyles = makeStyles((theme) => ({
  cardContainer: {
    color: "black",
    backgroundColor: "#FFFFFF",
    borderRadius: "20px",
    padding: theme.spacing(3),
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
    display: "flex",
    alignItems: "center",
  },
  quizContainer: {
    color: "black",
    padding: theme.spacing(3),
    marginTop: theme.spacing(1),
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  currBalance: {
    marginLeft: "10px",
    marginRight: "10px",
  },
  activityCard: {
    marginLeft: "20px",
    marginRight: "20px",
    marginBottom: "20px",
  },
  roundedImage: {
    borderRadius: "20%", // Make the image circular (50% of its width/height)
    width: "60px", // Set your desired width for the image
    height: "60px", // Set your desired height for the image
  },
}));

const Activity = () => {
  const classes = useStyles();

  return (
    <div>
      <Box className={classes.currBalance}>
        <Container maxWidth="sm" className={classes.quizContainer}>
          <div>
            <Typography variant="subtitle1" fontWeight="bold">
              Activity
            </Typography>
          </div>
          <div>
            <Typography variant="caption">View All</Typography>
          </div>
        </Container>
      </Box>
      <Box className={classes.activityCard}>
        <Container maxWidth="sm" className={classes.cardContainer}>
          <div style={{ flex: 1, marginRight: "20px" }}>
            <img
              src={AddBalance}
              alt="add balance"
              className={classes.roundedImage}
            />
          </div>
          <div style={{ flex: 3 }}>
            <Typography variant="subtitle2" fontWeight="bold">
              Add Balance
            </Typography>
            <Typography variant="caption">10 Jan 2023</Typography>
          </div>
          <div style={{ flex: 3, textAlign: "right" }}>
            <Typography
              variant="subtitle2"
              fontWeight="bold"
              style={{ color: "green" }}
            >
              + Rp 5,400
            </Typography>
            <Typography variant="caption">In Cash</Typography>
          </div>
        </Container>
      </Box>
      <Box className={classes.activityCard}>
        <Container maxWidth="sm" className={classes.cardContainer}>
          <div style={{ flex: 1, marginRight: "20px" }}>
            <img
              src={Withdraw}
              alt="withdraw"
              className={classes.roundedImage}
            />
          </div>
          <div style={{ flex: 3 }}>
            <Typography variant="subtitle2" fontWeight="bold">
            Withdraw
            </Typography>
            <Typography variant="caption">11 jan 2022</Typography>
          </div>
          <div style={{ flex: 3, textAlign: "right" }}>
            <Typography
              variant="subtitle2"
              fontWeight="bold"
              style={{ color: "red" }}
            >
              -Rp 54,417.80
            </Typography>
            <Typography variant="caption">Card</Typography>
          </div>
        </Container>
      </Box>
    </div>
  );
};

export default Activity;
