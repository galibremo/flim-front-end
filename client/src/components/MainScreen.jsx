import React, { useState, useEffect, useCallback, useRef } from "react";
import Box from "@mui/material/Box";
import ReactPlayer from "react-player";
import Button from "@mui/material/Button";
import logo from "../assets/logo/Bee-social-logo-Final-bee.png";
import bgImg from "../assets/mainBackground/1080x1920 bg windows.png";
import file1 from "../assets/backgroundImage/1.jpg";
import file2 from "../assets/backgroundImage/2.jpg";
import file8 from "../assets/backgroundImage/3.jpg";
import file3 from "../assets/backgroundImage/4.jpg";
import file4 from "../assets/backgroundImage/5.jpg";
import file5 from "../assets/backgroundImage/6.jpg";
import file6 from "../assets/backgroundImage/7.jpg";
import file7 from "../assets/backgroundImage/8.jpg";
import MicNoneIcon from "@mui/icons-material/MicNone";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";
import gif from "../assets/gif/s23-comment.gif";
import gif1 from "../assets/gif/clearing_throat.gif";
import gif2 from "../assets/gif/Dot_start-live.gif";
import "../index.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
import io from "socket.io-client";
import { Navigation } from "swiper/modules";

const socket = io("http://localhost:4000", {
  reconnection: true,
  reconnectionAttempts: 5,
  reconnectionDelay: 1000,
});

