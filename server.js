const PORT = process.env.PORT || 3079;
const API  = process.env.NODE_ENV !== "production" ? require("./config.json") : process.env.API;
const rpn  = require("request-promise-native");
const bp   = require("body-parser");
const app  = require("express")();

app.use(bp.urlencoded({extended: true}));
app.set("view engine", "ejs");

const problemsArray = [];

app.get("/", (req, res) => {
    res.render("index", {problems: problemsArray});
});

app.listen(PORT, () => console.log("Server started..."));