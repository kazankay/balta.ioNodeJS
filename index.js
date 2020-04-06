const app = require('./src/app');
const http = require('http');
const debug = require('debug')('nodestr:server');

const port = normalizePort(process.env.PORT || '3003')
app.set('port', port);

const server = http.createServer(app);

server.listen(port);
server.on('error', onError)
server.on('listening', onListening)
console.log('API na porta: ' + port)

function normalizePort(val) {
    const port = parseInt(val, 10);

    if(isNaN(port)){
        return val;
    }

    if(port >= 0){
        return port;
    }

    return false;
}
// Tratando erro, pesquisar na lista de erros do NODE
function onError(error) {
    if(error.syscall !== 'listen') {
        throw error;
    }

    const bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port;

    switch (error.code) {
        
        case 'EACCES':
            console.error(bind + 'requires elevated privilegies');
            process.exit(1);
            break
        case 'EADDRINUSE':
            console.error(bind + 'is alredy in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
    
}

function onListening() {
    const addr = server.address();
    const bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;
    debug('Listening on' + bind);
}