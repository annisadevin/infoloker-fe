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
  import BalanceBox from "../../components/Balance/Balance";
  import Navbar from "../../components/layout/Navbar";
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
    <Box component="main" pb={2}>
      <Navbar type="navbar-pouch" judul="Your Pouch"/>
      <BalanceBox balance="27,000,000"/>

      <Box mx={2} mb={5} sx={{  display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
        {pouches.map( pouch => <CardPouch nama="Retirement Fund" balance="27000" />)} 
      
        <Box component="span" className='card-pouch-add' sx={{ border: '1px dashed #8D5795' }}><Button sx={{ width: '100%', color: '#8D5795'}}>+</Button></Box> 
     
      </Box>
     
    </Box>
    </>
  )
}

export default Pouch