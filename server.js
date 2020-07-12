const express = require("express");
const connectDB = require("./config/db");
const app = express();

connectDB();
app.use(express.json({ extended: false }));
app.get("/", (req, res) => res.send("hello world"));
app.use("/api/users", require("./routes/users"));
app.use("/api/auth", require("./routes/auth"));
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`server started on port ${PORT}`));
