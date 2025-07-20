import * as http from 'http'
import { getListPodcasts } from './controllers/podcast-controller';

const PORT = process.env.PORT

const server = http.createServer(async (req : http.IncomingMessage, res : http.ServerResponse) => {

    if(req.method === "GET"){
        await getListPodcasts(req, res);
    }

});

server.listen(PORT, () => {
    console.log(`Server running in port ${PORT}`)
})