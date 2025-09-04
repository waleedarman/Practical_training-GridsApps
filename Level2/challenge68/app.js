require("dotenv").config();

const allowed = ["dev", "test", "prod"];
if (!allowed.includes(process.env.NODE_ENV)) {
  throw new Error("Invalid NODE_ENV. Use dev/test/prod");
}

console.log("Running in:", process.env.NODE_ENV);
