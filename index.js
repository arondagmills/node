//Dependencies

const express = require("express");

//Instantiations
const app = express();

//Configurations

//Middleware Functions
app.use((req, res, next) => {
  console.log('A new request received at ' + Date.now());
  next();
});

// To parse URL encoded data
app.use(express.urlencoded({ extended: false }));

//Routes
app.get('/homepage', (req, res) => { // new
  res.send("Homepage! Hello world.");
});


app.get('/about', (req, res) => { // new
    res.send("About page. Nice.");
  });

  //Bootstrapping Server


// call back is function that is passed into other function as a perimeter
app.get('/books/:bookId', (req, res) => {
  res.send(req.params);
});


// For invalid routes
app.get('*', (req, res) => {
  res.send('404! This is an invalid URL.');
});



app.listen(3000, () => console.log("listening on port 3000"));
