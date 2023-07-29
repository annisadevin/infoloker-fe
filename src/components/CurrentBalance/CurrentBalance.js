import React, { useEffect } from "react";
import { Box, Typography, Container } from "@mui/material";
import { makeStyles } from "@mui/styles";
import MoneyBag from "./money.png";

const useStyles = makeStyles((theme) => ({
  cardContainer: {
    color: theme.palette.primary.contrastText,
    backgroundColor: "#EBA90D",
    borderRadius: "20px",
    padding: theme.spacing(3),
    marginTop: theme.spacing(3),
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
  },
  quizContainer: {
    color: "black",
    backgroundColor: "#fff",
    borderRadius: "20px",
    padding: theme.spacing(3),
    marginTop: theme.spacing(3),
    boxShadow: "2px 4px 10px rgba(0, 0, 0, 0.1)",
    display: "flex",
    alignItems: "center",
  },
  transparentText: {
    marginBottom: "8px",
    marginTop: "8px",
    color: "rgba(255, 255, 255, 0.7)",
  },
  currBalance: {
    marginLeft: "20px",
    marginRight: "20px",
    marginTop: "30px",
  },

  quizImage: {
    marginRight: "10px",
    flexShrink: 0,
    width: "15%"
  },
}));

const CurrentBalance = () => {
  const classes = useStyles();

  return (
    <div>
      <Box className={classes.currBalance}>
        <Container maxWidth="sm" className={classes.cardContainer}>
          <Typography variant="body1" className={classes.transparentText}>
            Current Balance
          </Typography>
          <Typography variant="h4" style={{ marginBottom: "12px" }}>
            <b>Rp 50,000,000</b>
          </Typography>
          <Typography variant="subtitle2" style={{ marginBottom: "8px" }}>
            <b>See details</b>
          </Typography>
        </Container>
      </Box>
      <Box className={classes.currBalance}>
        <Container maxWidth="sm" className={classes.quizContainer}>
          <div>
            <Typography variant="h6" style={{ marginBottom: "8px", marginTop: "8px" }}>
              <b>Plan Your Financial!</b>
            </Typography>
            <Typography
              variant="subtitle2"
              style={{ marginBottom: "8px", marginTop: "8px", color: "#818181" }}
            >
              Start the quiz, get the financial planning recommendations.
            </Typography>
          </div>
          <img src={MoneyBag} alt="Money Bag" className={classes.quizImage} />
        </Container>
      </Box>
    </div>
  );
};

export default CurrentBalance;
