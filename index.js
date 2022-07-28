const http = require('http');

const server = http.createServer((request, response) => {
    response.writeHead(200, {"Content-Type": "text/html"});
    response.end("Hello Nordcloud, signed Oliver <img src=”(https://nordcloud.com/wp-content/uploads/2022/01/nordcloud-ibm-logo.svg)”>");
});

const port = process.env.PORT || 1337;
server.listen(port);

console.log("Server running at http://localhost:%d", port);
