import React, { useState, useCallback } from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import io from "socket.io-client";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import Box from "@mui/material/Box";

const socket = io("http://localhost:4000", {
  reconnection: true,
  reconnectionAttempts: 5,
  reconnectionDelay: 1000,
});

const ButtonComponent = () => {
  const [isShowing, setIsShowing] = useState(false);
  const [isClearingThroat, setIsClearingThroat] = useState(false);
  const [isTranslateing, setIsTranslateing] = useState(false);
  const [isBgCning, setIsBgCning] = useState(false);
  const [isLive, setIsLive] = useState(false);

  const handleClick = useCallback(() => {
    const newPlayingState = !isShowing;
    socket.emit("togglePlayback", { showComments: newPlayingState });
    setIsShowing(newPlayingState);
  }, [isShowing]);

  const showClearingThroat = useCallback(() => {
    const newPlayingState = !isClearingThroat;
    socket.emit("toggleClearingThroat", {
      showClearingThroat: newPlayingState,
    });
    setIsClearingThroat(newPlayingState);
  }, [isClearingThroat]);

  const showTranslating = useCallback(() => {
    const newPlayingState = !isTranslateing;
    socket.emit("toggleTranslating", {
      showTranslating: newPlayingState,
    });
    setIsTranslateing(newPlayingState);
  }, [isTranslateing]);

  const showBackgrounds = useCallback(() => {
    const newPlayingState = !isBgCning;
    socket.emit("toggleBackgrounds", {
      showBackgrounds: newPlayingState,
    });
    setIsBgCning(newPlayingState);
  }, [isBgCning]);

  const showLive = useCallback(() => {
    const newPlayingState = !isLive;
    socket.emit("toggleLive", {
      showLive: newPlayingState,
    });
    setIsLive(newPlayingState);
  }, [isLive]);

  const handleNext = () => {
    socket.emit("navigate", "next");
  };

  const handlePrev = () => {
    socket.emit("navigate", "prev");
  };

  return (
    <Stack
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        width: "100%",
        height: "100vh",
        padding: "10px",
      }}
    >
      <Button
        variant="contained"
        onClick={handleClick}
        sx={{
          marginTop: "20px",
          maxWidth: "300px",
        }}
      >
        {isShowing ? "Hide Comment" : "Show Comment"}
      </Button>
      <Button
        variant="contained"
        onClick={showClearingThroat}
        sx={{
          marginTop: "20px",
          maxWidth: "300px",
        }}
      >
        {isClearingThroat ? "Hide Clearing Throat" : "Show Clearing Throat"}
      </Button>
      <Button
        variant="contained"
        onClick={showTranslating}
        sx={{
          marginTop: "20px",
          maxWidth: "300px",
        }}
      >
        {isTranslateing ? "Hide Language" : "Show Language"}
      </Button>
      <Button
        variant="contained"
        onClick={showBackgrounds}
        sx={{
          marginTop: "20px",
          maxWidth: "300px",
        }}
      >
        {isBgCning ? "Hide Backgrounds" : "Show Backgrounds"}
      </Button>
      <Button
        variant="contained"
        onClick={showLive}
        sx={{
          marginTop: "20px",
          maxWidth: "300px",
        }}
      >
        {isLive ? "Hide Live" : "Show Live"}
      </Button>
      <Box id="swiper-prev">
        <ArrowUpwardIcon
          id="arrow-back"
          sx={{ fontSize: 40, cursor: "pointer" }}
          onClick={handlePrev}
        />
      </Box>
      <Box id="swiper-next">
        <ArrowDownwardIcon
          id="arrow-forward"
          sx={{ fontSize: 40, cursor: "pointer" }}
          onClick={handleNext}
        />
      </Box>
    </Stack>
  );
};

export default ButtonComponent;
