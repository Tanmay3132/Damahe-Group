import React, { useState, useEffect, useRef } from "react";
import { AppBar, Toolbar, Typography, Button, Container, Grid, Card, CardContent, CardMedia, Box, List, ListItem, ListItemIcon, ListItemText, Paper, Divider, IconButton } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Construction, Business, Handshake, Email, CheckCircle, Build, AccountTree, EmojiEvents, Webhook, ArrowBack, ArrowForward } from "@mui/icons-material";
import Carousel from "react-material-ui-carousel";
import { styled } from "@mui/system";
import CustomCarousel from "./Carousel";

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

    let serviceItems = [
        {
            icon: <Build />,
            title: "Commercial Construction",
            desc: "State-of-the-art office buildings and retail spaces",
            img: "https://losangelesgeneralcontractor.com/wp-content/uploads/2017/03/best-general-contractor-Los-Angeles.jpg",
            offset: -1,
        },
        {
            icon: <AccountTree />,
            title: "Residential Development",
            desc: "Modern homes and apartment complexes",
            img: "https://media.licdn.com/dms/image/D4D12AQHV-BxE28qLAA/article-cover_image-shrink_600_2000/0/1691157261055?e=2147483647&v=beta&t=ftEcB866KTP3I-OHfiDoEY6YRuDOlamNwtF6wyt4OCQ",
            offset: 0,
        },
        {
            icon: <Webhook />,
            title: "Software Development",
            desc: "Empowering Ideas Through Technology",
            img: "https://img.wazobia.tech/https://sytbuildr.s3.eu-west-2.amazonaws.com/0406191c-f351-4a58-b164-b9521b3d78c5/typesofsoftwareengineering.jpeg_O1teey?tr=w-1500,cr-0.0.1500.900",
            offset: 1,
        },
    ];

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

    console.log(window.scrollY);

    return (
        <ThemeProvider theme={theme}>
            <Box
                sx={{
                    flexGrow: 1,
                    bgcolor: "#fcf7f0",
                    boxShadow: "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
                    backgroundImage: `url(https://www.adani.com/-/media/Project/Adani/Background-Images/bg-business.png)`,
                }}
            >
                {/* Header */}
                {isScrolled && (
                    <AppBar
                        position="fixed"
                        className="headerBackGround"
                        sx={{
                            background: "linear-gradient(90deg, hsla(36, 30%, 21%, 1) 1%, hsla(26, 100%, 19%, 1) 88%)",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            transition: "height 1.5s width 1.5s",
                            transitionTimingFunction: "ease",
                            boxShadow: "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
                        }}
                    >
                        <Toolbar>
                            <Grid mx={1.5}></Grid>

                            <Typography variant="h6" component="div" sx={{ flexGrow: 1, display: "flex", alignItems: "center" }}>
                                <Construction sx={{ mr: 1 }} />
                                Damahe Group
                            </Typography>
                            <Button
                                color="inherit"
                                onClick={() => {
                                    window.scrollTo({
                                        top: 0,
                                        left: 0,
                                        behavior: "smooth",
                                    });
                                }}
                            >
                                Home
                            </Button>
                            <Grid mx={1} />
                            <Button
                                color="inherit"
                                onClick={() => {
                                    window.scrollTo({
                                        top: 850,
                                        left: 0,
                                        behavior: "smooth",
                                    });
                                }}
                            >
                                About
                            </Button>
                            <Grid mx={1} />
                            <Button
                                color="inherit"
                                onClick={() => {
                                    window.scrollTo({
                                        top: 2200,
                                        left: 0,
                                        behavior: "smooth",
                                    });
                                }}
                            >
                                Projects
                            </Button>
                            <Grid mx={1} />
                            <Button
                                color="inherit"
                                onClick={() => {
                                    window.scrollTo({
                                        top: 1950,
                                        left: 0,
                                        behavior: "smooth",
                                    });
                                }}
                            >
                                Services
                            </Button>
                            <Grid mx={1} />
                            <Button
                                color="inherit"
                                onClick={() => {
                                    window.scrollTo({
                                        top: 3000,
                                        left: 0,
                                        behavior: "smooth",
                                    });
                                }}
                            >
                                Contact
                            </Button>
                            <Grid mx={1.5} />
                        </Toolbar>
                    </AppBar>
                )}

                {/* Spacer to prevent content from going under the AppBar */}
                {/* <Toolbar /> */}

                {/* Hero Section */}
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
                                boxShadow: "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
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
                                            <Construction sx={{ mr: 1 }} />
                                            Damahe Group
                                        </Typography>
                                        <Button
                                            color="inherit"
                                            onClick={() => {
                                                window.scrollTo({
                                                    top: 0,
                                                    left: 0,
                                                    behavior: "smooth",
                                                });
                                            }}
                                        >
                                            Home
                                        </Button>
                                        <Grid mx={1} />
                                        <Button
                                            color="inherit"
                                            onClick={() => {
                                                window.scrollTo({
                                                    top: 850,
                                                    left: 0,
                                                    behavior: "smooth",
                                                });
                                            }}
                                        >
                                            About
                                        </Button>
                                        <Grid mx={1} />
                                        <Button
                                            color="inherit"
                                            onClick={() => {
                                                window.scrollTo({
                                                    top: 2280,
                                                    left: 0,
                                                    behavior: "smooth",
                                                });
                                            }}
                                        >
                                            Projects
                                        </Button>
                                        <Grid mx={1} />
                                        <Button
                                            color="inherit"
                                            onClick={() => {
                                                window.scrollTo({
                                                    top: 1950,
                                                    left: 0,
                                                    behavior: "smooth",
                                                });
                                            }}
                                        >
                                            Services
                                        </Button>
                                        <Grid mx={1} />
                                        <Button
                                            color="inherit"
                                            onClick={() => {
                                                window.scrollTo({
                                                    top: 3000,
                                                    left: 0,
                                                    behavior: "smooth",
                                                });
                                            }}
                                        >
                                            Contact
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
                                <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
                                    <Button variant="contained" color="secondary" size="large">
                                        Our Projects
                                    </Button>
                                    <Button variant="outlined" sx={{ color: "white", borderColor: "white" }} size="large">
                                        Contact Us
                                    </Button>
                                </Box>
                            </Container>
                        </Box>
                    ))}
                </Carousel>

                {/* About Section */}
                <Container sx={{ my: 8 }} maxWidth="lg" disableGutters={true}>
                    <Grid container>
                        <Grid item md={0.5} />
                        <Grid item md={11.5}>
                            <Typography variant="h4" gutterBottom color="primary">
                                About BuildCo
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid
                        container
                        spacing={2}
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            bgcolor: "#fcf7f0",
                            boxShadow: "0px -6px 153px 7px rgba(252,247,240,1)",
                        }}
                    >
                        <Grid item xs={12} md={5}>
                            <Typography variant="body1" paragraph>
                                BuildCo is a leading construction company with over 25 years of experience in delivering high-quality projects that shape the future of our cities and communities. We
                                specialize in commercial, residential, and infrastructure development, always striving for innovation and excellence.
                            </Typography>
                            <Typography variant="body1" paragraph>
                                Our team of expert engineers, architects, and project managers work together to bring cutting-edge solutions to every project, ensuring sustainability, efficiency, and
                                unparalleled quality in all our endeavors.
                            </Typography>
                            <List>
                                <ListItem>
                                    <ListItemIcon>
                                        <CheckCircle color="secondary" />
                                    </ListItemIcon>
                                    <ListItemText primary="25+ Years of Experience" />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <CheckCircle color="secondary" />
                                    </ListItemIcon>
                                    <ListItemText primary="500+ Completed Projects" />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <CheckCircle color="secondary" />
                                    </ListItemIcon>
                                    <ListItemText primary="100% Client Satisfaction" />
                                </ListItem>
                            </List>
                        </Grid>
                        <Grid item md={1}></Grid>
                        <Grid item xs={12} md={5} width={"100%"}>
                            <Card
                                sx={{
                                    borderRadius: "0.7rem",
                                    boxShadow:
                                        "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
                                }}
                            >
                                <CardMedia
                                    component="img"
                                    height="400"
                                    image="https://i0.wp.com/bostonrealestatetimes.com/wp-content/uploads/2019/03/Archi-Europe.jpg?fit=528%2C351&ssl=1"
                                    alt="Modern office building"
                                />
                            </Card>
                        </Grid>
                    </Grid>
                </Container>

                {/* Services Section */}

                <Container sx={{ my: 10 }}>
                    <Typography variant="h4" align="center" gutterBottom color="primary">
                        Featured Projects
                    </Typography>
                    <Grid container spacing={4}>
                        {[
                            {
                                image: "https://ik.imagekit.io/ably/public/blog-assets/2023/04/skyscraper-construction.jpg",
                                title: "Skyline Tower",
                                desc: "A 50-story mixed-use skyscraper in the heart of downtown",
                            },
                            {
                                image: "https://ik.imagekit.io/ably/public/blog-assets/2023/04/eco-friendly-housing.jpg",
                                title: "Green Living Complex",
                                desc: "Sustainable residential community with solar power and green spaces",
                            },
                            {
                                image: "https://ik.imagekit.io/ably/public/blog-assets/2023/04/bridge-construction.jpg",
                                title: "River Crossing Bridge",
                                desc: "A 2-mile long cable-stayed bridge connecting two cities",
                            },
                        ].map((project, index) => (
                            <Grid item xs={12} sm={6} md={4} key={index}>
                                <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
                                    <CardMedia component="img" height="200" image={project.image} alt={project.title} />
                                    <CardContent sx={{ flexGrow: 1 }}>
                                        <Typography gutterBottom variant="h6" component="div">
                                            {project.title}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {project.desc}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>

                <Typography variant="h4" align="center" gutterBottom color="primary">
                    Our Services
                </Typography>
                {/* <Grid container width={"100vw"} px={3}>
                    <Grid item md={3} lg={3} xl={3} />
                    <Grid px={3} item md={6} lg={6} xl={6} borderRadius={"16px !important"} overflow={"hidden"}>
                        <Carousel
                            autoPlay={true}
                            interval={5000}
                            animation="fade"
                            stopAutoPlayOnHover={false}
                            navButtonsAlwaysInvisible={false}
                            fullHeightHover={false}
                            navButtonsAlwaysVisible={true}
                            navButtonsWrapperProps={{
                                position: "absolute",
                                height: "100px",
                                backgroundColor: "red",
                                top: "calc(50% - 70px)",
                                "&:hover": {
                                    "& $button": {
                                        backgroundColor: "red",
                                        filter: "brightness(120%)",
                                        opacity: "0.4",
                                    },
                                },
                            }}
                            sx={{
                                transition: "opacity ease-out 1s",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                borderRadius: "16px !important",
                                overflow: "hidden",
                            }}
                        >
                            {serviceItems.map((item, i) => (
                                <Box
                                    key={i}
                                    sx={{
                                        backgroundImage: `url(${item.img})`,
                                        backgroundSize: "cover",
                                        backgroundPosition: "center",
                                        height: "50vh",
                                        display: "flex",
                                        width: "56rem",
                                        borderRadius: "16px !important",
                                        alignItems: "center",
                                        overflow: "hidden",
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
                                    }}
                                >
                                    <Container sx={{ position: "relative", zIndex: 1 }}>
                                        <Typography variant="h2" align="center" gutterBottom sx={{ color: "white", fontWeight: "bold" }}>
                                            {item.title}
                                        </Typography>
                                        <Typography variant="h5" align="center" sx={{ color: "white", mb: 4 }}>
                                            {item.desc}
                                        </Typography>
                                    </Container>
                                </Box>
                            ))}
                        </Carousel>
                    </Grid>
                    <Grid item md={3} lg={3} xl={3} />
                </Grid> */}

                <CustomCarousel items={serviceItems} />

                {/* Projects Showcase */}

                {/* Partner Section */}
                <Box
                    sx={{
                        // bgcolor: "background.paper",
                        py: 8,

                        //  backgroundImage: `url(https://www.adani.com/-/media/Project/Adani/Background-Images/bg-business.png)`
                    }}
                >
                    <Container>
                        <Typography variant="h4" align="center" gutterBottom color="primary">
                            Our Strategic Partner
                        </Typography>
                        <Grid container justifyContent="center">
                            <Grid item xs={12} sm={8} md={6}>
                                <Card sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" } }}>
                                    <CardMedia
                                        component="img"
                                        sx={{ width: { sm: 200 }, height: { xs: 200, sm: "auto" } }}
                                        image="https://ik.imagekit.io/ably/public/blog-assets/2023/04/tech-company-logo.jpg"
                                        alt="TechBuild Solutions logo"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            TechBuild Solutions
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            TechBuild Solutions is our strategic partner, providing cutting-edge technology and software solutions for smart building management and construction
                                            automation. Together, we're revolutionizing the construction industry with AI-driven project management and IoT-enabled building systems.
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                    </Container>
                </Box>

                {/* Awards Section */}
                <Grid
                    sx={{
                        pt: 4,
                        pb: 15,
                        //  backgroundImage: `url(https://www.adani.com/-/media/Project/Adani/Background-Images/bg-business.png)`,
                        minHeight: "35vh",
                        minWidth: "90vw",
                    }}
                >
                    <Typography mt={8} mb={6} variant="h4" align="center" gutterBottom color="primary">
                        Our Achievements
                    </Typography>
                    <Container sx={{ minWidth: "70vw" }}>
                        <Grid container spacing={6} justifyContent="center">
                            {[
                                { year: "2023", award: "Sustainable Project of the Year" },
                                { year: "2022", award: "Best Commercial Development" },
                                { year: "2021", award: "Innovation in Construction Technology" },
                            ].map((achievement, index) => (
                                <Grid item xs={12} sm={4} key={index}>
                                    <Paper elevation={3} sx={{ p: 3, textAlign: "center" }}>
                                        <EmojiEvents color="secondary" sx={{ fontSize: 40, mb: 2 }} />
                                        <Typography variant="h6" gutterBottom>
                                            {achievement.award}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {achievement.year}
                                        </Typography>
                                    </Paper>
                                </Grid>
                            ))}
                        </Grid>
                    </Container>
                </Grid>

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
                                <Typography variant="h6" gutterBottom sx={{ display: "flex", alignItems: "center" }}>
                                    <Business sx={{ mr: 1 }} />
                                    BuildCo
                                </Typography>
                                <Typography variant="body2">
                                    123 Construction Ave
                                    <br />
                                    Cityville, State 12345
                                    <br />
                                    United States
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
                                    Email: info@buildco.com
                                    <br />
                                    Phone: (123) 456-7890
                                    <br />
                                    Fax: (123) 456-7891
                                </Typography>
                            </Grid>
                        </Grid>
                        <Box sx={{ mt: 4, textAlign: "center" }}>
                            <Typography variant="body2">© {new Date().getFullYear()} BuildCo. All rights reserved.</Typography>
                        </Box>
                    </Container>
                </Box>
            </Box>
        </ThemeProvider>
    );
}

// {
//     /* <Box
//                     sx={{
//                         backgroundImage: 'url("https://i0.wp.com/picjumbo.com/wp-content/uploads/modern-office-building-in-the-city-free-photo.jpg?w=2210&quality=70")',
//                         backgroundSize: "cover",
//                         backgroundPosition: "center",
//                         height: "600px",
//                         display: "flex",
//                         alignItems: "center",
//                         justifyContent: "center",
//                         position: "relative",
//                         "&::before": {
//                             content: '""',
//                             position: "absolute",
//                             top: 0,
//                             left: 0,
//                             right: 0,
//                             bottom: 0,
//                             backgroundColor: "rgba(0, 0, 0, 0.5)",
//                         },
//                         boxShadow: "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
//                         // box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
//                     }}
//                 >
//                     {!isScrolled && (
//                         <AppBar
//                             position="fixed"
//                             sx={{
//                                 bgcolor: "transparent",
//                                 backgroundSize: "cover",
//                                 backgroundPosition: "center",
//                                 transition: "height 1.5s width 1.5s",
//                                 boxShadow: isScrolled ? 1 : 0,
//                                 transitionTimingFunction: "ease",
//                             }}
//                         >
//                             <Toolbar>
//                                 <Typography variant="h6" component="div" sx={{ flexGrow: 1, display: "flex", alignItems: "center" }}>
//                                     <Construction sx={{ mr: 1 }} />
//                                     Damahe Group
//                                 </Typography>
//                                 <Button color="inherit">Home</Button>
//                                 <Button color="inherit">About</Button>
//                                 <Button color="inherit">Projects</Button>
//                                 <Button color="inherit">Services</Button>
//                                 <Button color="inherit">Contact</Button>
//                             </Toolbar>
//                         </AppBar>
//                     )}

//                     <Container sx={{ position: "relative", zIndex: 1 }}>
//                         <Typography variant="h2" align="center" gutterBottom sx={{ color: "white", fontWeight: "bold" }}>
//                             Building Tomorrow's World Today
//                         </Typography>
//                         <Typography variant="h5" align="center" sx={{ color: "white", mb: 4 }}>
//                             Innovative Construction Solutions for a Sustainable Future
//                         </Typography>
//                         <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
//                             <Button variant="contained" color="secondary" size="large">
//                                 Our Projects
//                             </Button>
//                             <Button variant="outlined" sx={{ color: "white", borderColor: "white" }} size="large">
//                                 Contact Us
//                             </Button>
//                         </Box>
//                     </Container>
//                 </Box> */
// }
