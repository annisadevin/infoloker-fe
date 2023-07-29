import { ArrowBack, Bolt } from "@mui/icons-material";
import { Box, Grid, IconButton, Typography } from "@mui/material";
import '../../index.css';

const Navbar = ({ judul, warna, warnaText }) => {
  return (
    <Box className="navbar" sx={{ backgroundColor: warna, borderRadius: "0px 0px 20px 20px", color:warnaText }} px={5} height="10vh">
      <Box className="row-box" sx={{ paddingTop:'1rem' }}>
        <IconButton edge="start" color="inherit" aria-label="arrow-back">
          <ArrowBack />
        </IconButton>
        <Typography component="h3" className="semi-bold">{judul}</Typography>
      </Box>
    </Box>
  );
};

export default Navbar;
