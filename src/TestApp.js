import React, { useState, useEffect } from "react";
import { AppBar, Toolbar, Typography, Button, Container, Grid, Card, CardContent, CardMedia, Box, List, ListItem, ListItemIcon, ListItemText, Paper } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Construction, Business, Handshake, Email, CheckCircle, Build, AccountTree, EmojiEvents } from "@mui/icons-material";

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

export default function TestApp() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 670) {
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
            <Box sx={{ flexGrow: 1, bgcolor: "background.default" }}>
                {/* Header */}
                {isScrolled && (
                    <AppBar
                        position="fixed"
                        sx={{
                            bgcolor: "primary.main",
                            // backgroundImage:  "none" : 'url("https://ik.imagekit.io/ably/public/blog-assets/2023/04/construction-blueprint.jpg")',
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            transition: "height 1.5s width 1.5s",
                            boxShadow: 1,
                            transitionTimingFunction: "ease",
                        }}
                    >
                        <Toolbar>
                            <Typography variant="h6" component="div" sx={{ flexGrow: 1, display: "flex", alignItems: "center" }}>
                                <Construction sx={{ mr: 1 }} />
                                BuildCo
                            </Typography>
                            <Button color="inherit">Home</Button>
                            <Button color="inherit">About</Button>
                            <Button color="inherit">Projects</Button>
                            <Button color="inherit">Services</Button>
                            <Button color="inherit">Contact</Button>
                        </Toolbar>
                    </AppBar>
                )}

                {/* Spacer to prevent content from going under the AppBar */}
                {/* <Toolbar /> */}

                {/* Hero Section */}
                <Box
                    sx={{
                        backgroundImage: 'url("https://losangelesgeneralcontractor.com/wp-content/uploads/2017/03/best-general-contractor-Los-Angeles.jpg")',
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        height: "600px",
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
                    }}
                >
                    {!isScrolled && (
                        <AppBar
                            position="fixed"
                            sx={{
                                bgcolor: isScrolled ? "transparent" : "transparent",
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                transition: "height 1.5s width 1.5s",
                                boxShadow: isScrolled ? 1 : 0,
                                transitionTimingFunction: "ease",
                            }}
                        >
                            <Toolbar>
                                <Typography variant="h6" component="div" sx={{ flexGrow: 1, display: "flex", alignItems: "center" }}>
                                    <Construction sx={{ mr: 1 }} />
                                    BuildCo
                                </Typography>
                                <Button color="inherit">Home</Button>
                                <Button color="inherit">About</Button>
                                <Button color="inherit">Projects</Button>
                                <Button color="inherit">Services</Button>
                                <Button color="inherit">Contact</Button>
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

                {/* About Section */}
                <Container sx={{ my: 8 }}>
                    <Typography variant="h4" gutterBottom color="primary">
                        About BuildCo
                    </Typography>
                    <Grid container spacing={4}>
                        <Grid item xs={12} md={6}>
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
                        <Grid item xs={12} md={6}>
                            <Card elevation={3}>
                                <CardMedia component="img" height="400" image="https://ik.imagekit.io/ably/public/blog-assets/2023/04/modern-office-building.jpg" alt="Modern office building" />
                            </Card>
                        </Grid>
                    </Grid>
                </Container>

                {/* Services Section */}
                <Box sx={{ bgcolor: "background.paper", py: 8 }}>
                    <Container>
                        <Typography variant="h4" align="center" gutterBottom color="primary">
                            Our Services
                        </Typography>
                        <Grid container spacing={4} justifyContent="center">
                            {[
                                { icon: <Build />, title: "Commercial Construction", desc: "State-of-the-art office buildings and retail spaces" },
                                { icon: <AccountTree />, title: "Residential Development", desc: "Modern homes and apartment complexes" },
                                { icon: <Construction />, title: "Infrastructure Projects", desc: "Bridges, roads, and public facilities" },
                            ].map((service, index) => (
                                <Grid item xs={12} sm={6} md={4} key={index}>
                                    <Paper elevation={3} sx={{ p: 3, height: "100%", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
                                        <Box sx={{ mb: 2, color: "primary.main" }}>{service.icon}</Box>
                                        <Typography variant="h6" gutterBottom>
                                            {service.title}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {service.desc}
                                        </Typography>
                                    </Paper>
                                </Grid>
                            ))}
                        </Grid>
                    </Container>
                </Box>

                {/* Projects Showcase */}
                <Container sx={{ my: 8 }}>
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

                {/* Partner Section */}
                <Box sx={{ bgcolor: "background.paper", py: 8 }}>
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
                <Container sx={{ my: 8 }}>
                    <Typography variant="h4" align="center" gutterBottom color="primary">
                        Our Achievements
                    </Typography>
                    <Grid container spacing={4} justifyContent="center">
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

                {/* Footer */}
                <Box sx={{ bgcolor: "primary.main", color: "white", py: 6 }}>
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
