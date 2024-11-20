// import React, { useState } from "react";
// import { Container, Typography, Card, CardContent, CardMedia, Box, Button, Modal, Fade, Backdrop, Grid, Chip, Divider, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
// import { styled } from "@mui/system";
// import { Close as CloseIcon, CheckCircle, Schedule, AttachMoney, LocationOn } from "@mui/icons-material";

// const ProjectCard = styled(Card)(({ theme, size }) => ({
//     height: size === "large" ? "400px" : "300px",
//     display: "flex",
//     flexDirection: "column",
//     borderRadius: "16px",
//     position: "relative",
//     overflow: "hidden",
//     transition: "all 0.3s ease-in-out",
//     "&:hover": {
//         transform: "scale(1.03)",
//         boxShadow: theme.shadows[10],
//         "& .MuiCardContent-root": {
//             transform: "translateY(0)",
//         },
//     },
// }));

// const ProjectMedia = styled(CardMedia)({
//     height: "100%",
// });

// const ProjectContent = styled(CardContent)(({ theme }) => ({
//     position: "absolute",
//     bottom: 0,
//     left: 0,
//     right: 0,
//     background: "rgba(0, 0, 0, 0.8)",
//     color: "white",
//     transition: "transform 0.3s ease-in-out",
//     transform: "translateY(calc(100% - 60px))",
//     height: "calc(100% - 60px)",
//     overflow: "auto",
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "space-between",
//     padding: theme.spacing(2),
// }));

// const CollageContainer = styled(Box)(({ theme }) => ({
//     display: "grid",
//     gridTemplateColumns: "repeat(3, 1fr)",
//     gridTemplateRows: "repeat(2, 1fr)",
//     gap: theme.spacing(3),
//     height: "750px",
//     [theme.breakpoints.down("md")]: {
//         gridTemplateColumns: "repeat(2, 1fr)",
//         gridTemplateRows: "repeat(3, 1fr)",
//         height: "1000px",
//     },
//     [theme.breakpoints.down("sm")]: {
//         gridTemplateColumns: "1fr",
//         gridTemplateRows: "repeat(4, 1fr)",
//         height: "1400px",
//     },
// }));

// const ModalContent = styled(Box)(({ theme }) => ({
//     position: "absolute",
//     top: "50%",
//     left: "50%",
//     transform: "translate(-50%, -50%)",
//     width: "90%",
//     maxWidth: "1000px",
//     maxHeight: "90vh",
//     overflowY: "auto",
//     backgroundColor: theme.palette.background.paper,
//     boxShadow: theme.shadows[24],
//     padding: theme.spacing(4),
//     outline: "none",
//     borderRadius: theme.shape.borderRadius,
// }));

