"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import { Box, Typography, Button } from "@mui/material";
import { AccountTree, Build, ChevronLeft, ChevronRight, Webhook } from "@mui/icons-material";
import { styled } from "@mui/system";

const CarouselContainer = styled(Box)(({ theme }) => ({
    position: "relative",
    width: "100%",
    height: "500px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    [theme.breakpoints.down("sm")]: {
        height: "400px",
    },
}));

const CarouselTrack = styled(Box)({
    display: "flex",
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
});

const CarouselItem = styled(Box)(({ theme, position, backgroundImage, isHovered }) => ({
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
    [theme.breakpoints.down("sm")]: {
        width: "80%",
        height: "70%",
        transform: `translateX(${position * 100}%) scale(${position === 0 ? (isHovered ? 1.02 : 1) : 0.9})`,
    },
}));

const ContentOverlay = styled(Box)({
    width: "100%",
    padding: "20px",
    background: "rgba(0, 0, 0, 0.7)",
    color: "white",
    textAlign: "center",
    transition: "transform 0.3s ease-in-out",
});

const NavButton = styled(Button)(({ theme }) => ({
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    minWidth: "48px",
    width: "50px",
    height: "50px",
    borderRadius: "50px",
    color: "grey",
    "&:hover": {
        background: "transparent",
        color: "black",
    },
    zIndex: 2,
    [theme.breakpoints.down("sm")]: {
        width: "40px",
        height: "40px",
        minWidth: "40px",
    },
}));

const items = [
    {
        icon: <Build fontSize="large" />,
        title: "Commercial Projects",
        desc: "Our commercial construction services deliver cutting-edge office buildings and retail spaces that meet the evolving needs of modern businesses. We focus on creating environments that boost productivity, enhance employee well-being, and leave a lasting impression on clients and visitors alike.",
        img: "https://losangelesgeneralcontractor.com/wp-content/uploads/2017/03/best-general-contractor-Los-Angeles.jpg",
        features: ["Sustainable design", "Smart building technology", "Flexible workspaces", "Energy-efficient systems"],
    },
    {
        icon: <AccountTree fontSize="large" />,
        title: "Residential Projects",
        desc: "Our residential developments blend contemporary design with practical living solutions. From luxurious single-family homes to innovative apartment complexes, we create living spaces that prioritize comfort, sustainability, and community integration.",
        img: "https://media.licdn.com/dms/image/D4D12AQHV-BxE28qLAA/article-cover_image-shrink_600_2000/0/1691157261055?e=2147483647&v=beta&t=ftEcB866KTP3I-OHfiDoEY6YRuDOlamNwtF6wyt4OCQ",
        features: ["Open-concept designs", "Energy-efficient appliances", "Smart home integration", "Community amenities"],
    },
    {
        icon: <Webhook fontSize="large" />,
        title: "Software Development",
        desc: "Our software development team creates powerful, scalable applications that drive business growth and innovation. We specialize in developing custom software solutions, mobile apps, and web platforms that streamline operations and enhance user experiences.",
        img: "https://img.wazobia.tech/https://sytbuildr.s3.eu-west-2.amazonaws.com/0406191c-f351-4a58-b164-b9521b3d78c5/typesofsoftwareengineering.jpeg_O1teey?tr=w-1500,cr-0.0.1500.900",
        features: ["Custom software solutions", "Mobile app development", "Cloud integration", "AI and machine learning"],
    },
];

export default function ResponsiveCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoSliding, setIsAutoSliding] = useState(true);
    const [isHovering, setIsHovering] = useState(false);
    const [isCardHovered, setIsCardHovered] = useState(false);
    const resumeTimeoutRef = useRef(null);
    const touchStartX = useRef(null);

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

    const handleInteractionStart = () => {
        setIsHovering(true);
        setIsAutoSliding(false);
        startResumeTimeout();
    };

    const handleInteractionEnd = () => {
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

    const handleTouchStart = (e) => {
        touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchMove = (e) => {
        if (touchStartX.current === null) return;

        const touchEndX = e.touches[0].clientX;
        const diff = touchStartX.current - touchEndX;

        if (Math.abs(diff) > 50) {
            if (diff > 0) {
                moveNext();
            } else {
                movePrev();
            }
            touchStartX.current = null;
        }
    };

    const handleTouchEnd = () => {
        touchStartX.current = null;
    };

    const handleMouseDown = (e) => {
        e.preventDefault();
        touchStartX.current = e.clientX;
    };

    const handleMouseMove = (e) => {
        e.preventDefault();
        if (touchStartX.current === null) return;

        const currentX = e.clientX;
        const diff = touchStartX.current - currentX;

        if (Math.abs(diff) > 50) {
            if (diff > 0) {
                moveNext();
            } else {
                movePrev();
            }
            touchStartX.current = null;
        }
    };

    const handleMouseUp = () => {
        touchStartX.current = null;
    };

    useEffect(() => {
        return () => {
            if (resumeTimeoutRef.current) {
                clearTimeout(resumeTimeoutRef.current);
            }
        };
    }, []);

    return (
        <CarouselContainer
            onMouseEnter={handleInteractionStart}
            onMouseLeave={handleInteractionEnd}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
        >
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
                                {/* {position === 1 && (
                                    // <Button variant="contained" color="primary">
                                    //     Learn More
                                    // </Button>
                                )} */}
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
}
