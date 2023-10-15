const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    switch (req.url) {
        case '/api/components':
            if (req.method == 'GET') {
                fs.readFile('./data/components.json', (err, data) => {
                    if (err) {
                        res.writeHead(500, { 'Content-Type': 'text/plain' });
                        res.end('Error interno del servidor.');
                    } else {
                        res.writeHead(200, { 'Content-Type': 'application/json' });
                        res.end(data);
                    }
                });
            }
            break;

        case '/api/pcgaming':
            fs.readFile('./data/pcgaming.json', (err, data) => {
                if (err) {
                    showError(res);
                } else {
                    okResponse(res, data);
                }
            });
            break;

        case '/api/allproducts':
            fs.readFile('./data/allproducts.json', (err, data) => {
                if (err) {
                    showError(res);
                } else {
                    okResponse(res, data);
                }
            });
            break;

        case '/api/cart':
            if (req.method == 'GET') {
                fs.readFile('./data/cart.json', (err, data) => {
                    if (err) {
                        showError(res);
                    } else {
                        okResponse(res, data);
                    }
                });
            }
            break;

        default:
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('Ruta no encontrada');
            break;
    }
});

function showError(res) {
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Error interno del servidor.');
}

function okResponse(res, data) {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(data);
}

const port = process.env.PORT || 8080;
server.listen(port, () => {
    console.log(`Servidor backend escuchando en el puerto ${port}`);
});