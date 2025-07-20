import { repositoryPodcast } from "../repositories/podcast-repository"

export const serviceListPodcast = async () => {
    const list = await repositoryPodcast()
    return list
}