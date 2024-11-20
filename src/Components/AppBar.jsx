import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Box, Drawer, List, ListItem, ListItemButton, ListItemText, IconButton, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { logo } from "../util/logoBase64";

export default function AppBarComponent({ isScrolled, fromCarousel }) {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const scrollToSection = (query) => {
        const section = document.querySelector(query);
        if (section) {
            section.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    const menuItems = [
        { text: "Home", section: "#Home" },
        { text: "About", section: "#About" },
        { text: "Projects", section: "#Projects" },
        { text: "Services", section: "#Services" },
        { text: "Contact Us", section: "#Contact", variant: "outlined" },
    ];

    const renderMenuItems = (isMobileDrawer = false) => (
        <List
            sx={{
                marginRight: 1,
                display: "flex",
                flexDirection: isMobileDrawer ? "column" : "row",
                justifyContent: !isMobileDrawer && "center",
                alignItems: "center",
                width: isMobileDrawer ? "250px" : "30%",
            }}
        >
            {menuItems.map((item, index) => (
                <ListItem
                    key={index}
                    disablePadding
                    sx={{
                        width: isMobileDrawer ? "100%" : "auto",
                        textAlign: isMobileDrawer ? "center" : "left",
                    }}
                >
                    <ListItemButton
                        onClick={() => {
                            scrollToSection(item.section);
                            if (isMobileDrawer) handleDrawerToggle();
                        }}
                        sx={{
                            justifyContent: isMobileDrawer ? "center" : "flex-start",
                            ...(item.variant === "outlined"
                                ? {
                                      border: "1px solid white",
                                      borderRadius: "4px",
                                      textAlign: "center",
                                  }
                                : {}),
                        }}
                    >
                        <ListItemText primary={item.text} />
                    </ListItemButton>
                </ListItem>
            ))}
        </List>
    );

    return (
        <AppBar
            position="fixed"
            sx={{
                height: isMobile ? "10vh !important" : "8vh !important",
                minHeight: isMobile ? "10vh !important" : "8vh !important",
                background: fromCarousel ? "transparent" : "linear-gradient(90deg, hsla(36, 30%, 21%, 1) 1%, hsla(26, 100%, 19%, 1) 88%)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                transition: "height 1.5s width 1.5s",
                boxShadow: isScrolled ? 1 : 0,
                transitionTimingFunction: "ease",
            }}
        >
            <Toolbar
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "100%",
                    minWidth: "100%",
                }}
            >
                <Typography
                    variant="h6"
                    component="div"
                    width={"50%"}
                    maxWidth={!isMobile && "50vw"}
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        flexGrow: 1,
                    }}
                >
                    <img src={logo} alt="Damahe Group" width={70} />
                    Damahe Group
                </Typography>

                {isMobile ? (
                    <>
                        <IconButton color="inherit" aria-label="open drawer" sx={{ marginRight: 3 }} edge="start" onClick={handleDrawerToggle}>
                            <MenuIcon />
                        </IconButton>
                        <Drawer
                            variant="temporary"
                            anchor="right"
                            open={mobileOpen}
                            onClose={handleDrawerToggle}
                            ModalProps={{
                                keepMounted: true, // Better open performance on mobile.
                            }}
                            sx={{
                                "& .MuiDrawer-paper": {
                                    boxSizing: "border-box",
                                    width: 250,
                                    backgroundColor: "rgba(0,0,0,0.9)",
                                    color: "white",
                                },
                            }}
                        >
                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "flex-end",
                                    p: 2,
                                }}
                            >
                                <IconButton onClick={handleDrawerToggle} color="inherit">
                                    <CloseIcon />
                                </IconButton>
                            </Box>
                            {renderMenuItems(true)}
                        </Drawer>
                    </>
                ) : (
                    renderMenuItems()
                )}
            </Toolbar>
        </AppBar>
    );
}
