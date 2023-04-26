// const pokemon = require("pokemon");

// console.log(pokemon.random());

// // File based, Build In , Third-Party

const http = require("http");
const fs = require("fs");
const home = fs.readFileSync("./index.html", "utf-8");

const PORT = 4000;
const hostname = "localhost";

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    return res.end(home);
  }
  if (req.url === "/about") {
    return res.end("<h1>About Page</h1>");
  }
  if (req.url === "/contact") {
    return res.end("<h1>Contact Page</h1>");
  }
  //    else{
  //      return res.end("404.. Page Not Found");
  //    }
});

server.listen(PORT, hostname, () => {
  console.log(`Server is working on http://${hostname}:${PORT}`);
});
