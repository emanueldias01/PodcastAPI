import { IncomingMessage, ServerResponse } from "http";
import { serviceListPodcast } from "../services/list-episodes-service";
import { serviceFilterPodcasts } from "../services/filter-list-episodes-service";

export const getListPodcasts = async(
    req : IncomingMessage,
    res : ServerResponse
) => {
    const list = await serviceListPodcast();
    res.writeHead(200, { "Content-Type" : "application-json" })
    res.end(JSON.stringify(list))
}

export const getListPodcastByName = async(
    req : IncomingMessage,
    res : ServerResponse) =>{

    const queryString = req.url?.split("?p=")[1] ?? "";
    const list = await serviceFilterPodcasts(queryString);
    res.writeHead(200, { "Content-Type" : "application/json" })
    res.end(JSON.stringify(list))
}