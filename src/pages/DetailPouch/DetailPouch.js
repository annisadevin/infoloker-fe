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
    LinearProgress,
    CardActions
  } from "@mui/material";
  import IconPouch from "./icon.png";
  import "./DetailPouch.css";
  import CardPouch from "../../components/Pouch/Pouch";
  import BalanceBox from "../../components/Balance/Balance";
  import Navbar from "../../components/layout/Navbar";
  import { useEffect, useState } from "react";
  import { toast } from "react-toastify";
  import { useLocation, useNavigate, Link } from "react-router-dom";
  import Activity from "../../components/Activity/Activity";
  
const DetailPouch = () => {
  const [progress, setProgress] = useState(0);

  async function getProgress() {
    setProgress(75)
  }

  useEffect(() => {
    getProgress();
  }, []);


  return (
    <>
    <Box component="main" pb={2}>
      <Navbar type="navbar-pouch-detail" judul="Pouch Detail"/>
      <Container  className="banner-detail" sx={{ borderRadius: "0px 0px 20px 20px" }}>
        <Box mx={5} sx={{  display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
            <Box  >
                <img src={IconPouch} style={{width:'100%'}}/>
            </Box>
            <Box ml={5}>
                <Chip
                label="Fixed Deposit"
                sx={{ cursor: "pointer", fontWeight:1000, p:2,  margin: "5px 0px 10px 0px", backgroundColor: "#EBA90D" , color: "#FFFFFF"}}
                />
                <Typography variant="h2">
                <b>Retirement Fund</b>
                </Typography>
            </Box>
        </Box>
        <Box ml={5} my={2} sx={{  display: 'flex', flexDirection: 'row'}}>
            <Box sx={{ width: '100%', mr: 1 }}>
                <LinearProgress variant="determinate"  sx={{
                        backgroundColor: '#B286B8',
                        '& .MuiLinearProgress-bar': {
                          backgroundColor: '#EBA90D'
                        },
                        borderRadius:'100px',
                        height: '1rem'
                    }}value={progress} />
            </Box>
            <Box sx={{ minWidth: 35 }}>
                <Typography variant="body2"  sx={{color: '#FFFFFF'}}>{`${Math.round(
            progress,
            )}%`}
            </Typography>
            </Box>
         </Box>
    
        <Box mx={5} pb={4} sx={{  display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between'}}>
            <Box  >
                <Typography sx={{fontSize:'12px'}}>Current Balance:</Typography>
                <Typography><b>Rp 230000</b></Typography>
            </Box>
            <Box pl={4}>
            <Typography sx={{fontSize:'12px'}}>Goal:</Typography>
                <Typography><b>Rp 230000</b></Typography>
            </Box>
            <Box pl={4}>
            <Typography sx={{fontSize:'12px'}}>Expected Year:</Typography>
            <Typography><b>Rp 230000</b></Typography>
            </Box>
        </Box>
        
      </Container>

      <Box  mx={3} my={3}  sx={{  display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent:'center'}}>
        <Button variant="outlined" sx={{ borderColor: "#EBA90D", color:"#EBA90D",  margin:'10px', px:'55px'}}><b>Deposit</b></Button>
        <Button variant="contained" sx={{ backgroundColor: "#EBA90D", color:"#FFFFFF", margin:'10px', px:'55px'}}><b>Withdraw</b></Button>
      </Box>
     
       <Activity />
    </Box>
    </>
  )
}

export default DetailPouch