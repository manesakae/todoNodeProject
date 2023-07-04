const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const todoRouter = require("./routes/todoRouter");
const {MONGO_URI} = require("./config.json");

const app = express();

mongoose.set('strictQuery', true);
(async ()=> {
    try {
        await mongoose.connect(MONGO_URI, {
            useNewUrlParser:true,
            useUnifiedTopology: true
        })
        console.log("Connected successfully to DB");
    } catch (error) {
        console.log("Error while connecting to DB");
    }
})();
app.disable("x-powered-by");

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use("/api/todos",todoRouter);
app.all('*', (req, res, next)=>{
    next(new Error("Route Not Found"));
})
app.use((error, req, res, next)=>{
    res.status(500).json({error: error.message});
})

app.listen(3000, () => {
    console.log("Listening on port 3000");
})