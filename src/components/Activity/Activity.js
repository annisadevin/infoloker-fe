import React, { useEffect } from "react";
import { Box, Typography, Container } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  cardContainer: {
    color: "black",
    backgroundColor: "#FFFFFF",
    borderRadius: "20px",
    padding: theme.spacing(3),
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
  },
  quizContainer: {
    color: "black",
    padding: theme.spacing(3),
    marginTop: theme.spacing(3),
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
  },
}));

const Activity = () => {
  const classes = useStyles();

  return (
    <div>
      <Box className={classes.currBalance}>
        <Container maxWidth="sm" className={classes.quizContainer}>
          <div>
            <Typography variant="h6" fontWeight="bold">
              Activity
            </Typography>
          </div>
          <div>
            <Typography variant="subtitle2">View All</Typography>
          </div>
        </Container>
      </Box>
      <Box className={classes.activityCard}>
        <Container maxWidth="sm" className={classes.cardContainer}>
          <div>
            <p>Halo</p>
          </div>
        </Container>
      </Box>
    </div>
  );
};

export default Activity;
