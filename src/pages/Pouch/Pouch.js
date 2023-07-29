import React from 'react'
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
  import "./Pouch.css";
  import CardPouch from "../../components/Pouch/Pouch";
  import { useEffect, useState } from "react";
  import { toast } from "react-toastify";
  import { useLocation, useNavigate, Link } from "react-router-dom";
  
const Pouch = () => {
  const [pouches, setPoches] = useState([]);

  async function getPouches() {
    setPoches(["1", "2", "1", "2","1", "2"])
  }

  useEffect(() => {
    getPouches();
  }, []);


  return (
    <>
    <div>Pouch</div>
    <Box component="main" pb={2}>
      <Box  className="balance" sx={{  display: 'flex', flexDirection: 'row', justifyContent: 'space-between'  }}>
        <Typography align='left' >
            Pouch Balance
        </Typography>
        <Typography  align='right' >
            Rp 50,000,000
        </Typography>
      </Box>

    <Box className="card-pouch-wrap" sx={{  display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
     {pouches.map( pouch => <CardPouch nama="Retirement Fund" balance="27000" />)} 
        </Box>
    </Box>
    </>
  )
}

export default Pouch