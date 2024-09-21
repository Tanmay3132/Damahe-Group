import { Card, CardContent, CardMedia, Container, Grid, Typography } from "@mui/material";
import React from "react";

export default function Partners() {
    return (
        <Container sx={{ my: 10, width: "100vw", minWidth: "82.3vw" }}>
            <Grid container spacing={4}>
                {[
                    {
                        image: "https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/50dab922-5d48-4c6b-8725-7fd0755d9334/3a3f2d35-8167-4708-9ef0-bdaa980989f9.png",
                        title: "Dev Damahe",
                        desc: "A 50-story mixed-use skyscraper in the heart of downtown",
                    },
                    {
                        image: "https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/50dab922-5d48-4c6b-8725-7fd0755d9334/3a3f2d35-8167-4708-9ef0-bdaa980989f9.png",
                        title: "Lokesh Barwe",
                        desc: "Sustainable residential community with solar power and green spaces",
                    },
                    {
                        image: "https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/50dab922-5d48-4c6b-8725-7fd0755d9334/3a3f2d35-8167-4708-9ef0-bdaa980989f9.png",
                        title: "Tanmay Barapatre",
                        desc: "A 2-mile long cable-stayed bridge connecting two cities",
                    },
                ].map((project, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        {/* <Card sx={{ height: "15rem", display: "flex", alignItems: "end", backgroundImage: `url(${project.image})` }}>
                    <CardContent
                        sx={{
                            flexGrow: 0.5,
                            color: "white",
                            width: "60rem",
                            padding: "10px",
                            background: "rgba(0, 0, 0, 0.3)",
                            textAlign: "center",
                            transition: "transform 0.3s ease-in-out",
                        }}
                    >
                        <Typography gutterBottom variant="h6" component="div">
                            {project.title}
                        </Typography>
                        <Typography variant="body2">{project.desc}</Typography>
                    </CardContent>
                </Card> */}
                        <Card sx={{ display: "flex", height: "10rem", maxHeight: "10rem", flexDirection: { xs: "column", sm: "row" }, borderRadius: "80px 20px 20px 80px" }}>
                            <CardMedia
                                component="img"
                                sx={{ width: { sm: 150 }, height: { xs: 200, sm: "auto" }, borderRadius: "100px !important", zIndex: "300" }}
                                image={project.image}
                                alt="TechBuild Solutions logo"
                            />
                            <CardContent>
                                <Grid height={"20px"} />
                                <Typography gutterBottom variant="h5" component="div">
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
    );
}
