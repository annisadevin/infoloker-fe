import { React, useState } from "react";
import {
  Button,
  Container,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Padding, Visibility, VisibilityOff } from "@mui/icons-material";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    backgroundColor: "#8D5795",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  textContainer: {
    color: "white",
    textAlign: "center",
  },
  iconButton: {
    backgroundColor: "white",
    color: "#8D5795",
    "&:hover": {
      backgroundColor: "white",
    },
  },
  customButton: {
    textTransform: "none",
    backgroundColor: "#EBA90D",
    "&:hover": {
      backgroundColor: "#E2A517", // Set the background color for the button on hover
    },
    borderRadius: "10px",
    width: "25rem",
    padding: "0.8rem",
    marginBottom: "0.7rem",
  },
}));

const Login = () => {
  const classes = useStyles();
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => {
    setShowPassword((prev) => !prev);
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <Container fixed className={classes.wrapper}>
      <div className={classes.textContainer}>
        <Typography
          variant="h5"
          className="extra-bold"
          style={{ marginBottom: "20px" }}
        >
          <b>Login</b>
        </Typography>
        <Typography variant="body2" style={{ marginBottom: "40px" }}>
          Experience the convenience of IchiBank!
        </Typography>
        <Typography variant="body2" style={{ textAlign: "left" }}>
          <b>Username</b>
        </Typography>
        <div style={{ marginBottom: "20px" }}>
          <TextField
            autoComplete="off"
            name="username"
            id="filled-basic"
            variant="filled"
            type="text"
            placeholder="Username"
            InputProps={{
              disableUnderline: true,
              sx: {
                width: "25rem",
                borderRadius: "10px",
                backgroundColor: "white",
                "& .MuiFilledInput-input": {
                  paddingTop: "15px",
                  paddingBottom: "15px",
                  backgroundColor: "white",
                  borderRadius: "10px",
                  fontSize: "15px",
                },
              },
            }}
          />
        </div>
        <Typography variant="body2" style={{ textAlign: "left" }}>
          <b>Password</b>
        </Typography>
        <div style={{ marginBottom: "30px" }}>
          <TextField
            autoComplete="off"
            name="password"
            id="filled-basic"
            variant="filled"
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            InputProps={{
              disableUnderline: true,
              sx: {
                width: "25rem",
                borderRadius: "10px",
                backgroundColor: "white",
                "& .MuiFilledInput-root": {
                  backgroundColor: "white",
                },
                "& .MuiFilledInput-input": {
                  paddingTop: "15px",
                  paddingBottom: "15px",
                  backgroundColor: "white",
                  borderRadius: "10px",
                  fontSize: "15px",
                },
                "&:hover": {
                  backgroundColor: "white",
                },
              },
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                    className={classes.iconButton} // Apply the custom styles to the IconButton
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
              classes: {
                adornedEnd: classes.adornedEnd,
              },
            }}
          />
        </div>
        <Button
          variant="contained"
          type="submit"
          className={classes.customButton}
        >
          <b>Login</b>
        </Button>
        <br />
        <Typography variant="caption" style={{ textAlign: "left" }}>
          Don't have an account yet? <b>Register now!</b>
        </Typography>
      </div>
    </Container>
  );
};

export default Login;
