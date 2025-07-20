
import { FilterPodcast } from "../model/filter-podcast-mode";
import { repositoryPodcast } from "../repositories/podcast-repository"
import { StatusCode } from "../utils/status-code";

export const serviceFilterPodcasts = async (req? : string) => {

    let responseFormat : FilterPodcast = {
        podcasts : [],
        statusCode : 0
    }

    const queryString = req?.split("?p=")[1] ?? "";
    const list = await repositoryPodcast(queryString);

    responseFormat.podcasts = list;

    if(list.length != 0){
        responseFormat.statusCode = StatusCode.OK;
    }else{
        responseFormat.statusCode = StatusCode.NO_CONTENT;
    }

    return responseFormat;
}