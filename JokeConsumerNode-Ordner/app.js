const http = require("http");
const port = 5001;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
   url = "http://provider:3000"; // Verwenden Sie hier den Service-Namen "provider"

  http
    .get(url, (apiRes) => {
      var body = "";

      apiRes.on("data", function (chunk) {
        body += chunk;
      });

      apiRes.on("end", function () {
        var jokeJSON = JSON.parse(body);
        
        let html =
          "<!doctype html><html><head><title>M347 Joke Consumer></title></head>";
        html +=
          "<body><h1>M347 Funny Joke</h1><p>" + jokeJSON.joke + "</p></body></html>";
        res.end(html);
      });
    })
    .on("error", function (e) {
      console.log("Got an error: ", e);
    });
});

server.listen(port);
