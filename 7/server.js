let http = require("http");
let url = require("url");

let start = (route, handle) => {
    let onRequest = (request, response) => {
        let pathname = url.parse(request.url).pathname;
        console.log("Request for " + pathname + " received.");
        route(handle, pathname, response, request);

    }

    http.createServer(onRequest).listen(8888);
    console.log("Server has started.");
}

exports.start = start;