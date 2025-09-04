const { EventEmitter } = require("events");
const e = new EventEmitter();

const log1 = () => console.log("log1");
const log2 = () => console.log("log2");

e.on("x", log1);
e.on("x", log2);

e.off("x", log2);

e.emit("x");  
