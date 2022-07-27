const express = require("express");
const app = express();
const PORT = 5000;
const cors = require("cors");
const conn = require("./db");

conn.connection.on("connected", (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log("Connected to Mongodb");
    }
})

app.use(cors());
app.use(express.json());
app.use("/user", require("./routes/user"))

//-----------------------------------------------------

app.listen(PORT, () => {
    console.log("Server is Start");
});