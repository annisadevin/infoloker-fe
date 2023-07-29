
import {
    Typography,
    Button,
    TextField,
    Card,
    CardContent,
    CardActions,
    Stack,
    FormControl,
    FormControlLabel,
    RadioGroup,
    Radio,
  } from "@mui/material";
import './QuizCard.css';

const CardChoice = ({ nextStep, handleChange, prevStep, question, inputName, icon, nextText }) => {
    const Next = () => {
        nextStep();
    }

    const Back = e => {
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
                {icon}
            </Typography>
            <Card
                sx={{
                    border: "1px solid rgba(0, 0, 0, 0.08)",
                    boxShadow: "0px 10px 0px #B08BB6",
                    borderRadius: "40px",
                    backgroundColor: "#FFFFFF",
                    padding: '3rem 0 3rem 0',
                    marginBottom: '10rem'
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
                    { question }
                    </Typography>
                    <div>
                    <FormControl component="fieldset">
                        <RadioGroup
                            aria-label="demo"
                            name={inputName}
                            // value={value}
                            onChange={e => handleChange(e)}
                        >
                            <FormControlLabel
                                value="Yes"
                                control={
                                    <Radio
                                        sx={{
                                            '&.Mui-checked': {
                                                color: '#EBA90D',
                                            },
                                        }}
                                    />
                                }
                                label="Yes"
                                className="radio"
                            />
                            <FormControlLabel
                                value="No"
                                control={
                                    <Radio
                                        sx={{
                                            '&.Mui-checked': {
                                                color: '#EBA90D',
                                            },
                                        }}
                                    />
                                }
                                label="No"
                                className="radio"
                            />
                        </RadioGroup>
                    </FormControl>
                    </div>
                </CardContent>
                <CardActions
                    style={{ justifyContent: "center", paddingTop: "2rem" }}
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
                        { nextText }
                    </Button>
                    </Stack>
                </CardActions>
            </Card>
        </div>
    );
}

export default CardChoice;