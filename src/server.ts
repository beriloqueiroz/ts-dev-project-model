import express from "express";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    return res.send({ message: "olá mundo" });
});

app.post("/account", (req, res) => {
    const { name } = req.body;
    return res.send(name);
});

console.log("server running..");
app.listen(5000);
