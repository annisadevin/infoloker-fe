import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import "@fontsource/roboto/400.css";
import Typography from '@mui/material/Typography';

const Login = () => {
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <Typography variant="h3" gutterBottom>
        h3. Heading
      </Typography>
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
    </Box>
  );
};

export default Login;
