import {
    Typography,
    Button,
    TextField,
    Card,
    CardContent,
    CardActions,
    Stack,
  } from "@mui/material";

const CardIncome = ({ nextStep, handleChange, prevStep }) => {
    const Next = e => {
        e.preventDefault();
        nextStep();
    }

    const Back = e => {
        e.preventDefault();
        prevStep();
    }
    
    return (
        <div className="pickup card">
            <Typography
                variant="body1"
                textAlign="left"
                fontSize="128px"
                marginBottom="-80px"
            >
                💰
            </Typography>
            <Card
                sx={{
                    border: "1px solid rgba(0, 0, 0, 0.08)",
                    boxShadow: "0px 10px 0px #B08BB6",
                    borderRadius: "40px",
                    backgroundColor: "#FFFFFF",
                    padding: '3rem 0 3rem 0',
                    marginBottom: '10rem',
                }}
            >
                <CardContent>
                    <Typography
                        component="h3"
                        variant="body1"
                        fontWeight="bold"
                        textAlign="left"
                        sx={{
                            marginBottom: "1rem",
                        }}
                    >
                    What is your average monthly income?
                    </Typography>
                    <div>
                    <TextField
                        name="income"
                        id="filled-basic"
                        variant="filled"
                        size="small"
                        type="text"
                        placeholder="Rp"
                        onChange={e => handleChange(e)}
                        InputProps={{
                            disableUnderline: true,
                            sx: {
                                width: "16rem",
                                borderRadius: "10px",
                                backgroundColor: "#F7F6F6",
                                "& .MuiFilledInput-input": {
                                    paddingTop: "10px",
                                    paddingBottom: "10px",
                                    backgroundColor: "#F7F6F6",
                                    borderRadius: "10px",
                                },
                            },
                        }}
                    />
                    </div>
                </CardContent>
                <CardActions
                    style={{ justifyContent: "center", paddingTop: "3rem" }}
                >
                    <Stack
                        direction="row"
                        alignItems="center"
                        spacing={2}
                    >
                    <Button
                        size="big"
                        variant="text"
                        className="semi-bold"
                        sx = {{
                            color: "black",
                            borderRadius: '10px',
                            width: '7rem',
                            padding: '0.5rem 0 0.5rem 0',
                        }}
                        onClick={ Back }
                    >
                        Back
                    </Button>
                    <Button
                        size="big"
                        variant="contained"
                        className="semi-bold"
                        sx = {{
                            backgroundColor: "#EBA90D",
                            borderRadius: '10px',
                            width: '7rem',
                            padding: '0.5rem 0 0.5rem 0',
                            "&.MuiButtonBase-root":{
                                backgroundColor: "#EBA90D",
                            }
                        }}
                        onClick={ Next }
                    >
                        Next
                    </Button>
                    </Stack>
                </CardActions>
            </Card>
        </div>
    );
}

export default CardIncome;