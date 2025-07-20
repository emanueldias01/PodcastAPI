import fs from 'fs'
import path from 'path'
import { Podcast } from '../model/podcast';

const pathName = path.join(__dirname, "../repositories/podcasts.json");

export const repositoryPodcast = async (): Promise<Podcast[]> => {
    const data = fs.readFileSync(pathName, "utf-8");
    const jsonFile = JSON.parse(data);

    return jsonFile;
}