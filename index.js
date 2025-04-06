const https = require('http');
const fs = require('fs');
const path = require('path');

const start = Date.now();
const PORT = 3000;

const server = https.createServer((req, res)=>{
    if(req.url='/' || req.url =='index.php' || req.url == '/index.html'){
        const file = path.join(__dirname, 'index.php');
        fs.readFile(file, (err, data)=>{
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(data);
        })
    }
    else if(req.url == '/script.js'){
        const file = path.join(__dirname, 'script.js');
        fs.readFile(file, (err, data)=>{
            res.writeHead(200, {'Content-Type': 'text/javascript'});
            res.end(data);
        })
    }
    else if(req.url == '/health'){
        const servertime = Math.floor((Date.now() - start)/1000).toFixed(2);
        const currtime = new Date().toISOString();
        const data = {
            nama: 'Putu Ardanatha Pratama',
            nrp: '5025231156',
            status: 'OK',
            timestamp: currtime,
            uptime: `${servertime} seconds`
        };
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(data));
    }
})

server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    console.log(`Server started at ${new Date().toISOString()}`);
    console.log(`Server health check available at /health`);
});