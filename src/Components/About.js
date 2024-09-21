import { CheckCircle } from "@mui/icons-material";
import { Card, CardMedia, Container, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material";
import React from "react";

export default function About() {
    return (
        <Container id="About" sx={{ my: 8 }} maxWidth="lg" disableGutters={true}>
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
    );
}
