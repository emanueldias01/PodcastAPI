import * as http from 'http'

const port = process.env.PORT;

const server = http.createServer((req : http.IncomingMessage, res : http.ServerResponse) => {})

server.listen(port, () => {
    console.log(`Server running in port ${port}`);
});