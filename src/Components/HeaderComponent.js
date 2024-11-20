import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { Grid } from "@mui/system";
import React from "react";
import { logo } from "../util/logoBase64";

export default function HeaderComponent({ isScrolled, scrollToSection }) {
    return (
        isScrolled && (
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
                        <img src={logo} alt="Damahe Group" width={70} />
                        Damahe Group
                    </Typography>

                    <Button
                        color="inherit"
                        onClick={() => {
                            scrollToSection("#Home");
                        }}
                    >
                        Home
                    </Button>
                    <Grid mx={1} />
                    <Button
                        color="inherit"
                        onClick={() => {
                            scrollToSection("#About");
                        }}
                    >
                        About
                    </Button>
                    <Grid mx={1} />
                    <Button
                        color="inherit"
                        onClick={() => {
                            scrollToSection("#Projects");
                        }}
                    >
                        Projects
                    </Button>
                    <Grid mx={1} />
                    <Button
                        color="inherit"
                        onClick={() => {
                            scrollToSection("#Services");
                        }}
                    >
                        Services
                    </Button>
                    <Grid mx={1} />
                    <Button
                        color="inherit"
                        onClick={() => {
                            scrollToSection("#Contact");
                        }}
                    >
                        Contact
                    </Button>
                    <Grid mx={1.5} />
                </Toolbar>
            </AppBar>
        )
    );
}