// const projects = [
//     {
//         image: "/devBhaiyaHouse.jpeg",
//         title: "Hideaway Haven",
//         desc: "Escape to a world of tranquility at Hideaway Haven, where modern comforts blend seamlessly with natural beauty. Our carefully crafted spaces provide the perfect setting for relaxation, creativity, or simply being. Let the warmth of our haven envelop you, and rediscover your sense of calm.",
//         size: "large",
//         gridArea: "1 / 1 / 3 / 2",
//         details: {
//             location: "Downtown Metropolis",
//             duration: "36 months",
//             budget: "$500 million",
//             features: ["LEED Platinum certification", "Smart building technology", "Earthquake-resistant design", "Vertical gardens"],
//             challenges: ["Complex foundation work due to high water table", "Integration of multiple building systems", "Strict urban planning regulations"],
//         },
//     },
//     {
//         image: "https://img.freepik.com/premium-photo/green-living-ecofriendly-apartment-complex-energy-efficiency_706399-17570.jpg",
//         title: "Green Living Complex",
//         desc: "Sustainable residential community with solar power, green spaces, and energy-efficient design. Includes community gardens, electric vehicle charging stations, and a recycling center.",
//         size: "medium",
//         gridArea: "1 / 2 / 2 / 3",
//         details: {
//             location: "Suburban Eco-District",
//             duration: "24 months",
//             budget: "$200 million",
//             features: ["Net-zero energy consumption", "Rainwater harvesting system", "Passive solar design", "Biodiversity-friendly landscaping"],
//             challenges: ["Balancing affordability with sustainability features", "Educating residents on eco-friendly practices", "Integrating with existing infrastructure"],
//         },
//     },
//     {
//         image: "/houseOfMorernity.jpeg",
//         title: "House of modernity",
//         desc: "In the House of Modernity, luxury knows no bounds. With sleek lines, minimalist aesthetics, and an unwavering commitment to innovation, this iconic residence redefines the modern lifestyle. From its energy-efficient systems to its state-of-the-art entertainment systems, every detail has been meticulously designed to impress.",
//         size: "medium",
//         gridArea: "2 / 2 / 3 / 3",
//         details: {
//             location: "Twin Cities Metropolitan Area",
//             duration: "48 months",
//             budget: "$1.2 billion",
//             features: ["Wind-resistant design", "Smart traffic management system", "Integrated public art installations", "Observation decks at tower peaks"],
//             challenges: ["Minimizing environmental impact on river ecosystem", "Managing traffic flow during construction", "Coordinating between multiple municipal authorities"],
//         },
//     },
//     {
//         image: "/CanopyHouse.jpeg",
//         title: "Canopy House",
//         desc: "Imagine waking up surrounded by the soothing sounds of nature, with sunlight filtering through the leaves above. Welcome to Canopy House, a masterful blend of organic architecture and modern comfort. This unique residence invites you to connect with the natural world while enjoying the finest amenities.",
//         size: "large",
//         gridArea: "1 / 3 / 3 / 4",
//         details: {
//             location: "Historic City Center",
//             duration: "60 months",
//             budget: "$800 million",
//             features: ["Adaptive reuse of industrial buildings", "Smart city infrastructure integration", "Public-private partnership model", "Creation of innovation district"],
//             challenges: ["Preserving historical integrity while modernizing", "Addressing gentrification concerns", "Phased implementation to minimize disruption"],
//         },
//     },
// ];

// export default function EnhancedHoverCollageProjects() {
//     const [openModal, setOpenModal] = useState(false);
//     const [selectedProject, setSelectedProject] = useState(null);

//     const handleOpenModal = (project) => {
//         setSelectedProject(project);
//         setOpenModal(true);
//     };

//     const handleCloseModal = () => {
//         setOpenModal(false);
//     };

//     return (
//         <Container maxWidth="xl" sx={{ my: 10 }}>
//             <CollageContainer>
//                 {projects.map((project, index) => (
//                     <Box key={index} sx={{ gridArea: project.gridArea }}>
//                         <ProjectCard size={project.size}>
//                             <ProjectMedia image={project.image} title={project.title} />
//                             <ProjectContent>
//                                 <Typography variant="h5" component="div" gutterBottom>
//                                     {project.title}
//                                 </Typography>
//                                 <Box>
//                                     <Typography variant="body2" sx={{ mb: 2 }}>
//                                         {project.desc}
//                                     </Typography>
//                                     <Button variant="contained" color="primary" onClick={() => handleOpenModal(project)}>
//                                         Explore Project
//                                     </Button>
//                                 </Box>
//                             </ProjectContent>
//                         </ProjectCard>
//                     </Box>
//                 ))}
//             </CollageContainer>
//             <Modal
//                 open={openModal}
//                 onClose={handleCloseModal}
//                 closeAfterTransition
//                 BackdropComponent={Backdrop}
//                 BackdropProps={{
//                     timeout: 500,
//                 }}
//             >
//                 <Fade in={openModal}>
//                     <ModalContent>
//                         {selectedProject && (
//                             <>
//                                 <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 3 }}>
//                                     <Typography variant="h3" component="h2">
//                                         {selectedProject.title}
//                                     </Typography>
//                                     <Button onClick={handleCloseModal} color="primary">
//                                         <CloseIcon />
//                                     </Button>
//                                 </Box>
//                                 <Grid container spacing={4}>
//                                     <Grid item xs={12} md={6}>
//                                         <img src={selectedProject.image} alt={selectedProject.title} style={{ width: "100%", borderRadius: "8px", marginBottom: "16px" }} />
//                                         <Typography variant="body1" paragraph>
//                                             {selectedProject.desc}
//                                         </Typography>
//                                         <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap", mb: 2 }}>
//                                             <Chip icon={<LocationOn />} label={selectedProject.details.location} />
//                                             <Chip icon={<Schedule />} label={`Duration: ${selectedProject.details.duration}`} />
//                                             <Chip icon={<AttachMoney />} label={`Budget: ${selectedProject.details.budget}`} />
//                                         </Box>
//                                     </Grid>
//                                     <Grid item xs={12} md={6}>
//                                         <Typography variant="h6" gutterBottom>
//                                             Key Features
//                                         </Typography>
//                                         <List>
//                                             {selectedProject.details.features.map((feature, index) => (
//                                                 <ListItem key={index} disablePadding>
//                                                     <ListItemIcon>
//                                                         <CheckCircle color="primary" />
//                                                     </ListItemIcon>
//                                                     <ListItemText primary={feature} />
//                                                 </ListItem>
//                                             ))}
//                                         </List>
//                                         <Divider sx={{ my: 2 }} />
//                                         <Typography variant="h6" gutterBottom>
//                                             Project Challenges
//                                         </Typography>
//                                         <List>
//                                             {selectedProject.details.challenges.map((challenge, index) => (
//                                                 <ListItem key={index} disablePadding>
//                                                     <ListItemIcon>
//                                                         <CheckCircle color="secondary" />
//                                                     </ListItemIcon>
//                                                     <ListItemText primary={challenge} />
//                                                 </ListItem>
//                                             ))}
//                                         </List>
//                                         <Box sx={{ mt: 3 }}>
//                                             <Button variant="contained" color="primary" size="large">
//                                                 Download Project Case Study
//                                             </Button>
//                                         </Box>
//                                     </Grid>
//                                 </Grid>
//                             </>
//                         )}
//                     </ModalContent>
//                 </Fade>
//             </Modal>
//             <Divider sx={{ my: 4 }} />
//         </Container>
//     );
// }

