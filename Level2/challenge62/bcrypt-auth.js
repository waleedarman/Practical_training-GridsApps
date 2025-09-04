const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const app = express();
app.use(express.json());

// اتصال بـ قاعدة users_demo
mongoose.connect("mongodb://127.0.0.1:27017/users_demo")
  .then(() => console.log("Connected to MongoDB: users_demo"))
  .catch((err) => console.error(err));

// تعريف النموذج
const userSchema = new mongoose.Schema({
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true }
});
const User = mongoose.model("User", userSchema);

// تسجيل مستخدم
app.post("/register", async (req, res) => {
  const { email, password } = req.body;
  const hash = await bcrypt.hash(password, 10);
  await User.create({ email, password: hash });
  res.send("User registered");
});

// تسجيل الدخول
app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) return res.status(401).send("User not found");

  const isMatch = await bcrypt.compare(password, user.password);
  if (isMatch) {
    res.send("Login successful");
  } else {
    res.status(401).send("Invalid credentials");
  }
});

// تشغيل السيرفر
app.listen(3000, () => console.log("http://localhost:3000"));
