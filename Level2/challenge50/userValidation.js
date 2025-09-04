const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    match: [/^\S+@\S+\.\S+$/, "Invalid email"]
  }
});

const User = mongoose.model("User", userSchema);

(async () => {
  await mongoose.connect("mongodb://127.0.0.1:27017/testdb");

  try {
    await new User({ email: "wrongEmail" }).save();
  } catch (err) {
    console.log("Error:", err.message);
  }

  const u = await new User({ email: "test@example.com" }).save();
  console.log("Saved:", u);

  await mongoose.disconnect();
})();
