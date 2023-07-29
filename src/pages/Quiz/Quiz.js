import {
    Box,
    Grid,
    LinearProgress,
    Modal,
    Typography,
  } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/layout/Navbar";
import { useState } from "react";
import CardIncome from "../../components/QuizCard/CardIncome";
import CardChoice from "../../components/QuizCard/CardChoice";

const Quiz = () => {
    const push = useNavigate();
    const [open, setOpen] = useState(false);
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        income: 0,
        marriageStatus: '',
        hasChildren: '',
        financialRisk: ''
    });

    const {
        income,
        marriageStatus,
        hasChildren,
        financialRisk
    } = formData;

    const prevStep = () => {
        setStep(step-1);
    }

    const nextStep = () => {
        setStep(step+1);
    }

    const handleChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleClose = () => {
        setOpen(false);
    }

    const handleOpen = () => {
        setOpen(true);
    }

    const handleSubmit = () => {
        console.log(formData);
        push("/recommendations");
        // handleOpen();
        // return (
        //     <Modal
        //         open={open}
        //         onClose={handleClose}
        //         aria-labelledby="modal-modal-title"
        //         aria-describedby="modal-modal-description"
        //     >
        //         <Box>
        //             <Typography id="modal-modal-title" variant="h6" component="h2">
        //                 Text in a modal
        //             </Typography>
        //             <Typography id="modal-modal-description" sx={{ mt: 2 }}>
        //                 Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
        //             </Typography>
        //         </Box>
        //     </Modal>
        // );
    }

    const renderSwitch = step => {
        switch (step) {
            case 0:
              return (
                push("/quizLanding")
            )
            case 1:
              return (
                <CardIncome
                    prevStep={ prevStep }
                    nextStep={ nextStep }
                    handleChange={ handleChange }
                />
              )
            case 2:
              return (
                <CardChoice
                    prevStep={ prevStep }
                    nextStep={ nextStep }
                    handleChange={ handleChange }
                    value={ marriageStatus }
                    question="Are you already married?"
                    inputName="marriageStatus"
                    icon="💍"
                    nextText="Next"
                />
              )
            case 3:
              return (
                <CardChoice
                    prevStep={ prevStep }
                    nextStep={ nextStep }
                    handleChange={ handleChange }
                    value={ hasChildren }
                    question="Do you already have children?"
                    inputName="hasChildren"
                    icon="🍼"
                    nextText="Next"
                />
              )
            case 4:
                return (
                  <CardChoice
                      prevStep={ prevStep }
                      nextStep={ handleSubmit }
                      handleChange={ handleChange }
                      value={ financialRisk }
                      question="Are you comfortable with high financial risk?"
                      inputName="financialRisk"
                      icon="📈"
                      nextText="Finished"
                  />
                )
            default:
               // do nothing
        }
    }

    console.log(formData);
    return (
    <Box component="main" sx={{ minHeight: "90vh", backgroundColor: "#8D5795" }}>
        <Navbar judul={"Plan Your Financial"} warna="#FFFFFF" warnaText="black"/>
        <Grid container justifyContent="center">
            <Box
                mt={5}
                width="18rem"
            >
                <Typography
                    component="h3"
                    variant="body1"
                    textAlign="center"
                    color="#FFFFFF"
                    mb={3}
                >
                    {step+"/4"}
                </Typography>
                <LinearProgress
                    variant="determinate"
                    value={step/4*100}
                    sx={{
                        backgroundColor: '#B286B8',
                        '& .MuiLinearProgress-bar': {
                          backgroundColor: '#EBA90D'
                        },
                        borderRadius:'100px',
                        height: '1rem'
                    }}
                />
                {renderSwitch(step)}
                {/* <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Grid container justifyContent="center">
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            Text in a modal
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                        </Typography>
                    </Grid>
                </Modal> */}
            </Box>
        </Grid>
    </Box>
    );
};

export default Quiz;