import React, { useState } from "react";
import Box from "@mui/material/Box";
import ReactPlayer from "react-player";
import { motion, AnimatePresence } from "framer-motion";
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
import "../index.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/bundle";
import Avatar from "@mui/material/Avatar";

export default function MainScreen() {
  // const [showAnimation, setShowAnimation] = useState(false);
  const [removeBackground, setRemoveBackground] = useState(false);
  const [isLive, setIsLive] = useState(false);
  const [changeLanguage, setChangeLanguage] = useState(false);
  const info = [
    {
      name: "Tasin",
      comment: "hi",
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTSKbCFe_QYSVH-4FpaszXvakr2Eti9eAJpQ&s",
      yValue: 0,
    },
    {
      name: "Dinar",
      comment: "hello",
      imgUrl:
        "https://i.pinimg.com/236x/db/1f/9a/db1f9a3eaca4758faae5f83947fa807c.jpg",
      yValue: 78,
    },
    {
      name: "Rusho",
      comment: "looks good",
      imgUrl:
        "https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg",
      yValue: 156,
    },
    {
      name: "Remo",
      comment: "cute",
      imgUrl:
        "https://png.pngtree.com/thumb_back/fh260/background/20230612/pngtree-man-wearing-glasses-is-wearing-colorful-background-image_2905240.jpg",
      yValue: 234,
    },
    {
      name: "Soumik",
      comment: "awesome",
      imgUrl:
        "https://play-lh.googleusercontent.com/7oW_TFaC5yllHJK8nhxHLQRCvGDE8jYIAc2SWljYpR6hQlFTkbA6lNvER1ZK-doQnQ=w240-h480-rw",
      yValue: 312,
    },
    // ,
    // {
    //   name: "Sushi",
    //   comment: "wow !",
    //   imgUrl: "https://pics.craiyon.com/2023-11-15/NFfo8Fq5SC-QlFZzS4ge3Q.webp",
    //   yValue: 390,
    // },
  ];
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
  return (
    <>
      <ReactPlayer
        url="https://www.twitch.tv/galibremo"
        playing
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
            {removeBackground && (
              <Swiper
                direction="vertical"
                spaceBetween={10}
                slidesPerView={3}
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
              {removeBackground ? "BACKGROUNDS" : "REMOVE BG"}
            </Button>
          </Box>
        </Box>
        <Box
          sx={{
            //bgcolor: "lightblue",
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
              // clipPath: "polygon(50% -50%, 100% 50%, 50% 150%, 0 50%)",
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
                gap: "35px",
                borderRadius: "50px",
              }}
            >
              <Button
                size="large"
                sx={{
                  borderRadius: "50px",
                  fontFamily: "Nasalization, sans-serif",
                  backgroundColor: isLive ? "defaultColor" : "#f44336",
                  padding: "15px 30px",
                }}
                variant={isLive ? "text" : "contained"}
                onClick={() => setIsLive(!isLive)}
              >
                {isLive ? "End Live" : "Start Live"}
              </Button>
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
            {changeLanguage ? (
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
              style={{ width: "230px", height: "230px" }}
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
            <img src={gif} alt="" style={{ width: "100%" }} />
          </Box>
        </Box>
      </Box>
    </>
  );
}
