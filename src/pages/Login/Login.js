import { React, useState } from "react";
import {
  Button,
  Container,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
  Box,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import { client } from "../../lib/client";
import { toast } from "react-toastify";
import useInput from "../../hooks/use-input";
import { login, loadUserInfo, loadUser } from "../../store/actions/action";
import { connect } from "react-redux";

const isNotEmpty = (value) => value.trim() !== "";

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
  loadButton: {
    textTransform: "none",
    backgroundColor: "rgba(172, 133, 178, 0.46)",
    color: "rgba(255, 255, 255, 0.50)",
    borderRadius: "10px",
    width: "25rem",
    padding: "0.8rem",
    marginBottom: "0.7rem",
  },
  registerLink: {
    "&:hover": {
      textDecoration: "underline",
    },
  },
  whiteHelperText: {
    color: "white",
  },
}));

const Login = ({ login, auth, loadUserInfo }) => {
  const classes = useStyles();
  const push = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const {
    value: usernameValue,
    isValid: usernameIsValid,
    hasError: usernameHasError,
    valueChangeHandler: usernameChangeHandler,
    inputBlurHandler: usernameBlurHandler,
    reset: resetUsername,
  } = useInput(isNotEmpty);

  const {
    value: passwordValue,
    isValid: passwordIsValid,
    hasError: passwordHasError,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
    reset: resetPassword,
  } = useInput(isNotEmpty);

  let isFormValid = false;

  if (passwordIsValid && usernameIsValid) {
    isFormValid = true;
  }

  async function getUserBalance(){
    const { data, status } = await client.post("/bankAccount/info/all", {});
    if(status === 200){
      const dataParsed = JSON.parse(JSON.stringify(data.data));
      const totalBalance = dataParsed.accounts.reduce((total, account) => {
        return total + account.balance;
      }, 0);
      return totalBalance;
    }else{
      return 0;
    }
  }

  async function getUserData() {
    const { data, status } = await client.post("/user/info", {});
    if (status === 200) {
      toast.success("Login berhasil");
      let balance = await getUserBalance();
      console.log("haalo");
      console.log(balance);
      const user = {
        birthDate: data.data.birthDate,
        name: data.data.username,
        balance: balance
      };
      loadUserInfo(user);
      push("/");
    } else {
      toast.error("Gagal mengambil data pengguna");
    }
    setIsSubmitting(false);
  }

  async function loginSubmitHandler(event) {
    event.preventDefault();

    setIsSubmitting(true);

    if (!isFormValid) {
      setIsSubmitting(false);
      return;
    }

    const { data, status } = await client.post("/user/auth/token", {
      username: usernameValue,
      loginPassword: passwordValue,
    });

    if (status === 200) {
      const user = {
        token: data.data.accessToken,
      };
      login(user);
      getUserData();
    } else {
      toast.error("Failed to Login");
      setIsSubmitting(false);
    }
  }
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
        <Box
          component="form"
          autoComplete="off"
          mt={3}
          onSubmit={loginSubmitHandler}
        >
          <Typography variant="body2" style={{ textAlign: "left" }}>
            <b>Username</b>
          </Typography>
          <div style={{ marginBottom: "20px" }}>
            <TextField
              value={usernameValue}
              onChange={usernameChangeHandler}
              onBlur={usernameBlurHandler}
              error={usernameHasError}
              helperText={usernameHasError && "Username tidak boleh kosong"}
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
              value={passwordValue}
              onChange={passwordChangeHandler}
              onBlur={passwordBlurHandler}
              error={passwordHasError}
              helperText={passwordHasError && "Password tidak boleh kosong"}
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
                      className={classes.iconButton}
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
          {!isSubmitting && (
            <Button
              variant="contained"
              type="submit"
              className={classes.customButton}
            >
              <b>Login</b>
            </Button>
          )}
          {isSubmitting && (
            <Button disabled variant="contained" className={classes.loadButton}>
              <b>Loading...</b>
            </Button>
          )}
          <br />
          <Link to="/auth/register" style={{ color: "#fff" }}>
            <Typography
              variant="caption"
              className={classes.registerLink}
              style={{ textAlign: "left" }}
            >
              Don't have an account yet? <b>Register now!</b>
            </Typography>
          </Link>
        </Box>
      </div>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps, { login, loadUserInfo })(Login);
