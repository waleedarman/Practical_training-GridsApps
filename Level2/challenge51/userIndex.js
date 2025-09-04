const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

userSchema.index({ email: 1, createdAt: -1 });

const User = mongoose.model("User", userSchema);

(async () => {
  await mongoose.connect("mongodb://127.0.0.1:27017/testdb");

  await User.create({ email: "a@test.com" });
  await User.create({ email: "a@test.com" });
  await User.create({ email: "b@test.com" });

  const users = await User.find().sort({ email: 1, createdAt: -1 });
  console.log(users.map(u => `${u.email} - ${u.createdAt.toISOString()}`));

  await mongoose.disconnect();
})();
