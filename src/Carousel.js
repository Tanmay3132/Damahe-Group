import React, { useState, useEffect, useCallback, useRef } from "react";
import { Box, Typography, Button } from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { styled } from "@mui/system";

const CarouselContainer = styled(Box)({
    position: "relative",
    width: "100%",
    height: "500px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
});

const CarouselTrack = styled(Box)({
    display: "flex",
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
});

const CarouselItem = styled(Box)(({ position, backgroundImage, isHovered }) => ({
    position: "absolute",
    width: "40%",
    height: "80%",
    transition: "all 0.3s ease-in-out",
    borderRadius: "16px",
    overflow: "hidden",
    boxShadow:
        position === 0 && isHovered
            ? "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22), inset 0px 0px 25px 2px #302f2f, inset 0px 0px 25px 2px #302f2f"
            : "inset 0px 0px 30px 5px #302f2f , inset 0px 0px 30px 5px #302f2f",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    opacity: position === 0 ? 1 : 0.5,
    transform: `translateX(${position * 55}%) scale(${position === 0 ? (isHovered ? 1.02 : 1) : 0.9})`,
    zIndex: 2 - Math.abs(position),
    cursor: position === 0 ? "pointer" : "default",
}));

const ContentOverlay = styled(Box)({
    width: "100%",
    padding: "20px",
    background: "rgba(0, 0, 0, 0.7)",
    color: "white",
    textAlign: "center",
    transition: "transform 0.3s ease-in-out",
});

const NavButton = styled(Button)({
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    minWidth: "48px",
    width: "50px",
    height: "50px",
    borderRadius: "50px",
    // backgroundColor: "#474747",
    color: "grey",
    "&:hover": {
        background: "transparent",
        color: "black",
    },
    zIndex: 2,
});

const ThreeItemCarousel = ({ items }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoSliding, setIsAutoSliding] = useState(true);
    const [isHovering, setIsHovering] = useState(false);
    const [isCardHovered, setIsCardHovered] = useState(false);
    const resumeTimeoutRef = useRef(null);

    const move = useCallback(
        (direction) => {
            setCurrentIndex((prevIndex) => {
                if (direction === "next") {
                    return (prevIndex + 1) % items.length;
                } else {
                    return (prevIndex - 1 + items.length) % items.length;
                }
            });
        },
        [items.length]
    );

    const startResumeTimeout = useCallback(() => {
        if (resumeTimeoutRef.current) {
            clearTimeout(resumeTimeoutRef.current);
        }
        resumeTimeoutRef.current = setTimeout(() => {
            setIsAutoSliding(true);
        }, 10000); // 10 seconds
    }, []);

    useEffect(() => {
        if (isAutoSliding && !isHovering) {
            const interval = setInterval(() => {
                move("next");
            }, 3000);
            return () => clearInterval(interval);
        }
    }, [isAutoSliding, isHovering, move]);

    const handleMouseEnter = () => {
        setIsHovering(true);
        setIsAutoSliding(false);
        startResumeTimeout();
    };

    const handleMouseLeave = () => {
        setIsHovering(false);
        setIsCardHovered(false);
        if (resumeTimeoutRef.current) {
            clearTimeout(resumeTimeoutRef.current);
        }
        setIsAutoSliding(true);
    };

    const moveNext = () => {
        setIsAutoSliding(false);
        move("next");
        startResumeTimeout();
    };

    const movePrev = () => {
        setIsAutoSliding(false);
        move("prev");
        startResumeTimeout();
    };

    useEffect(() => {
        return () => {
            if (resumeTimeoutRef.current) {
                clearTimeout(resumeTimeoutRef.current);
            }
        };
    }, []);

    return (
        <CarouselContainer onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <NavButton onClick={movePrev} style={{ left: "5%" }}>
                <ChevronLeft
                    fontSize="large"
                    sx={{
                        "&:hover": {
                            fontSize: "43px",
                        },
                    }}
                />
            </NavButton>

            <CarouselTrack>
                {items.map((item, index) => {
                    const position = (index - currentIndex + items.length) % items.length;
                    return (
                        <CarouselItem
                            key={index}
                            position={position - 1}
                            backgroundImage={item.img}
                            isHovered={isCardHovered && position === 1}
                            onMouseEnter={() => position === 1 && setIsCardHovered(true)}
                            onMouseLeave={() => setIsCardHovered(false)}
                        >
                            <ContentOverlay style={{ transform: isCardHovered && position === 1 ? "translateY(-3rem)" : "none" }}>
                                <Typography variant="h5" style={{ marginBottom: "10px" }}>
                                    {item.title}
                                </Typography>
                                <Typography variant="body2" style={{ marginBottom: "15px" }}>
                                    {item.desc}
                                </Typography>
                                {position === 1 && (
                                    <Button variant="contained" color="primary">
                                        Learn More
                                    </Button>
                                )}
                            </ContentOverlay>
                        </CarouselItem>
                    );
                })}
            </CarouselTrack>

            <NavButton onClick={moveNext} style={{ right: "5%" }}>
                <ChevronRight
                    fontSize="large"
                    sx={{
                        "&:hover": {
                            fontSize: "43px",
                        },
                    }}
                />
            </NavButton>
        </CarouselContainer>
    );
};

export default ThreeItemCarousel;
