const express = require("express");
const app = express();
const cors =require("cors");
const PORT =process.env.PORT || 3030

app.use(cors({credentials:true, origin:true}));

app.get("/", (req,res)=>{
    res.json({"slackUsername":"pherahrhi","backend":true,"age":27,"biography":"willing to learn and supports manchester united"})
})

app.listen(PORT);