import { IncomingMessage, ServerResponse } from "http";
import { serviceListPodcast } from "../services/list-episodes-service";
import { serviceFilterPodcasts } from "../services/filter-list-episodes-service";
import { StatusCode } from "../utils/status-code";
import { ContentType } from "../utils/content-type";

export const getListPodcasts = async(
    req : IncomingMessage,
    res : ServerResponse
) => {

    const list = await serviceListPodcast();
    res.writeHead(list.statusCode, { "Content-Type" : ContentType.JSON })
    res.end(JSON.stringify(list.podcasts))
}

export const getListPodcastByName = async(
    req : IncomingMessage,
    res : ServerResponse) =>{

    const list = await serviceFilterPodcasts(req.url);
    res.writeHead(list.statusCode, { "Content-Type" : ContentType.JSON })
    res.end(JSON.stringify(list.podcasts))
}