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
import { connect } from "react-redux";

const Quiz = ({ auth }) => {
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
        switch (step) {
            case 4:
              if (marriageStatus == "No"){
                setStep(step-2);
              } else {
                setStep(step-1);
              }
            break;
            default:
                setStep(step-1);

        }
    }

    const nextStep = () => {
        switch (step) {
            case 2:
              if (marriageStatus == "No"){
                setStep(step+2);
              } else {
                setStep(step+1);
              }
            break;
            default:
                setStep(step+1);
        }
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
        var financialRecommendations = {'recommendations':generateRecommendations()};
        financialRecommendations['income'] = income;
        console.log("SINI");
        console.log(financialRecommendations);
        push('/recommendations',{state:financialRecommendations});
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

    // const generateRecommendations = () => {

    // }

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
               // do nothing
        }
    }

    const generateRecommendations = () => {
        var birthDate = convertStringToDate(auth.birthDate);
        var age = getAge(birthDate);
        console.log(age);
        if (age >= 18 && age <= 29) {
            if (marriageStatus == "Yes") {
                if (hasChildren == "Yes"){
                    if (financialRisk == "Yes"){
                        return ([
                            {
                                "Tujuan": "House Saving",
                                "Instrumen" : ["Stock", "Mutual Funds"]
                            },
                            {
                                "Tujuan": "Child Education Fund",
                                "Instrumen" : ["Stock", "Mutual Funds"]
                            },
                            {
                                "Tujuan": "Self Reward",
                                "Instrumen" : ["Stock", "Mutual Funds"]
                            }
                        ]);
                    } else if (financialRisk == "No"){
                        return ([
                            {
                                "Tujuan": "House Saving",
                                "Instrumen" : ["Savings", "Fixed Deposit", "Gold Investment"]
                            },
                            {
                                "Tujuan": "Child Education Fund",
                                "Instrumen" : ["Savings", "Gold Investment"]
                            },
                            {
                                "Tujuan": "Self Reward",
                                "Instrumen" : ["Savings", "Gold Investment"]
                            }
                        ]);
                    }
                } else if (hasChildren == "No"){
                    if (financialRisk == "Yes"){
                        return ([
                            {
                                "Tujuan": "House Saving",
                                "Instrumen" : ["Stock", "Mutual Funds"]
                            },
                            {
                                "Tujuan": "Self Reward",
                                "Instrumen" : ["Stock", "Mutual Funds"]
                            },
                        ]);
                    } else if (financialRisk == "No"){
                        return ([
                            {
                                "Tujuan": "House Saving",
                                "Instrumen" : ["Savings", "Fixed Deposit", "Gold Investment"]
                            },
                            {
                                "Tujuan": "Self Reward",
                                "Instrumen" : ["Savings", "Gold Investment"]
                            },
                        ]);
                    }
                }
            } else if (marriageStatus == "No"){
                if (financialRisk == "Yes"){
                    return ([
                        {
                            "Tujuan": "House Saving",
                            "Instrumen" : ["Stock", "Mutual Funds"]
                        },
                        {
                            "Tujuan": "Self Reward",
                            "Instrumen" : ["Stock", "Mutual Funds"]
                        },
                        {
                            "Tujuan": "Wedding Fund",
                            "Instrumen" : ["Stock", "Mutual Funds"]
                        }
                    ]);
                } else if (financialRisk == "No"){
                    return ([
                        {
                            "Tujuan": "House Saving",
                            "Instrumen" : ["Savings", "Fixed Deposit", "Gold Investment"]
                        },
                        {
                            "Tujuan": "Self Reward",
                            "Instrumen" : ["Savings", "Gold Investment"]
                        },
                        {
                            "Tujuan": "Wedding Fund",
                            "Instrumen" : ["Savings", "Gold Investment"]
                        }
                    ]);
                }
            }
        } else if (age >= 30 && age <= 39) {
            if (marriageStatus == "Yes") {
                if (hasChildren == "Yes"){
                    if (financialRisk == "Yes"){
                        return ([
                            {
                                "Tujuan": "Retirement Fund",
                                "Instrumen" : ["Stock", "Mutual Funds"]
                            },
                            {
                                "Tujuan": "Hajj Fund",
                                "Instrumen" : ["Stock", "Mutual Funds"]
                            },
                            {
                                "Tujuan": "House Saving",
                                "Instrumen" : ["Stock", "Mutual Funds"]
                            },
                            {
                                "Tujuan": "Child Education Fund",
                                "Instrumen" : ["Stock", "Mutual Funds"]
                            },
                            {
                                "Tujuan": "Self Reward",
                                "Instrumen" : ["Stock", "Mutual Funds"]
                            }
                        ]);
                    } else if (financialRisk == "No"){
                        return ([
                            {
                                "Tujuan": "Retirement Fund",
                                "Instrumen" : ["Savings", "Fixed Deposit", "Gold Investment"]
                            },
                            {
                                "Tujuan": "Hajj Fund",
                                "Instrumen" : ["Savings", "Fixed Deposit", "Gold Investment"]
                            },
                            {
                                "Tujuan": "House Saving",
                                "Instrumen" : ["Savings", "Fixed Deposit", "Gold Investment"]
                            },
                            {
                                "Tujuan": "Child Education Fund",
                                "Instrumen" : ["Savings", "Gold Investment"]
                            },
                            {
                                "Tujuan": "Self Reward",
                                "Instrumen" : ["Savings", "Gold Investment"]
                            }
                        ]);
                    }
                } else if (hasChildren == "No"){
                    if (financialRisk == "Yes"){
                        return ([
                            {
                                "Tujuan": "Retirement Fund",
                                "Instrumen" : ["Stock", "Mutual Funds"]
                            },
                            {
                                "Tujuan": "Hajj Fund",
                                "Instrumen" : ["Stock", "Mutual Funds"]
                            },
                            {
                                "Tujuan": "House Saving",
                                "Instrumen" : ["Stock", "Mutual Funds"]
                            },
                            {
                                "Tujuan": "Self Reward",
                                "Instrumen" : ["Stock", "Mutual Funds"]
                            }
                        ]);
                    } else if (financialRisk == "No"){
                        return ([
                            {
                                "Tujuan": "Retirement Fund",
                                "Instrumen" : ["Savings", "Fixed Deposit", "Gold Investment"]
                            },
                            {
                                "Tujuan": "Hajj Fund",
                                "Instrumen" : ["Savings", "Fixed Deposit", "Gold Investment"]
                            },
                            {
                                "Tujuan": "House Saving",
                                "Instrumen" : ["Savings", "Fixed Deposit", "Gold Investment"]
                            },
                            {
                                "Tujuan": "Self Reward",
                                "Instrumen" : ["Savings", "Gold Investment"]
                            }
                        ]);
                    }
                }
            } else if (marriageStatus == "No"){
                if (financialRisk == "Yes"){
                    return ([
                        {
                            "Tujuan": "Retirement Fund",
                            "Instrumen" : ["Stock", "Mutual Funds"]
                        },
                        {
                            "Tujuan": "Hajj Fund",
                            "Instrumen" : ["Stock", "Mutual Funds"]
                        },
                        {
                            "Tujuan": "House Saving",
                            "Instrumen" : ["Stock", "Mutual Funds"]
                        },
                        {
                            "Tujuan": "Self Reward",
                            "Instrumen" : ["Stock", "Mutual Funds"]
                        },
                        {
                            "Tujuan": "Wedding Fund",
                            "Instrumen" : ["Stock", "Mutual Funds"]
                        }
                    ]);
                } else if (financialRisk == "No"){
                    return ([
                        {
                            "Tujuan": "Retirement Fund",
                            "Instrumen" : ["Savings", "Fixed Deposit", "Gold Investment"]
                        },
                        {
                            "Tujuan": "Hajj Fund",
                            "Instrumen" : ["Savings", "Fixed Deposit", "Gold Investment"]
                        },
                        {
                            "Tujuan": "House Saving",
                            "Instrumen" : ["Savings", "Fixed Deposit", "Gold Investment"]
                        },
                        {
                            "Tujuan": "Self Reward",
                            "Instrumen" : ["Savings", "Gold Investment"]
                        },
                        {
                            "Tujuan": "Wedding Fund",
                            "Instrumen" : ["Savings", "Gold Investment"]
                        }
                    ]);
                }
            }
        } else if (age >= 40 && age <= 49) {
            if (marriageStatus == "Yes") {
                if (hasChildren == "Yes"){
                    if (financialRisk == "Yes"){
                        return ([
                            {
                                "Tujuan": "Retirement Fund",
                                "Instrumen" : ["Stock", "Mutual Funds"]
                            },
                            {
                                "Tujuan": "Hajj Fund",
                                "Instrumen" : ["Stock", "Mutual Funds"]
                            },
                            {
                                "Tujuan": "Child Education Fund",
                                "Instrumen" : ["Stock", "Mutual Funds"]
                            },
                            {
                                "Tujuan": "Self Reward",
                                "Instrumen" : ["Stock", "Mutual Funds"]
                            },
                        ]);
                    } else if (financialRisk == "No"){
                        return ([
                            {
                                "Tujuan": "Retirement Fund",
                                "Instrumen" : ["Savings", "Fixed Deposit", "Gold Investment"]
                            },
                            {
                                "Tujuan": "Hajj Fund",
                                "Instrumen" : ["Savings", "Fixed Deposit", "Gold Investment"]
                            },
                            {
                                "Tujuan": "Child Education Fund",
                                "Instrumen" : ["Savings", "Gold Investment"]
                            },
                            {
                                "Tujuan": "Self Reward",
                                "Instrumen" : ["Savings", "Gold Investment"]
                            },
                        ]);
                    }
                } else if (hasChildren == "No"){
                    if (financialRisk == "Yes"){
                        return ([
                            {
                                "Tujuan": "Retirement Fund",
                                "Instrumen" : ["Stock", "Mutual Funds"]
                            },
                            {
                                "Tujuan": "Hajj Fund",
                                "Instrumen" : ["Stock", "Mutual Funds"]
                            },
                            {
                                "Tujuan": "Self Reward",
                                "Instrumen" : ["Stock", "Mutual Funds"]
                            },
                        ]);
                    } else if (financialRisk == "No"){
                        return ([
                            {
                                "Tujuan": "Retirement Fund",
                                "Instrumen" : ["Savings", "Fixed Deposit", "Gold Investment"]
                            },
                            {
                                "Tujuan": "Hajj Fund",
                                "Instrumen" : ["Savings", "Fixed Deposit", "Gold Investment"]
                            },
                            {
                                "Tujuan": "Self Reward",
                                "Instrumen" : ["Savings", "Gold Investment"]
                            },
                        ]);
                    }
                }
            } else if (marriageStatus == "No"){
                if (financialRisk == "Yes"){
                    return ([
                        {
                            "Tujuan": "Retirement Fund",
                            "Instrumen" : ["Stock", "Mutual Funds"]
                        },
                        {
                            "Tujuan": "Hajj Fund",
                            "Instrumen" : ["Stock", "Mutual Funds"]
                        },
                        {
                            "Tujuan": "Self Reward",
                            "Instrumen" : ["Stock", "Mutual Funds"]
                        },
                    ]);
                } else if (financialRisk == "No"){
                    return ([
                        {
                            "Tujuan": "Retirement Fund",
                            "Instrumen" : ["Savings", "Fixed Deposit", "Gold Investment"]
                        },
                        {
                            "Tujuan": "Hajj Fund",
                            "Instrumen" : ["Savings", "Fixed Deposit", "Gold Investment"]
                        },
                        {
                            "Tujuan": "Self Reward",
                            "Instrumen" : ["Savings", "Gold Investment"]
                        },
                    ]);
                }
            }
        } else if (age >= 50 && age <= 59) {
            if (marriageStatus == "Yes") {
                if (hasChildren == "Yes"){
                    if (financialRisk == "Yes"){
                        return ([
                            {
                                "Tujuan": "Retirement Fund",
                                "Instrumen" : ["Stock", "Mutual Funds"]
                            },
                            {
                                "Tujuan": "Hajj Fund",
                                "Instrumen" : ["Stock", "Mutual Funds"]
                            },
                            {
                                "Tujuan": "Self Reward",
                                "Instrumen" : ["Stock", "Mutual Funds"]
                            },
                        ]);
                    } else if (financialRisk == "No"){
                        return ([
                            {
                                "Tujuan": "Retirement Fund",
                                "Instrumen" : ["Savings", "Fixed Deposit", "Gold Investment"]
                            },
                            {
                                "Tujuan": "Hajj Fund",
                                "Instrumen" : ["Savings", "Fixed Deposit", "Gold Investment"]
                            },
                            {
                                "Tujuan": "Self Reward",
                                "Instrumen" : ["Savings", "Gold Investment"]
                            },
                        ]);
                    }
                } else if (hasChildren == "No"){
                    if (financialRisk == "Yes"){
                        return ([
                            {
                                "Tujuan": "Retirement Fund",
                                "Instrumen" : ["Stock", "Mutual Funds"]
                            },
                            {
                                "Tujuan": "Hajj Fund",
                                "Instrumen" : ["Stock", "Mutual Funds"]
                            },
                            {
                                "Tujuan": "Self Reward",
                                "Instrumen" : ["Stock", "Mutual Funds"]
                            },
                        ]);
                    } else if (financialRisk == "No"){
                        return ([
                            {
                                "Tujuan": "Retirement Fund",
                                "Instrumen" : ["Savings", "Fixed Deposit", "Gold Investment"]
                            },
                            {
                                "Tujuan": "Hajj Fund",
                                "Instrumen" : ["Savings", "Fixed Deposit", "Gold Investment"]
                            },
                            {
                                "Tujuan": "Self Reward",
                                "Instrumen" : ["Savings", "Gold Investment"]
                            },
                        ]);
                    }
                }
            } else if (marriageStatus == "No"){
                if (financialRisk == "Yes"){
                    return ([
                        {
                            "Tujuan": "Retirement Fund",
                            "Instrumen" : ["Stock", "Mutual Funds"]
                        },
                        {
                            "Tujuan": "Hajj Fund",
                            "Instrumen" : ["Stock", "Mutual Funds"]
                        },
                        {
                            "Tujuan": "Self Reward",
                            "Instrumen" : ["Stock", "Mutual Funds"]
                        },
                    ]);
                } else if (financialRisk == "No"){
                    return ([
                        {
                            "Tujuan": "Retirement Fund",
                            "Instrumen" : ["Savings", "Fixed Deposit", "Gold Investment"]
                        },
                        {
                            "Tujuan": "Hajj Fund",
                            "Instrumen" : ["Savings", "Fixed Deposit", "Gold Investment"]
                        },
                        {
                            "Tujuan": "Self Reward",
                            "Instrumen" : ["Savings", "Gold Investment"]
                        },
                    ]);
                }
            }
        }
    }

    const convertStringToDate = (birthDate) => {
        var birthDate = birthDate.substring(0,2) + "-" + birthDate.substring(2,4) + "-" + birthDate.substring(4,birthDate.length)
        birthDate = new Date(birthDate);
        return birthDate;
    }

    const getAge = (birthDate) => {
        var today = new Date();
        var age_now = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate()))
        {
            age_now--;
        }
        return age_now;
    }

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

const mapStateToProps = (state) => {
    return {
      auth: state.auth,
    };
  };

export default connect(mapStateToProps)(Quiz);