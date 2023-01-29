const express = require('express');
const app = express();
const mongoose = require("mongoose");

app.use(express.json());

const userRouter = require("./routes/user.js");
const actionsRouter = require("./routes/post.js");
const leaderboardRouter = require("./routes/leaderboard.js");
const timesheetRouter = require("./routes/timesheet.js");
const feedRouter = require("./routes/feed.js");
app.use("/user", userRouter);
app.use("/post", actionsRouter);
app.use("/leaderboard", leaderboardRouter);
app.use("/timesheet", timesheetRouter);
app.use("/feed", feedRouter);

const dawgs = [
  "https://images.unsplash.com/photo-1615751072497-5f5169febe17?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y3V0ZSUyMGRvZ3xlbnwwfHwwfHw%3D&w=1000&q=80",
  "https://image.petmd.com/files/styles/863x625/public/CANS_dogsmiling_379727605.jpg",
  "http://mnquants.com/images/zach.jpg",
  "http://mnquants.com/images/brian.jpg"
];

app.get('/', (req, res) => {
  res.send(`<img src="${dawgs[Math.floor(Math.random() * dawgs.length)]}"/>`);
});

mongoose
  .connect("mongodb+srv://minnehackers:minnehack@cluster0.tqfedjt.mongodb.net/test", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: "Minnehack",
  })
  .then(() => {
    console.log("Database connection is ready...");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
