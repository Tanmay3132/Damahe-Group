import React, { useState } from "react";
import { Container, Typography, Card, CardContent, CardMedia, Box, Button, Modal, Fade, Backdrop } from "@mui/material";
import { styled } from "@mui/system";
import { Close as CloseIcon } from "@mui/icons-material";

const ProjectCard = styled(Card)(({ theme, size }) => ({
    height: size === "large" ? "400px" : "300px",
    display: "flex",
    flexDirection: "column",
    position: "relative",
    overflow: "hidden",
    transition: "all 0.3s ease-in-out",
    "&:hover": {
        transform: "scale(1.01)",
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
    background: "rgba(0, 0, 0, 0.7)",
    color: "white",
    transition: "transform 0.3s ease-in-out",
    transform: "translateY(calc(100% - 60px))", // Show only the title by default
    height: "calc(100% - 60px)", // Full height minus the title height
    overflow: "auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
}));

const CollageContainer = styled(Box)(({ theme }) => ({
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gridTemplateRows: "repeat(2, 1fr)",
    gap: theme.spacing(2),
    height: "700px",
    [theme.breakpoints.down("md")]: {
        gridTemplateColumns: "repeat(2, 1fr)",
        gridTemplateRows: "repeat(3, 1fr)",
        height: "900px",
    },
    [theme.breakpoints.down("sm")]: {
        gridTemplateColumns: "1fr",
        gridTemplateRows: "repeat(4, 1fr)",
        height: "1200px",
    },
}));

const ModalContent = styled(Box)(({ theme }) => ({
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "80%",
    maxWidth: "800px",
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[24],
    padding: theme.spacing(4),
    outline: "none",
    borderRadius: theme.shape.borderRadius,
}));

const projects = [
    {
        image: "https://images.skyscrapercenter.com/building/tectonic-media-inc_6747.jpg",
        title: "Skyline Tower",
        desc: "A 50-story mixed-use skyscraper in the heart of downtown, featuring state-of-the-art offices, luxury apartments, and a rooftop observatory with panoramic city views.",
        size: "large",
        gridArea: "1 / 1 / 3 / 2",
    },
    {
        image: "https://img.freepik.com/premium-photo/green-living-ecofriendly-apartment-complex-energy-efficiency_706399-17570.jpg",
        title: "Green Living Complex",
        desc: "Sustainable residential community with solar power, green spaces, and energy-efficient design. Includes community gardens, electric vehicle charging stations, and a recycling center.",
        size: "medium",
        gridArea: "1 / 2 / 2 / 3",
    },
    {
        image: "https://upload.wikimedia.org/wikipedia/commons/1/18/CRC2011ConceptDeckTruss.jpg",
        title: "River Crossing Bridge",
        desc: "A 2-mile long cable-stayed bridge connecting two cities, featuring pedestrian walkways, bike lanes, and innovative lighting design for nighttime illumination.",
        size: "medium",
        gridArea: "2 / 2 / 3 / 3",
    },
    {
        image: "https://image.hurimg.com/i/hurriyet/75/0x0/5b7eb9db18c773083ceec8ab.jpg",
        title: "Urban Renewal Project",
        desc: "Revitalizing downtown with mixed-use developments, public spaces, and cultural venues. Includes restoration of historic buildings, creation of a central plaza, and implementation of smart city technologies.",
        size: "large",
        gridArea: "1 / 3 / 3 / 4",
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
                                <Typography variant="h6" component="div" gutterBottom>
                                    {project.title}
                                </Typography>
                                <Box>
                                    <Typography variant="body2" sx={{ mb: 2 }}>
                                        {project.desc}
                                    </Typography>
                                    <Button variant="contained" color="primary" onClick={() => handleOpenModal(project)}>
                                        Learn More
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
                                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
                                    <Typography variant="h4" component="h2">
                                        {selectedProject.title}
                                    </Typography>
                                    <Button onClick={handleCloseModal} color="primary">
                                        <CloseIcon />
                                    </Button>
                                </Box>
                                <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: 4 }}>
                                    <Box sx={{ flex: 1 }}>
                                        <img src={selectedProject.image} alt={selectedProject.title} style={{ width: "100%", borderRadius: "8px" }} />
                                    </Box>
                                    <Box sx={{ flex: 1 }}>
                                        <Typography variant="body1" paragraph>
                                            {selectedProject.desc}
                                        </Typography>
                                        <Button variant="contained" color="primary">
                                            View Project Details
                                        </Button>
                                    </Box>
                                </Box>
                            </>
                        )}
                    </ModalContent>
                </Fade>
            </Modal>
        </Container>
    );
}
