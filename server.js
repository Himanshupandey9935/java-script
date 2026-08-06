const h=require("http");
const server=h.createServer((req,res)=>{

    if(req.url=== "/")
    {
        res.writeHead(200,{"content-Type": "text/plain"});
        res.end("this is my server landing page");

    }else if(req.url=== "/home")
    {
        res.writeHead(200,{"content-Type": "text/plain"});
        res.end("this is my server home page");
        
    }else if(req.url=== "/about")
    {
        res.writeHead(200,{"content-Type": "text/plain"});
        res.end("this is my server about page");
    }

});
server.listen(3000);