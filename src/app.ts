import * as http from 'http'
import { getListPodcastByName, getListPodcasts } from './controllers/podcast-controller';
import { Routes } from './routes/routes';
import { HttpMethod } from './utils/http-methods';


export const app = async (req : http.IncomingMessage, res : http.ServerResponse) => {

    const baseUrl = req.url?.split("?")[0] ?? [""]

    if(req.method === HttpMethod.GET && baseUrl === Routes.LIST){
        await getListPodcasts(req, res);
    }
    if(req.method === HttpMethod.GET && baseUrl === Routes.EPISODE){
        await getListPodcastByName(req, res);
    }

}