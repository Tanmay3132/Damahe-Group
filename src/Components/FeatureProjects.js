// import React, { useState } from "react";
// import { Container, Typography, Card, CardContent, CardMedia, Box, Button, Modal, Fade, Backdrop } from "@mui/material";
// import { styled } from "@mui/system";
// import { Close as CloseIcon } from "@mui/icons-material";

// const ProjectCard = styled(Card)(({ theme, size }) => ({
//     height: size === "large" ? "400px" : "300px",
//     display: "flex",
//     flexDirection: "column",
//     borderRadius: "30px",

//     position: "relative",
//     overflow: "hidden",
//     transition: "all 0.3s ease-in-out",
//     "&:hover": {
//         transform: "scale(1.01)",
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
//     // borderRadius: "50px",

//     right: 0,
//     background: "rgba(0, 0, 0, 0.7)",
//     color: "white",
//     transition: "transform 0.3s ease-in-out",
//     transform: "translateY(calc(100% - 60px))", // Show only the title by default
//     height: "calc(100% - 60px)", // Full height minus the title height
//     overflow: "auto",
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "space-between",
// }));

// const CollageContainer = styled(Box)(({ theme }) => ({
//     display: "grid",
//     borderRadius: "50px",
//     gridTemplateColumns: "repeat(3, 1fr)",
//     gridTemplateRows: "repeat(2, 1fr)",
//     gap: theme.spacing(2),
//     height: "700px",
//     [theme.breakpoints.down("md")]: {
//         gridTemplateColumns: "repeat(2, 1fr)",
//         gridTemplateRows: "repeat(3, 1fr)",
//         height: "900px",
//     },
//     [theme.breakpoints.down("sm")]: {
//         gridTemplateColumns: "1fr",
//         gridTemplateRows: "repeat(4, 1fr)",
//         height: "1200px",
//     },
// }));

// const ModalContent = styled(Box)(({ theme }) => ({
//     position: "absolute",
//     top: "50%",
//     left: "50%",
//     transform: "translate(-50%, -50%)",
//     width: "80%",
//     maxWidth: "800px",
//     backgroundColor: theme.palette.background.paper,
//     boxShadow: theme.shadows[24],
//     padding: theme.spacing(4),
//     outline: "none",
//     // borderRadius: theme.shape.borderRadius,
// }));

// const projects = [
//     {
//         image: "https://images.skyscrapercenter.com/building/tectonic-media-inc_6747.jpg",
//         title: "Skyline Tower",
//         desc: "A 50-story mixed-use skyscraper in the heart of downtown, featuring state-of-the-art offices, luxury apartments, and a rooftop observatory with panoramic city views.",
//         size: "large",
//         gridArea: "1 / 1 / 3 / 2",
//     },
//     {
//         image: "https://img.freepik.com/premium-photo/green-living-ecofriendly-apartment-complex-energy-efficiency_706399-17570.jpg",
//         title: "Green Living Complex",
//         desc: "Sustainable residential community with solar power, green spaces, and energy-efficient design. Includes community gardens, electric vehicle charging stations, and a recycling center.",
//         size: "medium",
//         gridArea: "1 / 2 / 2 / 3",
//     },
//     {
//         image: "https://upload.wikimedia.org/wikipedia/commons/1/18/CRC2011ConceptDeckTruss.jpg",
//         title: "River Crossing Bridge",
//         desc: "A 2-mile long cable-stayed bridge connecting two cities, featuring pedestrian walkways, bike lanes, and innovative lighting design for nighttime illumination.",
//         size: "medium",
//         gridArea: "2 / 2 / 3 / 3",
//     },
//     {
//         image: "https://image.hurimg.com/i/hurriyet/75/0x0/5b7eb9db18c773083ceec8ab.jpg",
//         title: "Urban Renewal Project",
//         desc: "Revitalizing downtown with mixed-use developments, public spaces, and cultural venues. Includes restoration of historic buildings, creation of a central plaza, and implementation of smart city technologies.",
//         size: "large",
//         gridArea: "1 / 3 / 3 / 4",
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
//         <Container maxWidth="xl" sx={{ my: 10, borderRadius: "50px" }}>
//             <CollageContainer borderRadius={"50px"}>
//                 {projects.map((project, index) => (
//                     <Box key={index} sx={{ gridArea: project.gridArea, borderRadius: "50px" }}>
//                         <ProjectCard size={project.size}>
//                             <ProjectMedia image={project.image} title={project.title} />
//                             <ProjectContent>
//                                 <Typography variant="h6" component="div" gutterBottom>
//                                     {project.title}
//                                 </Typography>
//                                 <Box>
//                                     <Typography variant="body2" sx={{ mb: 2 }}>
//                                         {project.desc}
//                                     </Typography>
//                                     <Button variant="contained" color="primary" onClick={() => handleOpenModal(project)}>
//                                         Learn More
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
//                                 <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
//                                     <Typography variant="h4" component="h2">
//                                         {selectedProject.title}
//                                     </Typography>
//                                     <Button onClick={handleCloseModal} color="primary">
//                                         <CloseIcon />
//                                     </Button>
//                                 </Box>
//                                 <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: 4 }}>
//                                     <Box sx={{ flex: 1 }}>
//                                         <img src={selectedProject.image} alt={selectedProject.title} style={{ width: "100%", borderRadius: "8px" }} />
//                                     </Box>
//                                     <Box sx={{ flex: 1 }}>
//                                         <Typography variant="body1" paragraph>
//                                             {selectedProject.desc}
//                                         </Typography>
//                                         <Button variant="contained" color="primary">
//                                             View Project Details
//                                         </Button>
//                                     </Box>
//                                 </Box>
//                             </>
//                         )}
//                     </ModalContent>
//                 </Fade>
//             </Modal>
//         </Container>
//     );
// }

