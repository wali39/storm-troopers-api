const express = require("express");

const cors = require("cors")

const router = require("./router");
const connectDB = require("./db/connect")
require("dotenv").config();

const app = express();

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router);

const PORT = process.env.PORT || 8000;
app.listen(PORT, async () => {
    try {
        await connectDB();
        console.log(`Server started at port ${PORT}`)
    } catch (err) {
        console.log(err)
    }

})