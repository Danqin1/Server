const crypto = require("crypto");
const requestBodyParser = require("../Util/body.parser");
const writeToFile = require("../Util/write-to-file")

module.exports = async (req, res) => {
    if(req.url === "/api/mySetup/replace")
    {
        try{
            let body = await requestBodyParser(req);
            body.id = crypto.randomUUID();
            req.mySetup = body;
            writeToFile(req.mySetup);
            res.writeHead(201, {"Content-Type": "application/json"});
            res.end();
        }catch (error) {
            res.writeHead(404, {"Content-Type": "application/json"});
            console.log(error);
            res.end(JSON.stringify({title:"Failed" ,message:"Request body not valid"}));
        }
    }
    else
    {
        res.writeHead(404, {"Content-Type": "application/json"});
        res.end(JSON.stringify({title:"Not found" ,message:"Route not found"}));
    }
}