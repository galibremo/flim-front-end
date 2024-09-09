import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import cors from "cors";

const app = express();
const httpServer = createServer(app);

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
  })
);

const io = new Server(httpServer, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

const port = 4000;

app.get("/", (req, res) => {
  res.send("Socket.IO Server");
});

io.on("connection", (socket) => {
  console.log("A client connected");

  socket.on("togglePlayback", (data) => {
    console.log(
      "Received togglePlayback event from client:",
      data.showComments
    );
    io.emit("togglePlayback", { showComments: data.showComments });
  });

  socket.on("toggleClearingThroat", (data) => {
    console.log(
      "Received togglePlayback event from client:",
      data.showClearingThroat
    );
    io.emit("toggleClearingThroat", {
      showClearingThroat: data.showClearingThroat,
    });
  });

  socket.on("toggleTranslating", (data) => {
    console.log(
      "Received togglePlayback event from client:",
      data.showTranslating
    );
    io.emit("toggleTranslating", {
      showTranslating: data.showTranslating,
    });
  });

  socket.on("toggleBackgrounds", (data) => {
    console.log(
      "Received togglePlayback event from client:",
      data.showBackgrounds
    );
    io.emit("toggleBackgrounds", {
      showBackgrounds: data.showBackgrounds,
    });
  });

  socket.on("navigate", (direction) => {
    io.emit("navigate", direction);
  });

  socket.on("disconnect", () => {
    console.log("A client disconnected");
  });
});

httpServer.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
