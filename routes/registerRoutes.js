const express = require("express");
const router = express.Router();

// creating Routers

router.get("/register", (req, res) => {
	res.render("registration");
});

router.post("/register", (req, res) => {
	console.log(req.body);
	res.send("registration done");
});

module.exports = router;
