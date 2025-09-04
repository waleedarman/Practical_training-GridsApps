const express = require("express");
const multer = require("multer");
const path = require("path");
const fs = require("fs");

const app = express();
const uploadDir = path.join(__dirname, "uploads");
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

const storage = multer({ dest: "uploads/" });

app.post("/upload", storage.single("avatar"), (req, res) => {
  if (!req.file) return res.status(400).send("No file uploaded");
  res.send(`Uploaded: ${req.file.originalname}`);
});

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
