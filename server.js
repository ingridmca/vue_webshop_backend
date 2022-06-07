const express = require("express");
const cors = require("cors");
const userRouter = require("./routers/products");

const PORT = 4000;

const app = express();

app.use(express.json()); //body parser middleware remember this one!!!
app.use(cors());

app.use("/products", userRouter); // the call for the route and if you don't have a middleware function in the index.js you don't need the secound paramter!

app.listen(PORT, () => console.log("Hello from port 4000"));
