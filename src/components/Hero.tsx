import { Box, Button, Typography, Container } from '@mui/material';
import { useContext } from "react";
import { MainContext } from "../context/mainContext";


const Hero = () => {
    const { primaryGreen, fetchedData } = useContext(MainContext);
    console.log("Products Data", fetchedData);

    return (
        <Box
            className="bg-hero1 title-text-shadow5"
            sx={{
                // backgroundImage: 'url(../assets/bg1.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                width: '100%',
                height: window.innerWidth > 768 ? '70vh' : '72vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                textAlign: 'center',
                p: 4,
            }}
        >
            <div 
                style={{ width: window.innerWidth > 768 ? "32%" : "96%" }} 
                className='bg-slate-200 rounded-xl flex-center h-[40px] mt-16 mb-4'
            >
                <Typography 
                    // variant={window.innerWidth > 500 ? "h3" : "h5"} 
                    fontWeight="bold" 
                    // gutterBottom 
                    className="title-text-shadow1 outline-4 outline-slate-800 !important"
                    sx={{ 
                        color: primaryGreen, 
                        marginTop: window.innerWidth > 500 ? 0 : 0, 
                        letterSpacing: window.innerWidth > 500 ? 0 : -2,
                        outlineWidth: 4, outlineColor: "#fff",
                        fontSize: window.innerWidth > 500 ? 30 : 26,
                        width: "100%",
                    }}
                >
                    Judyhub Online Market
                </Typography>
            </div>
            <Container>
                <Typography 
                    variant={window.innerWidth > 768 ? "h3" : "h4"} 
                    fontWeight="bold" 
                    gutterBottom
                >
                    Shop the Latest Trends
                </Typography>
                <Typography variant={window.innerWidth > 768 ? "h4" : "h6"} gutterBottom>
                    Discover exclusive deals and new arrivals every day.
                </Typography>
                <Button 
                    variant="contained" 
                    size="large" 
                    className="shadow-inner"
                    sx={{ 
                        backgroundColor: primaryGreen, 
                        marginTop: window.innerWidth > 768 ? 2 : 5,
                        width: window.innerWidth > 768 ? "20%" : "60%",
                        fontSize: window.innerWidth > 768 ? 18 : 16,
                    }}
                >
                    Shop Now
                </Button>
            </Container>
        </Box>
    );
};

export default Hero;


