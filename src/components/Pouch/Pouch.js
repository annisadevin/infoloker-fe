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

            <Typography variant="h5" component="div">
                {nama}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                Rp {balance}
            </Typography>
        </CardContent>
        <CardActions>
            <Button size="small">See Details</Button>
        </CardActions>
    </Card>
  );
};

export default CardPouch;
