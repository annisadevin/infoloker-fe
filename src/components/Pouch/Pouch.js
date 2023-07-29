import CssBaseline from "@mui/material/CssBaseline";
import { connect } from "react-redux";
import { useLocation, useNavigate, Link } from "react-router-dom";
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

import IconPouch from "./icon.png";
import "./Pouch.css"

const CardPouch = ({nama, balance }) => {
  return (
    <Card className="card-pouch">
        <CardContent>
            <CardMedia
                component="img"
                className="pouch-icon"
                image={IconPouch}
                alt="icon"
            />

            <Typography sx={{fontSize: '17px', mt: 3}} component="div">
                <b>{nama}</b>
            </Typography>
            <Typography sx={{fontSize: '14px'}}  color="text.secondary">
                Rp {balance}
            </Typography>
        </CardContent>
        <CardActions>
            <Link to={"/pouch/"+1}>
                <Button  size="small" >See Details</Button>
            </Link>
        </CardActions>
    </Card>
  );
};

export default CardPouch;
