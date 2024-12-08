import React from "react";
import AppBarComponent from "./AppBar";

export default function HeaderComponent({ isScrolled }) {
    return isScrolled && <AppBarComponent isScrolled={isScrolled} fromCarousel={false} />;
}
