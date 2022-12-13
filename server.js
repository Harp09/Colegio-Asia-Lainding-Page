const http = require('http');
var app = express();
//const server = http.createServer((req,res) => {
//    res.end('Hello word')
//})
app.get('/', (req, res) => {
res.sendFile("/home/ubuntu/Colegio-Asia-Lainding-Page/index.html")
});

//Recursos
app.use(express.static(__dirname+'/'));

server.listen(3000);
console.log('server on port 3000');