import React, { useState } from "react";
import { Container, Typography, Card, CardContent, CardMedia, Box, Button, Modal, Fade, Backdrop, Grid, Chip, Divider, List, ListItem, ListItemIcon, ListItemText, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { styled } from "@mui/system";
import { Close as CloseIcon, CheckCircle, Schedule, AttachMoney, LocationOn } from "@mui/icons-material";

const ProjectCard = styled(Card)(({ theme, size }) => ({
    height: size === "large" ? "400px" : "300px",
    display: "flex",
    flexDirection: "column",
    borderRadius: "16px",
    position: "relative",
    overflow: "hidden",
    transition: "all 0.3s ease-in-out",
    [theme.breakpoints.down("md")]: {
        height: "250px", // Shorter on mobile
    },
    "&:hover": {
        transform: "scale(1.03)",
        boxShadow: theme.shadows[10],
        "& .MuiCardContent-root": {
            transform: "translateY(0)",
        },
    },
}));

const ProjectMedia = styled(CardMedia)({
    height: "100%",
    backgroundSize: "cover",
    backgroundPosition: "center",
});

const ProjectContent = styled(CardContent)(({ theme }) => ({
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    background: "rgba(0, 0, 0, 0.8)",
    color: "white",
    transition: "transform 0.3s ease-in-out",
    transform: "translateY(calc(100% - 60px))",
    height: "calc(100% - 60px)",
    overflow: "auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
        padding: theme.spacing(1),
    },
}));

const CollageContainer = styled(Box)(({ theme }) => ({
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gridTemplateRows: "repeat(2, 1fr)",
    gap: theme.spacing(3),
    height: "750px",
    [theme.breakpoints.down("md")]: {
        gridTemplateColumns: "repeat(2, 1fr)",
        gridTemplateRows: "repeat(3, 1fr)",
        height: "auto",
    },
    [theme.breakpoints.down("sm")]: {
        gridTemplateColumns: "1fr",
        gridTemplateRows: "repeat(4, auto)", // Changed to auto for content-based height
        gap: theme.spacing(2),
    },
}));

const ModalContent = styled(Box)(({ theme }) => ({
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "90%",
    maxWidth: "1000px",
    maxHeight: "90vh",
    overflowY: "auto",
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[24],
    padding: theme.spacing(4),
    outline: "none",
    borderRadius: theme.shape.borderRadius,
    [theme.breakpoints.down("sm")]: {
        width: "95%",
        padding: theme.spacing(2),
    },
}));