export default function MainScreen() {
  const [removeBackground, setRemoveBackground] = useState(false);
  const [isLive, setIsLive] = useState(false);
  const [changeLanguage, setChangeLanguage] = useState(false);
  const [showTranslating, setShowTranslating] = useState(false);
  const [showBackgrounds, setShowBackgrounds] = useState(false);
  const [showClearingThroat, setShowClearingThroat] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const [showLive, setShowLive] = useState(false);
  const swiperRef = useRef(null);

  const backgroundImg = [
    file1,
    // file2,
    file3,
    file4,
    file5,
    file6,
    file7,
    file8,
  ];

  const handleClearingThroatToggle = useCallback((data) => {
    setShowClearingThroat(data.showClearingThroat);
  }, []);

  const handleCommentToggle = useCallback((data) => {
    setShowComments(data.showComments);
  }, []);

  const handleTranslate = useCallback((data) => {
    setShowTranslating(data.showTranslating);
  }, []);

  const handleRemoveBackground = useCallback((data) => {
    setShowBackgrounds(data.showBackgrounds);
  }, []);

  const handleShowLive = useCallback((data) => {
    setShowLive(data.showLive);
  }, []);

  useEffect(() => {
    socket.on("togglePlayback", handleCommentToggle);
    return () => {
      socket.off("togglePlayback", handleCommentToggle);
    };
  }, [handleCommentToggle]);

  useEffect(() => {
    socket.on("toggleClearingThroat", handleClearingThroatToggle);
    return () => {
      socket.off("toggleClearingThroat", handleClearingThroatToggle);
    };
  }, [handleClearingThroatToggle]);

  useEffect(() => {
    socket.on("toggleTranslating", handleTranslate);
    return () => {
      socket.off("toggleTranslating", handleTranslate);
    };
  }, [handleTranslate]);

  useEffect(() => {
    socket.on("toggleBackgrounds", handleRemoveBackground);
    return () => {
      socket.off("toggleBackgrounds", handleRemoveBackground);
    };
  }, [handleRemoveBackground]);

  useEffect(() => {
    socket.on("toggleLive", handleShowLive);
    return () => {
      socket.off("toggleLive", handleShowLive);
    };
  }, [handleShowLive]);

  useEffect(() => {
    socket.on("navigate", (direction) => {
      if (swiperRef.current) {
        if (direction === "next") {
          swiperRef.current.swiper.slideNext();
        } else if (direction === "prev") {
          swiperRef.current.swiper.slidePrev();
        }
      }
    });

    return () => socket.off("navigate");
  }, []);

  return (
    <>
      <ReactPlayer
        url="https://www.twitch.tv/galibremo"
        playing={true}
        muted={true}
        width="65%"
        height="80%"
        style={{
          position: "absolute",
          zIndex: "1",
          top: "43%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />
      <Box
        sx={{
          display: "flex",
          height: "98vh",
          backgroundImage: `url(${bgImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          boxSizing: "border-box",
          p: "10px",
          zIndex: "2",
          position: "relative",
        }}
      >
        <Box
          sx={{
            flex: "2",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
            py: "30px",
          }}
        >
          <Box sx={{ width: "100%" }}>
            <img
              width={"90px"}
              height={"90px"}
              src={logo}
              alt="logo"
              style={{ marginLeft: "140px" }}
            />
          </Box>
          <Box
            sx={{
              width: "200px",
              maxWidth: "100%",
              height: "450px",
              aspectRatio: "16/9",
            }}
          >
            {showBackgrounds && (
              <Swiper
                ref={swiperRef}
                navigation={{ nextEl: "#swiper-next", prevEl: "#swiper-prev" }}
                modules={[Navigation]}
                direction="vertical"
                spaceBetween={10}
                slidesPerView={3}
                centeredSlides={true}
                onSlideChange={(swiper) => {
                  const allSlides = swiper.slides;
                  allSlides.forEach((slide, index) => {
                    if (index === swiper.activeIndex) {
                      slide.style.transform = "scale(1.1)"; // Make the active slide larger
                    } else {
                      slide.style.transform = "scale(1)"; // Reset size for other slides
                    }
                  });
                }}
                style={{ width: "100%", height: "100%" }}
              >
                {backgroundImg.map((img, index) => (
                  <SwiperSlide key={index}>
                    <img
                      src={img}
                      alt={`Background ${index + 1}`}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        borderRadius: "10px",
                        transition: "transform 0.3s ease",
                      }}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            )}
          </Box>
          <Box>
            <Button
              variant="contained"
              sx={{
                borderRadius: "50px",
                padding: "20px 55px",
                fontSize: "20px",
                fontFamily: "Nasalization, sans-serif",
                bgcolor: "#dcdcdc",
                color: "black",
              }}
              onClick={() => setRemoveBackground(!removeBackground)}
            >
              {showBackgrounds ? "BACKGROUNDS" : "REMOVE BG"}
            </Button>
          </Box>
        </Box>
        <Box
          sx={{
            flex: "4",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Box sx={{ flex: "2", visibility: "hidden" }}>Box</Box>
          <Box
            sx={{
              flex: "3",
              aspectRatio: "1/cos(30deg)",
              overflow: "hidden",
              position: "relative",
              paddingTop: "46.26%",
              overflow: "hidden",
              width: "100%",
              height: 0,
            }}
          ></Box>
          <Box
            sx={{
              flex: "3",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Box
              sx={{
                bgcolor: "#efefef",
                width: "40%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "60%",
                gap: "15px",
                borderRadius: "50px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Button
                  size="large"
                  sx={{
                    borderRadius: "50px",
                    fontFamily: "Nasalization, sans-serif",
                    backgroundColor: showLive ? "defaultColor" : "#f44336",
                    padding: "15px 30px",
                  }}
                  variant={showLive ? "text" : "contained"}
                  onClick={() => setIsLive(!isLive)}
                >
                  {showLive ? "End Live" : "Start Live"}
                </Button>
                {showLive && <img src={gif2} width={"50px"} height={"50px"} />}
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "15px",
                }}
              >
                <Box
                  sx={{
                    borderRadius: "50%",
                    width: "50px",
                    height: "50px",
                    bgcolor: "#dcdcdc",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <MicNoneIcon />
                </Box>
                <Box
                  sx={{
                    borderRadius: "50%",
                    width: "50px",
                    height: "50px",
                    bgcolor: "#dcdcdc",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <VideocamOutlinedIcon />
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            flex: "2",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            py: "30px",
          }}
        >
          <Box
            sx={{
              flex: "1",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "60%",
              bgcolor: "#efefef",
              borderRadius: "50px",
            }}
          >
            {showTranslating ? (
              <Box sx={{ display: "flex", gap: "5px" }}>
                <Button
                  sx={{
                    borderRadius: "50px",
                    bgcolor: "#f5de0f",
                    color: "black",
                    fontFamily: "Nasalization, sans-serif",
                  }}
                  onClick={() => setChangeLanguage(!changeLanguage)}
                  variant="contained"
                >
                  Bangla
                </Button>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {">"}
                </Box>
                <Button
                  sx={{
                    borderRadius: "50px",
                    bgcolor: "#f5de0f",
                    color: "black",
                    fontFamily: "Nasalization, sans-serif",
                  }}
                  onClick={() => setChangeLanguage(!changeLanguage)}
                  variant="contained"
                >
                  English
                </Button>
              </Box>
            ) : (
              <Button
                sx={{
                  borderRadius: "50px",
                  bgcolor: "#f5de0f",
                  color: "black",
                  fontFamily: "Nasalization, sans-serif",
                }}
                size="large"
                variant="contained"
                onClick={() => setChangeLanguage(!changeLanguage)}
              >
                Translate
              </Button>
            )}
          </Box>
          <Box
            sx={{
              flex: "3",
              flexDirection: "column",
              gap: "5px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
            }}
          >
            <img
              src={gif1}
              alt=""
              style={{
                width: "230px",
                height: "230px",
                visibility: showClearingThroat ? "visible" : "hidden",
              }}
            />
          </Box>
          <Box
            sx={{
              flex: "1",
              flexDirection: "column",
              gap: "5px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
            }}
          >
            <img
              src={gif}
              alt=""
              style={{
                width: "100%",
                visibility: showComments ? "visible" : "hidden",
              }}
            />
          </Box>
        </Box>
      </Box>
    </>
  );
}
