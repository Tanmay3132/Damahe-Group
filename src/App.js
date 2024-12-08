import React, { useState, useEffect } from "react";
import { Typography, Button, Container, Grid, Box, Divider, Fab } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Handshake, Email, AddIcCallOutlined } from "@mui/icons-material";
import CustomCarousel from "./Components/Carousel";
import ContactForm from "./Components/ContactUs";
import EnhancedCollageProjects from "./Components/FeatureProjects";
import HeaderComponent from "./Components/HeaderComponent";
import Home from "./Components/Home";
import About from "./Components/About";
import { logo } from "./util/logoBase64";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

// Custom theme
const theme = createTheme({
    palette: {
        primary: {
            main: "#1565c0", // Deep blue
        },
        secondary: {
            main: "#ffa000", // Amber for accents
        },
        background: {
            default: "#f5f5f5", // Light gray background
        },
    },
});

export default function App() {
    const [isScrolled, setIsScrolled] = useState(false);

    const scrollToSection = (query) => {
        const section = document.querySelector(query);
        if (section) {
            section.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 580) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <ThemeProvider theme={theme}>
            <Fab
                color="success"
                aria-label="add"
                sx={{ position: "fixed", bottom: 130, right: 20, zIndex: 90 }}
                onClick={() => window.open("https://api.whatsapp.com/send/?phone=+918767860463&text=Hello!%20Can%20I%20get%20more%20info%20on%20this?&type=phone_number&app_absent=0")}
            >
                <WhatsAppIcon />
            </Fab>
            <Fab color="primary" aria-label="add" sx={{ position: "fixed", bottom: 70, right: 20, zIndex: 90 }} onClick={() => window.open("https://www.facebook.com/DCC.2004")}>
                <FacebookIcon />
            </Fab>
            <Fab
                aria-label="add"
                sx={{ position: "fixed", bottom: 10, right: 20, zIndex: 90, background: "linear-gradient(135deg, #FF6A00 0%, #EE0979 30%, #7928CA 100%)", color: "white" }}
                onClick={() => window.open("https://www.instagram.com/damahe_group?igsh=MTVvbXV3cnc4ZzE0MA==")}
            >
                <InstagramIcon />
            </Fab>
            <Box
                sx={{
                    flexGrow: 1,
                    bgcolor: "#fcf7f0",
                    boxShadow: "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
                    backgroundImage: `url(https://www.adani.com/-/media/Project/Adani/Background-Images/bg-business.png)`,
                }}
            >
                {/* Header Section */}

                <HeaderComponent isScrolled={isScrolled} scrollToSection={scrollToSection} />

                {/* Home Section */}
                <Home isScrolled={isScrolled} scrollToSection={scrollToSection} />

                {/* About Section */}
                <About />

                {/* Services Section */}
                <Typography id="Projects" variant="h3" align="center" gutterBottom color="primary">
                    Featured Projects
                </Typography>
                <EnhancedCollageProjects />

                {/* Our Services */}

                <Typography id="Services" variant="h3" align="center" gutterBottom color="primary">
                    Our Services
                </Typography>
                <CustomCarousel />
                <Divider sx={{ my: 4 }} />

                {/*   Strategic Partners Section */}
                {/* <Typography variant="h4" align="center" gutterBottom color="primary">
                    Strategic Partners
                </Typography>
                <Partners /> */}

                {/* Contact Us Section*/}
                <Typography id="Contact" mt={8} mb={6} variant="h3" align="center" gutterBottom color="primary">
                    Contact Us
                </Typography>
                <Container sx={{ minWidth: "70vw" }}>
                    <ContactForm />
                </Container>

                {/* Footer */}
                <Box
                    sx={{
                        boxShadow: "0px -6px 24px -6px rgba(0,0,0,0.75)",
                        color: "white",
                        py: 6,
                        background: "linear-gradient(12deg, hsla(20, 6%, 6%, 1) 30%, hsla(26, 75%, 19%, 1) 88%)",
                        // backgroundImage: `url(https://www.adani.com/-/media/Project/Adani/Background-Images/bg-business.png)`,
                    }}
                >
                    <Container>
                        <Grid container spacing={4}>
                            <Grid item xs={12} sm={4}>
                                <Typography variant="h6" gutterBottom sx={{ display: "flex", alignItems: "center", ml: 4 }}>
                                    <img src={logo} alt="Damahe Group" width={70} />
                                </Typography>
                                <Typography variant="body2">
                                    Plot No 21, Sadashiv Nagar
                                    <br />
                                    Near Bandhan Celebrations,
                                    <br />
                                    Nagpur, 440027
                                </Typography>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <Typography variant="h6" gutterBottom sx={{ display: "flex", alignItems: "center" }}>
                                    <Handshake sx={{ mr: 1 }} />
                                    Quick Links
                                </Typography>
                                <Typography variant="body2" component="div">
                                    <Button color="inherit" sx={{ display: "block" }}>
                                        About Us
                                    </Button>
                                    <Button color="inherit" sx={{ display: "block" }}>
                                        Our Projects
                                    </Button>
                                    <Button color="inherit" sx={{ display: "block" }}>
                                        Careers
                                    </Button>
                                    <Button color="inherit" sx={{ display: "block" }}>
                                        News
                                    </Button>
                                </Typography>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <Typography variant="h6" gutterBottom sx={{ display: "flex", alignItems: "center" }}>
                                    <Email sx={{ mr: 1 }} />
                                    Contact Us
                                </Typography>
                                <Typography variant="body2">
                                    Email: damahegroup@gmail.com
                                    <br />
                                    Phone: +918767860463
                                </Typography>
                            </Grid>
                        </Grid>
                        <Box sx={{ mt: 4, textAlign: "center" }}>
                            <Typography variant="body2">© {new Date().getFullYear()} Damahe Group. All rights reserved.</Typography>
                        </Box>
                    </Container>
                </Box>
            </Box>
        </ThemeProvider>
    );
}

/*
// {
//      <Button
//                                 color="inherit"
//                                 onClick={() => {
//                                     window.scrollTo({
//                                         top: 0,
//                                         left: 0,
//                                         behavior: "smooth",
//                                     });
//                                 }}
//                             >
//                                 Home
//                             </Button>
//                             <Grid mx={1} />
//                             <Button
//                                 color="inherit"
//                                 onClick={() => {
//                                     window.scrollTo({
//                                         top: 850,
//                                         left: 0,
//                                         behavior: "smooth",
//                                     });
//                                 }}
//                             >
//                                 About
//                             </Button>
//                             <Grid mx={1} />
//                             <Button
//                                 color="inherit"
//                                 onClick={() => {
//                                     window.scrollTo({
//                                         top: 2200,
//                                         left: 0,
//                                         behavior: "smooth",
//                                     });
//                                 }}
//                             >
//                                 Projects
//                             </Button>
//                             <Grid mx={1} />
//                             <Button
//                                 color="inherit"
//                                 onClick={() => {
//                                     window.scrollTo({
//                                         top: 1950,
//                                         left: 0,
//                                         behavior: "smooth",
//                                     });
//                                 }}
//                             >
//                                 Services
//                             </Button>
//                             <Grid mx={1} />
//                             <Button
//                                 color="inherit"
//                                 onClick={() => {
//                                     window.scrollTo({
//                                         top: 3000,
//                                         left: 0,
//                                         behavior: "smooth",
//                                     });
//                                 }}
//                             >
//                                 Contact
//                             </Button> 
}*/
