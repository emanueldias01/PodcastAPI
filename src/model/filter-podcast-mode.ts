import { Podcast } from "./podcast";

export interface FilterPodcast{
    podcasts: Podcast[];
    statusCode : number;
}