module.exports = (req, res) => {
    if(req.url === "/api/mySetup")
    {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.write(JSON.stringify(req.mySetup));
        res.end();
    }
    else
    {
        res.writeHead(404, {"Content-Type": "application/json"});
        res.end(JSON.stringify({title:"Not found" ,message:"Route not found"}));
    }
}