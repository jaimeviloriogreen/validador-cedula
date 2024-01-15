import express from "express";
import "dotenv/config";

const port = process.env.PORT || 4500;

const { pathname:index } = new URL("public/index.html", import.meta.url);

const app = express();

app.use(express.static("src/public"));

app.get("*", (req, res)=>{
    return res.sendFile(index);
});

app.listen(port, ()=> console.log(`App running on port ${ port }`));