import React, { useState } from "react";
import { Container, Typography, Card, CardContent, CardMedia, Box, Button, Modal, Fade, Backdrop, Grid, Chip, Divider, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
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
        height: "1000px",
    },
    [theme.breakpoints.down("sm")]: {
        gridTemplateColumns: "1fr",
        gridTemplateRows: "repeat(4, 1fr)",
        height: "1400px",
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

    const handleOpenModal = (project) => {
        setSelectedProject(project);
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
    };

    return (
        <Container maxWidth="xl" sx={{ my: 10 }}>
            <CollageContainer>
                {projects.map((project, index) => (
                    <Box key={index} sx={{ gridArea: project.gridArea }}>
                        <ProjectCard size={project.size}>
                            <ProjectMedia image={project.image} title={project.title} />
                            <ProjectContent>
                                <Typography variant="h5" component="div" gutterBottom>
                                    {project.title}
                                </Typography>
                                <Box>
                                    <Typography variant="body2" sx={{ mb: 2 }}>
                                        {project.desc}
                                    </Typography>
                                    <Button variant="contained" color="primary" onClick={() => handleOpenModal(project)}>
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
                                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 3 }}>
                                    <Typography variant="h3" component="h2">
                                        {selectedProject.title}
                                    </Typography>
                                    <Button onClick={handleCloseModal} color="primary">
                                        <CloseIcon />
                                    </Button>
                                </Box>
                                <Grid container spacing={4}>
                                    <Grid item xs={12} md={6}>
                                        <img src={selectedProject.image} alt={selectedProject.title} style={{ width: "100%", borderRadius: "8px", marginBottom: "16px" }} />
                                        <Typography variant="body1" paragraph>
                                            {selectedProject.desc}
                                        </Typography>
                                        <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap", mb: 2 }}>
                                            <Chip icon={<LocationOn />} label={selectedProject.details.location} />
                                            <Chip icon={<Schedule />} label={`Duration: ${selectedProject.details.duration}`} />
                                            <Chip icon={<AttachMoney />} label={`Budget: ${selectedProject.details.budget}`} />
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <Typography variant="h6" gutterBottom>
                                            Key Features
                                        </Typography>
                                        <List>
                                            {selectedProject.details.features.map((feature, index) => (
                                                <ListItem key={index} disablePadding>
                                                    <ListItemIcon>
                                                        <CheckCircle color="primary" />
                                                    </ListItemIcon>
                                                    <ListItemText primary={feature} />
                                                </ListItem>
                                            ))}
                                        </List>
                                        <Divider sx={{ my: 2 }} />
                                        <Typography variant="h6" gutterBottom>
                                            Project Challenges
                                        </Typography>
                                        <List>
                                            {selectedProject.details.challenges.map((challenge, index) => (
                                                <ListItem key={index} disablePadding>
                                                    <ListItemIcon>
                                                        <CheckCircle color="secondary" />
                                                    </ListItemIcon>
                                                    <ListItemText primary={challenge} />
                                                </ListItem>
                                            ))}
                                        </List>
                                        <Box sx={{ mt: 3 }}>
                                            <Button variant="contained" color="primary" size="large">
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
        </Container>
    );
}
