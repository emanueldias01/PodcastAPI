
import { repositoryPodcast } from "../repositories/podcast-repository"

export const serviceFilterPodcasts = async (podcastName : string) => {
    const list = await repositoryPodcast(podcastName);
    return list;
}