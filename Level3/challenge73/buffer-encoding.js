const str = "Hello World";
const base64 = Buffer.from(str, "utf8").toString("base64");
console.log("Base64:", base64);
const text = Buffer.from(base64, "base64").toString("utf8");
console.log("UTF-8:", text);
