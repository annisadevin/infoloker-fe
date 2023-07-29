import { React, useState } from "react";
import {
  Button,
  Container,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
  Box,
  Stack,
  Select,
  MenuItem,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import { client } from "../../lib/client";
import { toast } from "react-toastify";
import useInput from "../../hooks/use-input";
import { login, loadUserInfo, loadUser } from "../../store/actions/action";
import { connect } from "react-redux";
import { DatePicker } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";

const isNotEmpty = (value) => value.trim() !== "";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    backgroundColor: "#8D5795",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
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
    "&.Mui-error": {
      color: "white", // Override the error color to be white as well
    },
  },
}));

const Register = ({ login, auth, loadUserInfo }) => {
  const classes = useStyles();
  const push = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const {
    value: nikValue,
    isValid: nikIsValid,
    hasError: nikHasError,
    valueChangeHandler: nikChangeHandler,
    inputBlurHandler: nikBlurHandler,
    reset: resetNik,
  } = useInput(isNotEmpty);

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

  const {
    value: phoneNumberValue,
    isValid: phoneNumberIsValid,
    hasError: phoneNumberHasError,
    valueChangeHandler: phoneNumberChangeHandler,
    inputBlurHandler: phoneNumberBlurHandler,
    reset: resetphoneNumber,
  } = useInput(isNotEmpty);

  const {
    value: birthDateValue,
    isValid: birthDateIsValid,
    hasError: birthDateHasError,
    valueChangeHandler: birthDateChangeHandler,
    inputBlurHandler: birthDateBlurHandler,
    reset: resetbirthDate,
  } = useInput(isNotEmpty);

  const {
    value: genderValue,
    isValid: genderIsValid,
    hasError: genderHasError,
    valueChangeHandler: genderChangeHandler,
    inputBlurHandler: genderBlurHandler,
    reset: resetGender,
  } = useInput(isNotEmpty);

  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: genderPassword,
  } = useInput(isNotEmpty);

  let isFormValid = false;

  if (passwordIsValid && usernameIsValid) {
    isFormValid = true;
  }

  async function getUserBalance() {
    const { data, status } = await client.post("/bankAccount/info/all", {});
    if (status === 200) {
      const dataParsed = JSON.parse(JSON.stringify(data.data));
      const totalBalance = dataParsed.accounts.reduce((total, account) => {
        return total + account.balance;
      }, 0);
      return totalBalance;
    } else {
      return 0;
    }
  }

  async function getUserData() {
    const { data, status } = await client.post("/user/info", {});
    if (status === 200) {
      toast.success("Login berhasil");
      let balance = await getUserBalance();
      const user = {
        birthDate: data.data.birthDate,
        name: data.data.username,
        balance: balance,
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
          style={{ marginBottom: "20px", marginTop: "50px" }}
        >
          <b>Register</b>
        </Typography>
        <Typography variant="body2" style={{ marginBottom: "40px" }}>
          Optimize your financial planning by
          <br />
          becoming a part of Ichibank
        </Typography>
        <Box
          component="form"
          autoComplete="off"
          mt={3}
          onSubmit={loginSubmitHandler}
        >
          <Stack rowGap={2}>
            <Typography variant="body2" style={{ textAlign: "left" }}>
              <b>NIK</b>
            </Typography>
            <TextField
              FormHelperTextProps={{ className: classes.whiteHelperText }} // Add this line
              value={nikValue}
              onChange={nikChangeHandler}
              onBlur={nikBlurHandler}
              error={nikHasError}
              helperText={nikHasError && "NIK cannot be empty"}
              autoComplete="off"
              name="nik"
              id="nik"
              variant="filled"
              type="text"
              placeholder="NIK"
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
            <Typography variant="body2" style={{ textAlign: "left" }}>
              <b>Username</b>
            </Typography>
            <TextField
              FormHelperTextProps={{ className: classes.whiteHelperText }} // Add this line
              value={usernameValue}
              onChange={usernameChangeHandler}
              onBlur={usernameBlurHandler}
              error={usernameHasError}
              helperText={usernameHasError && "Username cannot be empty"}
              autoComplete="off"
              name="username"
              id="username"
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
            <Typography variant="body2" style={{ textAlign: "left" }}>
              <b>Password</b>
            </Typography>
            <TextField
              FormHelperTextProps={{ className: classes.whiteHelperText }} // Add this line
              value={passwordValue}
              onChange={passwordChangeHandler}
              onBlur={passwordBlurHandler}
              error={passwordHasError}
              helperText={passwordHasError && "Password cannot be empty"}
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
            <Typography variant="body2" style={{ textAlign: "left" }}>
              <b>Phone Number</b>
            </Typography>
            <TextField
              FormHelperTextProps={{ className: classes.whiteHelperText }} // Add this line
              value={phoneNumberValue}
              onChange={phoneNumberChangeHandler}
              onBlur={phoneNumberBlurHandler}
              error={phoneNumberHasError}
              helperText={phoneNumberHasError && "Phone number cannot be empty"}
              autoComplete="off"
              name="phone number"
              id="filled-basic"
              variant="filled"
              type="text"
              placeholder="Phone Number"
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
            <Typography variant="body2" style={{ textAlign: "left" }}>
              <b>Birth Date</b>
            </Typography>
            <TextField
              FormHelperTextProps={{ className: classes.whiteHelperText }} // Add this line
              value={birthDateValue}
              onChange={birthDateChangeHandler}
              onBlur={birthDateBlurHandler}
              error={birthDateHasError}
              helperText={birthDateHasError && "Birth date cannot be empty"}
              autoComplete="off"
              name="birth date"
              id="filled-basic"
              variant="filled"
              type="text"
              placeholder="Birth Date"
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
            <Typography variant="body2" style={{ textAlign: "left" }}>
              <b>Gender</b>
            </Typography>
            <Select
              FormHelperTextProps={{ className: classes.whiteHelperText }} // Add this line
              value={genderValue}
              onChange={genderChangeHandler}
              onBlur={genderBlurHandler}
              error={genderHasError}
              helperText={genderHasError && "Gender cannot be empty"}
              fullWidth
              variant="filled"
              disableUnderline
              sx={{
                width: "25rem",
                borderRadius: "10px",
                backgroundColor: "white",
                textAlign: "left",
                "& .MuiFilledInput-input": {
                  paddingTop: "15px",
                  paddingBottom: "15px",
                  backgroundColor: "white",
                  borderRadius: "10px",
                  fontSize: "15px",
                },
                "& .MuiFilledInput-input:hover": {
                  paddingTop: "15px",
                  paddingBottom: "15px",
                  backgroundColor: "white",
                  borderRadius: "10px",
                  fontSize: "15px",
                },
              }}
            >
              <MenuItem value="0">Male</MenuItem>
              <MenuItem value="1">Female</MenuItem>
            </Select>

            <Typography variant="body2" style={{ textAlign: "left" }}>
              <b>Email</b>
            </Typography>
            <TextField
              FormHelperTextProps={{ className: classes.whiteHelperText }} // Add this line
              value={emailValue}
              onChange={emailChangeHandler}
              onBlur={emailBlurHandler}
              error={emailHasError}
              helperText={emailHasError && "Email cannot be empty"}
              autoComplete="off"
              name="email"
              id="filled-basic"
              variant="filled"
              type="text"
              placeholder="Email"
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
          </Stack>
          <br />
          <br />
          {!isSubmitting && (
            <Button
              variant="contained"
              type="submit"
              className={classes.customButton}
            >
              <b>Register</b>
            </Button>
          )}
          {isSubmitting && (
            <Button disabled variant="contained" className={classes.loadButton}>
              <b>Loading...</b>
            </Button>
          )}
          <br />
          <Link to="/auth/login" style={{ color: "#fff" }}>
            <Typography
              variant="caption"
              className={classes.registerLink}
              style={{ textAlign: "left" }}
            >
              Already have an account? <b>Login now!</b>
            </Typography>
          </Link>
          <br />
          <br />
          <br />
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

export default connect(mapStateToProps, { login, loadUserInfo })(Register);
