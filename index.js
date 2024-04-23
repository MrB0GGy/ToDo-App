import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
let taskList = [];

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("index.ejs", { taskList: taskList });
});

function addTask (req, res, next) {
    var newTask = req.body["task-input"];
    taskList.push(newTask);
    next();
}

app.post("/submit", addTask, (req, res) => {
    res.redirect("/");
});

app.delete("/delete", (req, res) => {

});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
