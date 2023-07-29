
import {
    Box,
    Button,
    Grid,
    Typography,
  } from "@mui/material";

import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../../components/layout/Navbar";
import RecommendationCard from "../../components/RecommendationCard/RecommendationCard";
import { useState } from "react";

const Recommendations = () => {
    const push = useNavigate();
    const { state } = useLocation();
    const [formData, setFormData] = useState({});
    const [selectedTujuan, selectTujuan] = useState({});

    const handleGoal = e => {
        var index = parseInt(e.target.name);
        if (formData[index] == undefined){
            formData[index] = {
                'Tujuan': '',
                'Instrumen': '',
                'Goal': e.target.value
            }
        } else {
            formData[index]['Goal'] = e.target.value;
        }
        setFormData(formData);
        console.log(formData);
    }

    const handleTujuan = index => {
        // selectTujuan(...selectedTujuan, index);
        // if (formData[index] == undefined){
        //     formData[index] = {
        //         'Tujuan': state?.recommendations?[index]['Tujuan'],
        //         'Instrumen': [],
        //         'Goal': ''
        //     }
        // } else {
        //     formData[index]['Tujuan'] = state?.recommendations?[index]['Tujuan'];
        // }
        // setFormData(formData);
    }

    const handleInstrumen = (indexRec, indexIns) => {
        // if (formData[indexRec] == undefined){
        //     formData[indexRec] = {
        //         'Tujuan': "",
        //         'Instrumen': [state?.recommendations?[indexRec]['Instrumen'][indexIns]],
        //         'Goal': ''
        //     }
        // } else {
        //     formData[indexRec]['Instrumen'].append(state?.recommendations?[indexRec]['Instrumen'][indexIns]);
        // }
        // setFormData(formData);
    }


    return (
    <Box component="main" sx={{ minHeight: "90vh" }}>
        <Navbar judul={"Pouch Recommendation"} warna="#8D5795" warnaText="#FFFFFF"/>
        <Grid container justifyContent="center" mt={4}>
            <Box>
                <Box
                    mt={1}
                    mb={4}
                    display="flex"
                    justifyContent="space-between"
                    sx = {{
                        backgroundColor: "#EBA90D",
                        padding: "0.5rem",
                        width: "20rem",
                        borderRadius: "10px",
                    }}
                >
                    <Typography
                        component="h3"
                        variant="body1"
                        textAlign="center"
                        color="#FFFFFF"
                    >
                        Salary
                    </Typography>
                    <Typography
                        component="h3"
                        variant="body1"
                        textAlign="center"
                        color="#FFFFFF"
                    >
                        Rp { state?.income }
                    </Typography>
                </Box>
                <Typography
                    component="h3"
                    variant="body1"
                    className="semi-bold"
                >
                    Needs
                </Typography>
                <Box
                    mt={1}
                    mb={4}
                    display="flex"
                    justifyContent="space-between"
                    sx = {{
                        backgroundColor: "#8D5795",
                        padding: "0.5rem",
                        width: "20rem",
                        borderRadius: "10px",
                    }}
                >
                    <Typography
                        component="h3"
                        variant="body1"
                        textAlign="center"
                        color="#FFFFFF"
                    >
                        Rp { 0.51 * state?.income }
                    </Typography>
                    <Typography
                        component="h1"
                        variant="body1"
                        textAlign="center"
                        color="#FFFFFF"
                        sx={{
                            marginTop: "-45px"
                        }}
                    >
                        🍚
                    </Typography>
                </Box>
                <Typography
                    component="h3"
                    variant="body1"
                    className="semi-bold"
                >
                    Savings Recommendation
                </Typography>
                {state?.recommendations?.map((rec,index) => {
                    return (
                        <RecommendationCard recommendation={rec} index={index} handleGoal={handleGoal} handleTujuan={handleTujuan} handleInstrumen={handleInstrumen}/>
                    );
                })}
                <Button
                    size="big"
                    variant="contained"
                    className="semi-bold"
                    disableElevation="true"
                    sx = {{
                        border: "1px dashed #EBA90D",
                        backgroundColor: "#FFFFFF",
                        borderRadius: '10px',
                        width: "100%",
                        padding: '0.5rem 0 0.5rem 0',
                        color: "#EBA90D",
                        "&.MuiButtonBase-root":{
                            border: "1px dashed #EBA90D",
                            color: "#EBA90D",
                        },
                        '&:hover': {
                            border: "1px dashed #FFFFFF",
                            backgroundColor: '#EBA90D',
                            color: '#FFFFFF',
                        }
                    }}
                >
                    +
                </Button>
                <Button
                    size="big"
                    variant="contained"
                    className="semi-bold"
                    sx = {{
                        backgroundColor: "#EBA90D",
                        borderRadius: '10px',
                        width: '100%',
                        margin: '1rem 0 2rem 0',
                        "&.MuiButtonBase-root":{
                            backgroundColor: "#EBA90D",
                        }
                    }}
                >
                    Submit
                </Button>
            </Box>
        </Grid>
    </Box>
    );
};

export default Recommendations;