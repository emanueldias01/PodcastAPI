
import { repositoryPodcast } from "../repositories/podcast-repository"

export const serviceFilterPodcasts = async (req? : string) => {
    const queryString = req?.split("?p=")[1] ?? "";
    const list = await repositoryPodcast(queryString);
    return list;
}