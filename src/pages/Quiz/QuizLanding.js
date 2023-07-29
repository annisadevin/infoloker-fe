import {
    Box,
    Typography,
    Grid,
    Avatar,
    Button
  } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/layout/Navbar";
import { ArrowForward } from "@mui/icons-material";
import TandaTanya from "../../images/TandaTanya.svg";

const QuizLanding = () => {
    const push = useNavigate();

    return (
        <Box component="main" sx={{ minHeight: "90vh", backgroundColor: "#8D5795" }}>
            <Navbar judul={"Plan Your Financial"} warna="#FFFFFF" warnaText="black"/>
            <Grid container justifyContent="center">
                <Box textAlign="center" mt={3}>
                    <img height="auto" src={TandaTanya} alt="Tanda Tanya" />
                </Box>
                <Grid item xs={10} mb={5}>
                    <Box
                        mt={3}
                        px={4}
                        py={5}
                        sx={{
                            border: "1px solid rgba(0, 0, 0, 0.08)",
                            boxShadow: "0px 2px 2px rgba(0, 0, 0, 0.25)",
                            borderRadius: "40px",
                            backgroundColor: "#FFFFFF",
                        }}
                    >
                        <Typography
                            component="h2"
                            variant="body1"
                            fontWeight="bold"
                            textAlign="center"
                        >
                            Ready for a Finance Quiz? Let's Go!
                        </Typography>
                        <Typography
                            component="h4"
                            variant="caption"
                            color="#A7A7A7"
                            textAlign="center"
                        >
                            Engage in Fun Quizzes and Receive Your Personalized Finance Recommendations!
                        </Typography>
                    </Box>
                    <Box
                        textAlign='center'
                    >
                        <Button
                            onClick={() => {
                                push("/quiz");
                            }}
                        >
                            <Avatar sx={{
                                backgroundColor: '#EBA90D',
                                color: '#FFFFFF',
                                width: '4rem',
                                height: '4rem',
                                marginTop: "-40px",
                            }}>
                                <ArrowForward
                                    sx={{ cursor: "pointer" }}
                                />
                            </Avatar>
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default QuizLanding;