import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { Box, Container, Grid } from "@mui/system";
import React from "react";
import Carousel from "react-material-ui-carousel";
import { logo } from "../util/logoBase64";
import { AnimatePresence, motion } from "framer-motion";

var items = [
    {
        img: "https://i0.wp.com/picjumbo.com/wp-content/uploads/modern-office-building-in-the-city-free-photo.jpg?w=2210&quality=70",
    },
    {
        img: "https://losangelesgeneralcontractor.com/wp-content/uploads/2017/03/best-general-contractor-Los-Angeles.jpg",
    },
    {
        img: "https://www.ianfulgar.com/wp-content/uploads/2020/10/ian-fulgar-architect-icdc-modern-office-building-design-03.jpg",
    },
];
export default function Home({ isScrolled, scrollToSection }) {
    return (
        <Carousel
            autoPlay={true}
            interval={5000}
            animation="fade"
            stopAutoPlayOnHover={false}
            navButtonsAlwaysInvisible={true}
            IndicatorIcon={false}
            fullHeightHover={false}
            navButtonsAlwaysVisible={false}
            sx={{ transition: "opacity ease-out 1s" }}
        >
            {items.map((item, i) => (
                <Box
                    id="Home"
                    key={i}
                    sx={{
                        backgroundImage: `url(${item.img})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        height: "100vh",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        position: "relative",
                        "&::before": {
                            content: '""',
                            position: "absolute",
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            backgroundColor: "rgba(0, 0, 0, 0.5)",
                        },
                        boxShadow: "rgba(0, 0, 0, 0.19) 0px 20px 20px, rgba(0, 0, 0, 0.23) 0px 8px 6px",
                    }}
                >
                    {!isScrolled && (
                        <AppBar
                            position="fixed"
                            sx={{
                                height: "20vh",
                                minHeight: "20vh !important;",
                                bgcolor: "transparent",
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                transition: "height 1.5s width 1.5s",
                                boxShadow: isScrolled ? 1 : 0,
                                transitionTimingFunction: "ease",
                            }}
                        >
                            <Toolbar>
                                <Grid mx={1.5}></Grid>

                                <Typography variant="h6" component="div" sx={{ flexGrow: 1, display: "flex", alignItems: "center" }}>
                                    <img src={logo} alt="Damahe Group" width={70} />
                                    Damahe Group
                                </Typography>
                                <Button
                                    color="inherit"
                                    onClick={() => {
                                        scrollToSection("#Home");
                                    }}
                                >
                                    Home
                                </Button>
                                <Grid mx={1} />
                                <Button
                                    color="inherit"
                                    onClick={() => {
                                        scrollToSection("#About");
                                    }}
                                >
                                    About
                                </Button>
                                <Grid mx={1} />
                                <Button
                                    color="inherit"
                                    onClick={() => {
                                        scrollToSection("#Projects");
                                    }}
                                >
                                    Projects
                                </Button>
                                <Grid mx={1} />
                                <Button
                                    color="inherit"
                                    onClick={() => {
                                        scrollToSection("#Services");
                                    }}
                                >
                                    Services
                                </Button>
                                <Grid mx={1} />
                                <Button
                                    variant="outlined"
                                    color="inherit"
                                    onClick={() => {
                                        scrollToSection("#Contact");
                                    }}
                                >
                                    Contact Us
                                </Button>
                                <Grid mx={1.5} />
                            </Toolbar>
                        </AppBar>
                    )}

                    <Container sx={{ position: "relative", zIndex: 1 }}>
                        <Typography variant="h2" align="center" gutterBottom sx={{ color: "white", fontWeight: "bold" }}>
                            Building Tomorrow's World Today
                        </Typography>
                        <Typography variant="h5" align="center" sx={{ color: "white", mb: 4 }}>
                            Innovative Construction Solutions for a Sustainable Future
                        </Typography>
                        {/* <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
                            <Button variant="contained" color="secondary" size="large">
                                Our Projects
                            </Button>
                            <Button variant="outlined" sx={{ color: "white", borderColor: "white" }} size="large">
                                Contact Us
                            </Button>
                        </Box> */}
                    </Container>
                </Box>
            ))}
        </Carousel>
    );
}
