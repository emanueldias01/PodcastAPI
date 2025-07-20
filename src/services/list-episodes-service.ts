import { FilterPodcast } from "../model/filter-podcast-mode"
import { repositoryPodcast } from "../repositories/podcast-repository"
import { StatusCode } from "../utils/status-code"

export const serviceListPodcast = async () => {
    let responseFormat : FilterPodcast = {
        podcasts : [],
        statusCode : 0
    }
    const list = await repositoryPodcast();

    responseFormat.podcasts = list;

    if(list.length != 0){
        responseFormat.statusCode = StatusCode.OK;
    }else{
        responseFormat.statusCode = StatusCode.NO_CONTENT;
    }

    return responseFormat;
}