const projects = [
    {
        image: "/devBhaiyaHouse.jpeg",
        title: "Hideaway Haven",
        desc: "Escape to a world of tranquility at Hideaway Haven, where modern comforts blend seamlessly with natural beauty. Our carefully crafted spaces provide the perfect setting for relaxation, creativity, or simply being. Let the warmth of our haven envelop you, and rediscover your sense of calm.",
        size: "large",
        gridArea: "1 / 1 / 3 / 2",
        details: {
            location: "Downtown Metropolis",
            duration: "36 months",
            budget: "$500 million",
            features: ["LEED Platinum certification", "Smart building technology", "Earthquake-resistant design", "Vertical gardens"],
            challenges: ["Complex foundation work due to high water table", "Integration of multiple building systems", "Strict urban planning regulations"],
        },
    },
    {
        image: "https://img.freepik.com/premium-photo/green-living-ecofriendly-apartment-complex-energy-efficiency_706399-17570.jpg",
        title: "Green Living Complex",
        desc: "Sustainable residential community with solar power, green spaces, and energy-efficient design. Includes community gardens, electric vehicle charging stations, and a recycling center.",
        size: "medium",
        gridArea: "1 / 2 / 2 / 3",
        details: {
            location: "Suburban Eco-District",
            duration: "24 months",
            budget: "$200 million",
            features: ["Net-zero energy consumption", "Rainwater harvesting system", "Passive solar design", "Biodiversity-friendly landscaping"],
            challenges: ["Balancing affordability with sustainability features", "Educating residents on eco-friendly practices", "Integrating with existing infrastructure"],
        },
    },
    {
        image: "/houseOfMorernity.jpeg",
        title: "House of modernity",
        desc: "In the House of Modernity, luxury knows no bounds. With sleek lines, minimalist aesthetics, and an unwavering commitment to innovation, this iconic residence redefines the modern lifestyle. From its energy-efficient systems to its state-of-the-art entertainment systems, every detail has been meticulously designed to impress.",
        size: "medium",
        gridArea: "2 / 2 / 3 / 3",
        details: {
            location: "Twin Cities Metropolitan Area",
            duration: "48 months",
            budget: "$1.2 billion",
            features: ["Wind-resistant design", "Smart traffic management system", "Integrated public art installations", "Observation decks at tower peaks"],
            challenges: ["Minimizing environmental impact on river ecosystem", "Managing traffic flow during construction", "Coordinating between multiple municipal authorities"],
        },
    },
    {
        image: "/CanopyHouse.jpeg",
        title: "Canopy House",
        desc: "Imagine waking up surrounded by the soothing sounds of nature, with sunlight filtering through the leaves above. Welcome to Canopy House, a masterful blend of organic architecture and modern comfort. This unique residence invites you to connect with the natural world while enjoying the finest amenities.",
        size: "large",
        gridArea: "1 / 3 / 3 / 4",
        details: {
            location: "Historic City Center",
            duration: "60 months",
            budget: "$800 million",
            features: ["Adaptive reuse of industrial buildings", "Smart city infrastructure integration", "Public-private partnership model", "Creation of innovation district"],
            challenges: ["Preserving historical integrity while modernizing", "Addressing gentrification concerns", "Phased implementation to minimize disruption"],
        },
    },
];

