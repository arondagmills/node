//Dependencies
const express = require("express"); //importing express
path = require("path");
const registrationRoutes = require("./routes/registerRoutes");
// const { application } = require("express");
const app = express();
//Configurations
app.engine("pug", require("pug").__express);
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

//Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use("/public/images", express.static(__dirname + "/public/images"));

//
app.use("/user", registrationRoutes);

app.get("*", (req, res) => {
	res.send("404! This is an invalid URL.");
});
//Bootstrapping Server

//This should always be the last line in the .js file as other lines of code below it will not be executed
app.listen(3000, () => console.log("listening on port 3000"));
