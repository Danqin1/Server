const http = require("http");

const getReq = require("./Methods/get-request");
const putReq = require("./Methods/put-request");
const postReq = require("./Methods/post-request");
const delReq = require("./Methods/delete-request");
//require("dotenv").config();

let mySetup = require("./Data/mySetup.json")

const PORT = 80;

const requestListener = function (req, res) {
    req.mySetup = mySetup;
    switch (req.method) {
        case "GET":
            getReq(req, res);
            break;
        case "POST":
            postReq(req, res);
            break;
        case "PUT":
            putReq(req, res);
            break;
        case "DELETE":
            delReq(req, res);
            break;
        default:
            res.statusCode = 404;
            res.setHeader("Content-Type", "application/json");
            res.write(JSON.stringify({title:"Not found" ,message:"Route not found"}))
            res.end();
            break;
    }
};

const server = http.createServer(requestListener);

server.listen(PORT, () => {
    console.log(`Server is running on port:${PORT}`);
});

