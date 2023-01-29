const express = require('express');
const app = express();

app.use(express.json());

const pingRouter = require("./routes/ping.js");
const actionsRouter = require("./routes/post.js");
const leaderboardRouter = require("./routes/leaderboard.js");
const userRouter = require("./routes/user.js");
app.use("/ping", pingRouter);
app.use("/post", actionsRouter);
app.use("/leaderboard", leaderboardRouter);
app.use("/user", userRouter);

app.get('/', (req, res) => {
  res.send('<img src="https://image.petmd.com/files/styles/863x625/public/CANS_dogsmiling_379727605.jpg"/>');
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
