import CssBaseline from "@mui/material/CssBaseline";
import { connect } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import {
    Box,
    Typography,
    Container,
    Card,
    CardContent,
    IconButton,
    CardMedia,
    Button,
    Chip,
    CardActions
  } from "@mui/material";
import "./Balance.css"

const BalanceBox = ({ balance }) => {
  return (
    <Box  className="balance" sx={{  display: 'flex', flexDirection: 'row', justifyContent: 'space-between'  }}>
        <Typography className="text-balance" align='left' >
            <b>Pouch Balance</b>
        </Typography>
        <Typography  className="text-balance" align='right' >
           <b>Rp {balance}</b>
        </Typography>
    </Box>
  );
};

export default BalanceBox;
