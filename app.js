const express = require('express')
const app = express();
const cors = require('cors')
const port = 8001;

let corsOptions = {
    origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to pokemon application." });
});

// set port, listen for requests
const PORT = process.env.PORT || port;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});