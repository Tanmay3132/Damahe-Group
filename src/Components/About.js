import React from "react";
import { Container, Typography, Grid, Card, CardMedia, CardContent, List, ListItem, ListItemIcon, ListItemText, Divider, Box, Chip } from "@mui/material";
import { CheckCircle, Engineering, EmojiEvents, Diversity3 } from "@mui/icons-material";

export default function About() {
    return (
        <Container id="About" maxWidth="lg" sx={{ my: 8 }}>
            <Box textAlign="center" mb={6}>
                {/* <Chip label="About Us" color="primary" sx={{ mb: 2 }} /> */}
                <Typography variant="h3" gutterBottom>
                    Discover Damahe Group
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" sx={{ maxWidth: 600, mx: "auto" }}>
                    With over 25 years of experience, we're shaping the future of construction through innovation and excellence.
                </Typography>
            </Box>

            <Grid container spacing={4} alignItems="center" mb={8}>
                <Grid item xs={12} md={6}>
                    <Typography variant="h4" gutterBottom>
                        Our Story
                    </Typography>
                    <Typography variant="body1" paragraph>
                        Damahe Group was founded in 2012 with a vision to revolutionize the construction industry. From our humble beginnings as a small local contractor, we've grown into a leading
                        force in commercial, residential, and infrastructure development.
                    </Typography>
                    <Typography variant="body1" paragraph>
                        Our journey has been marked by a relentless pursuit of innovation, a commitment to sustainability, and an unwavering dedication to client satisfaction. Today, we're proud to be
                        at the forefront of modern construction techniques, delivering projects that stand as testaments to our expertise and vision.
                    </Typography>
                    <List>
                        {["25+ Years of Industry Experience", "500+ Successfully Completed Projects", "100% Client Satisfaction Rate", "50+ Industry Awards and Recognitions"].map((item, index) => (
                            <ListItem key={index} disablePadding>
                                <ListItemIcon>
                                    <CheckCircle color="secondary" />
                                </ListItemIcon>
                                <ListItemText primary={item} />
                            </ListItem>
                        ))}
                    </List>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Card elevation={3}>
                        <CardMedia
                            component="img"
                            height="400"
                            image="https://i0.wp.com/bostonrealestatetimes.com/wp-content/uploads/2019/03/Archi-Europe.jpg?fit=528%2C351&ssl=1"
                            alt="Modern office building"
                        />
                    </Card>
                </Grid>
            </Grid>

            <Grid container spacing={4} mb={8}>
                {[
                    {
                        icon: <Engineering fontSize="large" color="primary" />,
                        title: "Expert Team",
                        description: "Our diverse team of engineers, architects, and project managers brings a wealth of experience to every project.",
                    },
                    {
                        icon: <EmojiEvents fontSize="large" color="primary" />,
                        title: "Award-Winning Projects",
                        description: "Our innovative designs and sustainable practices have earned us recognition across the industry.",
                    },
                    {
                        icon: <Diversity3 fontSize="large" color="primary" />,
                        title: "Client-Centric Approach",
                        description: "We prioritize clear communication and collaboration, ensuring our clients' visions come to life.",
                    },
                ].map((item, index) => (
                    <Grid item xs={12} md={4} key={index}>
                        <Card elevation={2}>
                            <CardContent sx={{ textAlign: "center" }}>
                                {item.icon}
                                <Typography variant="h6" component="h3" gutterBottom>
                                    {item.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {item.description}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>

            <Divider sx={{ my: 4 }} />

            <Box textAlign="center">
                <Typography variant="h4" gutterBottom>
                    Our Commitment to Sustainability
                </Typography>
                <Typography variant="body1" paragraph sx={{ maxWidth: 800, mx: "auto" }}>
                    At BuildCo, we believe in building not just for today, but for tomorrow. Our commitment to sustainability drives us to incorporate eco-friendly practices and materials in all our
                    projects, ensuring a greener future for generations to come.
                </Typography>
                <Chip label="Learn More About Our Green Initiatives" color="secondary" clickable />
            </Box>
        </Container>
    );
}
