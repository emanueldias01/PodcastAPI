import fs from 'fs'
import path from 'path'
import { Podcast } from '../model/podcast';

const pathName = path.join(__dirname, "../repositories/podcasts.json");

export const repositoryPodcast = async (
    podcastName? : string
): Promise<Podcast[]> => {

    const data = fs.readFileSync(pathName, "utf-8");
    let jsonFile = JSON.parse(data);

    if(podcastName){
        jsonFile = jsonFile.filter((p : Podcast) => p.podcastName === podcastName);
    }

    return jsonFile;
}