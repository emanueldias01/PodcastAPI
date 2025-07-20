import { IncomingMessage, ServerResponse } from "http";
import { serviceListPodcast } from "../services/list-episodes-service";

export const getListPodcasts = async(
    req : IncomingMessage,
    res : ServerResponse
) => {
    const list = await serviceListPodcast();
    res.writeHead(200, { "Content-Type" : "application-json" })
    res.end(JSON.stringify(list))
}