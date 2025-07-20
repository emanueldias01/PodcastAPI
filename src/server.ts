import * as http from 'http'
import { getListPodcastByName, getListPodcasts } from './controllers/podcast-controller';

const PORT = process.env.PORT

const server = http.createServer(async (req : http.IncomingMessage, res : http.ServerResponse) => {

    const baseUrl = req.url?.split("?")[0] ?? [""]

    if(req.method === "GET" && baseUrl === "/api/list"){
        await getListPodcasts(req, res);
    }
    if(req.method === "GET" && baseUrl === "/api/episode"){
        await getListPodcastByName(req, res);
    }

});

server.listen(PORT, () => {
    console.log(`Server running in port ${PORT}`)
})