import axios from "axios";
import { IEpisode } from "../types/episode";
import _ from 'lodash';


export default class ApiRequests {
  static api = axios.create({
    baseURL: "https://breakingbadapi.com/api",
    timeout: 500,
  });
  static async getAll(): Promise<IEpisode[]> {
    try {
      const data = await (await ApiRequests.api.get("/episodes/")).data;
      return data.map((item: IEpisode) => ({...item, charectersQuantity: item.characters.length}));
    } catch (e) {
      const data = await (await axios.get("http://localhost:3001/series")).data;
      return _.sortBy(data.map((item: IEpisode) => ({...item, charectersQuantity: item.characters.length})), ['season', 'episode']);
    }
  }
}