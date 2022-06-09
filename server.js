const express = require("express");
const cors = require("cors");
const productRouter = require("./routers/products");
const signupRouter = require("./routers/signup");
const authRouter = require("./routers/auth");

const PORT = 4000;

const app = express();

app.use(express.json());
app.use(cors());

app.use("/products", productRouter);
app.use("/signup", signupRouter);
app.use("/login", authRouter);

app.listen(PORT, () => console.log("Hello from port 4000"));
