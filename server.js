const express= require("express");
const mongoose= require("mongoose");
require('dotenv').config()

const PORT = process.env.PORT || 5001
mongoose.connect(process.env.MONGO_URI,(err)=>err ? console.log(err):console.log("database is connected"));
const app= express();
app.use(express.json())
app.use("/", require("./routes/personRoutes.js"));

app.listen(PORT,()=>console.log("listening on port:" + PORT));