const { timeStamp } = require("console");
const express = require("express");
const cat_fact = require("./fact");
const rateLimit = require("express-rate-limit");

const app = express();
const PORT = 4000;

app.use(express.json());

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: "Too many requests from this IP, please try again later.",
  standardHeaders: true,
  legacyHeaders: false,
});

app.use(limiter);
// Apply rate limiting to all routes
app.use(limiter);
const myDetails = {
  email: "taiwosamuel8364@gmail.com",
  name: "Taiwo Samuel Oluwatayo",
  stack: "Node.js, MonogDB",
};

app.get("/me", async (req, res) => {
  try {
    // Response
    const catFact = await cat_fact(64);
    res.status(200).json({
      status: "success",
      user: myDetails,
      timeStamp: new Date().toISOString(),
      fact: catFact.fact,
    });
  } catch (err) {
    res.status(500).json({
      meaasge: err.message,
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server is listening at port:${PORT}`);
});
