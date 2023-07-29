import { RequestQuote } from "@mui/icons-material";
import {
        Box,
        Typography,
        Button,
        TextField,
        Avatar
    } from "@mui/material";

const RecommendationCard = () => {
    return(
        <Box
            mt={2}
            mb={3}
            justifyContent="flex-start"
            sx = {{
                padding: "0.5rem",
                width: "20rem",
                borderRadius: "20px",
                border: "1px solid rgba(0, 0, 0, 0.08)",
                boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.1)",
            }}
        >
            <Box display="flex">
                <Box mr={3}>
                    <Avatar sx={{
                        backgroundColor: '#8D5795',
                        color: '#FFFFFF',
                        width: '4rem',
                        height: '4rem',
                    }}>
                        <RequestQuote
                            sx={{ cursor: "pointer" }}
                        />
                    </Avatar>
                </Box>
                <Box>
                    <Typography
                        component="h3"
                        variant="body1"
                        className="semi-bold"
                    >
                        Retirement Fund
                    </Typography>
                    <Box
                        display="flex"
                    >
                        <Button
                            sx = {{
                                fontSize: "12px",
                                borderRadius: "20px",
                                border: "1px solid #8D5795",
                                textAlign: "center",
                                color: "#8D5795",
                                padding: "0.2rem 0.5rem 0.2rem 0.5rem",
                                marginRight: "0.2rem"
                            }}
                        >
                            <Typography
                                sx = {{
                                    fontSize: "12px",
                                }}
                                variant="body1"
                            >
                                Fixed Deposit
                            </Typography>
                        </Button>
                        <Button
                            sx = {{
                                fontSize: "12px",
                                borderRadius: "20px",
                                border: "1px solid #8D5795",
                                textAlign: "center",
                                color: "#8D5795",
                                padding: "0 0.5rem 0 0.5rem",
                                marginRight: "0.2rem"
                            }}
                        >
                            <Typography
                                sx = {{
                                    fontSize: "12px",
                                }}
                                variant="body1"
                            >
                                Gold
                            </Typography>
                        </Button>
                    </Box>
                </Box>
            </Box>
            <Box display="flex" mt={2} mb={2} justifyContent="center" alignItems="center">
                <Typography
                    mr={2}
                    sx = {{
                        fontSize: "12px",
                        fontWeight: "bold",
                        justifyContent: "center"
                    }}
                    variant="body1"
                >
                    Goal:
                </Typography>
                <TextField
                    name="income"
                    id="filled-basic"
                    variant="filled"
                    size="small"
                    type="text"
                    placeholder="Rp"
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
                                height: "1rem"
                            },
                        },
                    }}
                />
            </Box>
        </Box>
    );
}

export default RecommendationCard;