export default function EnhancedHoverCollageProjects() {
    const [openModal, setOpenModal] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    const handleOpenModal = (project) => {
        setSelectedProject(project);
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
    };

    return (
        <Container maxWidth="xl" sx={{ my: { xs: 5, md: 10 } }}>
            <CollageContainer>
                {projects.map((project, index) => (
                    <Box
                        key={index}
                        sx={{
                            gridArea: {
                                xs: "auto",
                                md: project.gridArea,
                            },
                        }}
                    >
                        <ProjectCard size={project.size}>
                            <ProjectMedia
                                image={project.image}
                                title={project.title}
                                sx={{
                                    height: {
                                        xs: isMobile ? "250px" : "300px",
                                        md: "100%",
                                    },
                                }}
                            />
                            <ProjectContent>
                                <Typography variant="h6" component="div" gutterBottom>
                                    {project.title}
                                </Typography>
                                <Box>
                                    <Typography variant="body2" sx={{ mb: 2 }}>
                                        {project.desc}
                                    </Typography>
                                    <Button variant="contained" color="primary" size={isMobile ? "small" : "medium"} onClick={() => handleOpenModal(project)}>
                                        Explore Project
                                    </Button>
                                </Box>
                            </ProjectContent>
                        </ProjectCard>
                    </Box>
                ))}
            </CollageContainer>
            <Modal
                open={openModal}
                onClose={handleCloseModal}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={openModal}>
                    <ModalContent>
                        {selectedProject && (
                            <>
                                <Box
                                    sx={{
                                        display: "flex",
                                        flexDirection: {
                                            xs: "column",
                                            sm: "row",
                                        },
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                        mb: 3,
                                    }}
                                >
                                    <Typography variant={isMobile ? "h4" : "h3"} component="h2" sx={{ mb: { xs: 2, sm: 0 } }}>
                                        {selectedProject.title}
                                    </Typography>
                                    <Button onClick={handleCloseModal} color="primary" variant={isMobile ? "outlined" : "text"}>
                                        <CloseIcon />
                                    </Button>
                                </Box>
                                <Grid container spacing={isMobile ? 2 : 4}>
                                    <Grid item xs={12} md={6}>
                                        <img
                                            src={selectedProject.image}
                                            alt={selectedProject.title}
                                            style={{
                                                width: "100%",
                                                borderRadius: "8px",
                                                marginBottom: "16px",
                                            }}
                                        />
                                        <Typography
                                            variant="body1"
                                            paragraph
                                            sx={{
                                                fontSize: {
                                                    xs: "0.875rem",
                                                    md: "1rem",
                                                },
                                            }}
                                        >
                                            {selectedProject.desc}
                                        </Typography>
                                        <Box
                                            sx={{
                                                display: "flex",
                                                gap: 1,
                                                flexWrap: "wrap",
                                                mb: 2,
                                            }}
                                        >
                                            <Chip icon={<LocationOn />} label={selectedProject.details.location} size={isMobile ? "small" : "medium"} />
                                            <Chip icon={<Schedule />} label={`Duration: ${selectedProject.details.duration}`} size={isMobile ? "small" : "medium"} />
                                            <Chip icon={<AttachMoney />} label={`Budget: ${selectedProject.details.budget}`} size={isMobile ? "small" : "medium"} />
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <Typography
                                            variant="h6"
                                            gutterBottom
                                            sx={{
                                                fontSize: {
                                                    xs: "1rem",
                                                    md: "1.25rem",
                                                },
                                            }}
                                        >
                                            Key Features
                                        </Typography>
                                        <List>
                                            {selectedProject.details.features.map((feature, index) => (
                                                <ListItem key={index} disablePadding>
                                                    <ListItemIcon sx={{ minWidth: { xs: 40, md: 56 } }}>
                                                        <CheckCircle
                                                            color="primary"
                                                            sx={{
                                                                fontSize: {
                                                                    xs: "1rem",
                                                                    md: "1.5rem",
                                                                },
                                                            }}
                                                        />
                                                    </ListItemIcon>
                                                    <ListItemText
                                                        primary={feature}
                                                        primaryTypographyProps={{
                                                            fontSize: {
                                                                xs: "0.875rem",
                                                                md: "1rem",
                                                            },
                                                        }}
                                                    />
                                                </ListItem>
                                            ))}
                                        </List>
                                        <Divider sx={{ my: 2 }} />
                                        <Typography
                                            variant="h6"
                                            gutterBottom
                                            sx={{
                                                fontSize: {
                                                    xs: "1rem",
                                                    md: "1.25rem",
                                                },
                                            }}
                                        >
                                            Project Challenges
                                        </Typography>
                                        <List>
                                            {selectedProject.details.challenges.map((challenge, index) => (
                                                <ListItem key={index} disablePadding>
                                                    <ListItemIcon sx={{ minWidth: { xs: 40, md: 56 } }}>
                                                        <CheckCircle
                                                            color="secondary"
                                                            sx={{
                                                                fontSize: {
                                                                    xs: "1rem",
                                                                    md: "1.5rem",
                                                                },
                                                            }}
                                                        />
                                                    </ListItemIcon>
                                                    <ListItemText
                                                        primary={challenge}
                                                        primaryTypographyProps={{
                                                            fontSize: {
                                                                xs: "0.875rem",
                                                                md: "1rem",
                                                            },
                                                        }}
                                                    />
                                                </ListItem>
                                            ))}
                                        </List>
                                        <Box sx={{ mt: 3, textAlign: "center" }}>
                                            <Button variant="contained" color="primary" size={isMobile ? "small" : "large"} fullWidth={isMobile}>
                                                Download Project Case Study
                                            </Button>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </>
                        )}
                    </ModalContent>
                </Fade>
            </Modal>
            <Divider sx={{ my: { xs: 2, md: 4 } }} />
        </Container>
    );
}
